import * as fs from 'fs';
import sharp from 'sharp';
import * as path from 'path';

const staticPostsPath = path.resolve('static/posts');

const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif'];

const maxWidth = 1920;

const blogRoute = path.resolve('src/routes/blog');

const getPosts = () => {
	/**
	 * Get all posts in the blog directory
	 *
	 * @returns {Array<string>} - An array of posts
	 */
	const blogContents = fs.readdirSync(blogRoute);
	return blogContents.filter((_dir) => {
		return fs.statSync(path.join(blogRoute, _dir)).isDirectory();
	});
};

const preparePublicDir = async (slug: string, postPubPath: string) => {
	/**
	 * Create a public directory for the given post,and move images to it.
	 *
	 * @param {string} slug - The slug of the post
	 * @param {string} postPubPath - The path of the post
	 */
	if (!fs.existsSync(postPubPath)) {
		console.info('Creating directory: ', postPubPath);
		fs.mkdirSync(postPubPath);
	}
	const postRoute = path.join(blogRoute, slug);
	// Search post directory for any file that's not index.svx or info.json
	const postImages = fs.readdirSync(postRoute).filter((_file) => {
		return !_file.endsWith('.svx') && !_file.endsWith('.json');
	});

	// Copy all images to post public path
	if (postImages.length === 0) {
		console.warn('No images found in post: ', slug);
		return;
	}
	postImages.forEach((_imgFileName) => {
		const imgSrc = path.join(postRoute, _imgFileName);
		const imgDest = path.join(postPubPath, _imgFileName);
		fs.copyFileSync(imgSrc, imgDest);
		// Delete header image from post directory
		console.warn(`Deleting ${imgSrc}`);
		fs.unlinkSync(imgSrc);
	});
};

function _sharpCallback(err, info) {
	/**
	 * Useless function to be used as sharp callback
	 */
	if (err) {
		console.error(err);
	}
	return info;
}

const extractImageMeta = async (source: string) => {
	/**
	 * Extract basic metadata from given image, and create a small copy of it to be used as a placeholder
	 *
	 * @param {string} source - The source image path
	 * @returns {Promise<{ placeholder, format, width, height }>}
	 */
	try {
		const imageObject = sharp(source);

		const { format, width, height } = await imageObject.metadata();

		const buffer = await imageObject
			.resize(100)
			.jpeg({
				quality: 50,
				progressive: true,
				optimiseScans: true
			})
			.blur(10)
			.toBuffer({ resolveWithObject: false });
		const placeholder = `data:image/jpeg;base64,${(await buffer).toString('base64')}`;
		return { placeholder, format, width, height };
	} catch (error) {
		console.error('Error getting image metadata: ', error);
	}
};

async function generateFormats({ imgSrc, size }) {
	/**
	 * Generate modern formats for the given image
	 * @param {string} imgSrc - The source image path
	 * @param {number} size - The size of the image to generate
	 * @param {string} outputPath - The output path of the image
	 *
	 * @returns {Promise<Object>}
	 */
	try {
		const _jobs = [
			!imgSrc.endsWith('.avif') &&
				sharp(imgSrc)
					.resize(size)
					.avif()
					.toFile(`${imgSrc.replace(/\.[^/.]+$/, '.avif')}`, _sharpCallback),
			!imgSrc.endsWith('.webp') &&
				sharp(imgSrc)
					.resize(size)
					.webp()
					.toFile(`${imgSrc.replace(/\.[^/.]+$/, '.webp')}`, _sharpCallback)
		];
		return await Promise.all(_jobs);
	} catch (error) {
		console.error('Error while generating image format: ', error);
	}
}

const filterImageFiles = (postPubPath) => {
	const postImages = fs.readdirSync(postPubPath).filter((_file) => {
		const fileExt = _file.split('.').pop();
		if (imageExtensions.includes(fileExt) && !_file.endsWith('.webp') && !_file.endsWith('.avif')) {
			return _file;
		}
	});
	return postImages;
};

const main = async () => {
	// Get all posts
	const posts = getPosts();

	// Setup post static folder
	const postDirsPromises = posts.map(async (_slug) => {
		const postPubPath = path.join(staticPostsPath, _slug);
		return preparePublicDir(_slug, postPubPath);
	});
	await Promise.all(postDirsPromises);

	posts.forEach(async (postSlug) => {
		const postPubPath = path.join(staticPostsPath, postSlug);

		const ogPostImages = filterImageFiles(postPubPath);

		const postImagesData = ogPostImages.map(async (_imgFileName) => {
			try {
				const imgSrc = path.join(postPubPath, _imgFileName);
				const imgMeta = await extractImageMeta(imgSrc);
				await generateFormats({
					imgSrc,
					size: Math.min(imgMeta.width, maxWidth)
				});
				return {
					...imgMeta,
					name: _imgFileName.split('.').shift()
				};
			} catch (error) {
				console.error('Error while generating format: ', error);
				return;
			}
		});
		const postImages = await Promise.all(postImagesData);
		// Create json object of all the images
		const outputData = postImages.map((_img) => {
			const _url = `/posts/${postSlug}/${_img.name}`;
			return {
				name: _img.name,
				sources: [
					{
						srcset: `${_url}.avif`,
						type: 'image/avif'
					},
					{
						srcset: `${_url}.webp`,
						type: 'image/webp'
					},
					{
						srcset: `${_url}`,
						type: `image/${_img.format}`
					}
				],
				placeholder: _img.placeholder,
				width: _img.width,
				height: _img.height
			};
		});

		const outputPath = path.join(blogRoute, postSlug, '_info.json');
		fs.writeFileSync(outputPath, JSON.stringify(outputData, null), 'utf-8');
	});
};

main();
