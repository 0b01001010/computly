import * as fs from 'fs';
import sharp from 'sharp';
import * as path from 'path';
import kleur from 'kleur';
import { config } from 'dotenv';
config();

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
		fs.mkdirSync(postPubPath, { recursive: true });
	}
	const postRoute = path.join(blogRoute, slug);
	// Search post directory for any file that's not index.svx or info.json
	const postImages = fs.readdirSync(postRoute).filter((_file) => {
		return _file.startsWith('main');
	});

	// Copy all images to post public path
	if (postImages.length === 0) {
		kleur.bgRed().bold().white(`Couldn't find main image in ${slug}`);
		return;
	}
	postImages.forEach((_imgFileName) => {
		const imgSrc = path.join(postRoute, _imgFileName);
		const imgDest = path.join(postPubPath, _imgFileName);
		fs.copyFileSync(imgSrc, imgDest);
		// Delete main image from post directory
		// kleur.bgYellow().blue(`Deleting ${imgSrc}`);
		// fs.unlinkSync(imgSrc);
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
			.jpeg({
				quality: 90
			})
			.resize(10)
			.blur(100)
			.toBuffer({ resolveWithObject: false });
		const placeholder = `data:image/jpeg;base64,${(await buffer).toString('base64')}`;
		return { placeholder, format, width, height };
	} catch (error) {
		kleur.bgRed().bold().white(`Error getting image metadata : ${error}`);
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
		kleur.green('Generating formats');
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
					.toFile(`${imgSrc.replace(/\.[^/.]+$/, '.webp')}`, _sharpCallback),
			!imgSrc.endsWith('.png') &&
				sharp(imgSrc)
					.resize(size)
					.png()
					.toFile(`${imgSrc.replace(/\.[^/.]+$/, '.png')}`, _sharpCallback)
		];
		return await Promise.all(_jobs);
	} catch (error) {
		kleur.bgRed().bold().white(`Error generating formats :`);
		console.error(error);
	}
}

const getPublicMainImageName = (postPubPath): string => {
	const postImages = fs.readdirSync(postPubPath).filter((_file) => {
		const fileExt = _file.split('.').pop();
		if (_file.startsWith('main') && imageExtensions.includes(fileExt)) {
			return _file;
		}
	});
	return postImages[0];
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

		const mainImageFile = getPublicMainImageName(postPubPath);

		const mainImgSrc = path.join(postPubPath, mainImageFile);
		const mainImgMeta = await extractImageMeta(mainImgSrc);
		await generateFormats({
			imgSrc: mainImgSrc,
			size: Math.min(mainImgMeta.width, maxWidth)
		});

		const _url = `/posts/${postSlug}/main`;

		// Create json object of all the images
		const outputData = {
			slug: postSlug,
			sources: [
				{
					src: `${_url}.avif`,
					format: 'image/avif'
				},
				{
					src: `${_url}.webp`,
					format: 'image/webp'
				},
				{
					src: `${_url}.png`,
					format: `image/png`
				}
			],
			placeholder: mainImgMeta.placeholder,
			width: mainImgMeta.width,
			height: mainImgMeta.height
		};

		const outputPath = path.join(blogRoute, postSlug, '_info.json');
		fs.writeFileSync(outputPath, JSON.stringify(outputData, null), 'utf-8');
	});
	kleur.bgGreen().bold().white('Done');
};

main();
