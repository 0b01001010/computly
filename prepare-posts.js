import fs from 'fs';
import sharp from 'sharp';
import path from 'path';
import { BLOG_PATH, IMG_PATH, getAllPosts } from './src/lib/utilities/blog.js';
import { makeDirectory } from './src/lib/utilities/file.js';
import { generateFormats, getPlaceholder, getMetadata } from './src/lib/utilities/image.js';

const rootDir = path.resolve();
const maxWidth = 1920;

const extractImageMeta = async (source) => {
	const imageObject = sharp(source);

	const metaPromises = [getMetadata({ imageObject }), getPlaceholder({ imageObject })];
	const [metadataResult, placeholder] = await Promise.all(metaPromises);

	const { format, width, height } = metadataResult;

	return { placeholder, format, width, height };
};

const moveAllImagesToStatic = async (post) => {
	const { slug } = post;
	const dstDir = path.join('static', IMG_PATH, slug);

	// Check if directory
	if (!fs.existsSync(dstDir)) {
		await makeDirectory(dstDir);
	}

	const allImages = [];

	const _postFiles = fs.readdirSync(path.join(BLOG_PATH, slug));
	const _ogImages = _postFiles.filter((_file) => !_file.endsWith('md'));

	// Move all images to IMG_PATH
	_ogImages.forEach((_img) => {
		const _imgPath = path.join(BLOG_PATH, slug, _img);
		const _imgDst = path.join(dstDir, _img);

		fs.copyFile(_imgPath, _imgDst, (err) => {
			if (err) {
				console.error(`Couldn't copy image ${_imgPath}`, err);
			}
		});
		allImages.push(_imgDst);
	});
	return allImages;
};

const main = async () => {
	const location = path.join(rootDir, BLOG_PATH);

	// Get all posts
	const posts = getAllPosts(location);

	// Extract main image path from each post to generate meta data
	const imgMetaPromises = posts.map(async (_Post) => {
		try {
			const { mainImage, slug } = _Post;
			const source = path.join(rootDir, BLOG_PATH, slug, mainImage);
			return extractImageMeta(source);
		} catch (err) {
			console.error('Error while preparing image path: ', err);
		}
	});
	const imgMetadata = await Promise.all(imgMetaPromises);

	const ogImgFilesPromises = posts.map(async (_Post) => {
		try {
			return moveAllImagesToStatic(_Post);
		} catch (err) {
			console.error('Error while preparing image path: ', err);
		}
	});
	const ogImgFiles = await Promise.all(ogImgFilesPromises);

	// Create a directory for each post to store the generated images data in a js file
	const generatedDataDir = path.join(rootDir, 'src/lib/generated/posts');
	await makeDirectory(generatedDataDir);

	posts.forEach((element, index) => {
		const { slug, mainImage, mainImageAlt } = element;
		const src = path.join(IMG_PATH, slug, mainImage);

		const { format: imgFormat, width, height, placeholder } = imgMetadata[index];

		const _postImages = ogImgFiles[index];
		_postImages.forEach(async (_imgSrc) => {
			try {
				await generateFormats({
					imgSrc: path.join(rootDir, _imgSrc),
					size: Math.min(width, maxWidth),
					outputPath: path.join(rootDir, _imgSrc)
				});
			} catch (error) {
				console.error(
					'Error while generating format from generate-responsive-image-data.js: ',
					error
				);
			}
		});

		// Create json object of all the images
		const outputData = {
			alt: mainImageAlt,
			sources: [
				{ srcset: '/' + src.replace(/\.[^/.]+$/, '.avif'), type: 'image/avif' },
				{ srcset: '/' + src.replace(/\.[^/.]+$/, '.webp'), type: 'image/webp' },
				{ srcset: '/' + src, type: `image/${imgFormat}` }
			],
			width,
			height,
			placeholder
		};
		const outputPath = path.join(generatedDataDir, `${slug}.json`);
		fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8');
	});
};

main();
