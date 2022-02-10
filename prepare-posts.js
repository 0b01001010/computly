import fs from 'fs';
import sharp from 'sharp';
import path from 'path';
import { BLOG_PATH, getAllPosts, IMG_PATH } from './src/lib/utilities/blog.js';
import { generateFormats, getPlaceholder, getMetadata } from './src/lib/utilities/image.js';

const maxWidth = 1920;

const extractImageMeta = async (source) => {
	const imageObject = sharp(source);

	const metaPromises = [getMetadata({ imageObject }), getPlaceholder({ imageObject })];
	const [metadataResult, placeholder] = await Promise.all(metaPromises);

	const { format, width, height } = metadataResult;
	return { placeholder, format, width, height };
};

const getPostImages = async (post) => {
	/**
	 * Get all images used in a post
	 * @param {Object} post - Post object
	 * @returns {Array} allImages - Array of image paths
	 */
	const { slug } = post;
	const postDir = path.join(BLOG_PATH, slug);
	const dstDir = path.join(IMG_PATH, slug);
	if (!fs.existsSync(dstDir)) {
		fs.mkdirSync(dstDir);
	}

	const _postFiles = fs.readdirSync(postDir);

	const excludedExtensions = ['.md', '.json', '.avif', '.webp'];
	const postImages = _postFiles.filter((_file) => {
		const fileExtension = path.extname(_file);
		return !excludedExtensions.includes(fileExtension);
	});
	postImages.forEach((_imgSrc) => {
		const src = path.join(postDir, _imgSrc);
		const dst = path.join(dstDir, _imgSrc);
		fs.copyFileSync(src, dst);
	});
	return postImages;
};

const main = async () => {
	// Get all posts
	const posts = getAllPosts(BLOG_PATH);

	// Extract main image path from each post to generate meta data
	const imgMetaPromises = posts.map(async (_Post) => {
		try {
			const { mainImage, slug } = _Post;
			const source = path.join(BLOG_PATH, slug, mainImage);
			return extractImageMeta(source);
		} catch (err) {
			console.error('Error while preparing image path: ', err);
		}
	});
	const imgMetadata = await Promise.all(imgMetaPromises);
	const ogImgFilesPromises = posts.map(async (_Post) => {
		try {
			return getPostImages(_Post);
		} catch (err) {
			console.error('Error while preparing image path: ', err);
		}
	});
	const ogImgFiles = await Promise.all(ogImgFilesPromises);
	posts.forEach((element, index) => {
		const { slug, mainImage, mainImageAlt } = element;

		const { format: imgFormat, width, height, placeholder } = imgMetadata[index];

		const _postImages = ogImgFiles[index];
		_postImages.forEach(async (_imgSrc) => {
			try {
				await generateFormats({
					imgSrc: path.join(IMG_PATH, slug, _imgSrc),
					size: Math.min(width, maxWidth)
				});
			} catch (error) {
				console.error(
					'Error while generating format from generate-responsive-image-data.js: ',
					error
				);
			}
		});

		const src = path.join('assets/posts', slug, mainImage);
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
		const outputPath = path.join(BLOG_PATH, slug, 'info.json');
		fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8');
	});
};

main();
