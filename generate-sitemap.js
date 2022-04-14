/**
 * @copyright
 * https://github.com/rodneylab/sveltekit-blog-mdx/blob/main/generate-sitemap.js
 * All rights reserved to the original author (@rodneylab)
 *
 * I only changed a few things to make it work with my implementation.
 */

import { config } from 'dotenv';
import fm from 'front-matter';
import fs from 'fs';
import path from 'path';

config();

const siteUrl = process.env.WEBSITE_URL;

const TIMESTAMP = new Date().toISOString();

const __dirname = path.resolve();
const sitemapFile = path.join(__dirname, 'static/sitemap.xml');

function getPages() {
	const location = path.resolve(`./src/routes`);
	const pages = fs.readdirSync(location).reduce((accumulator, currentValue) => {
		if (
			path.extname(currentValue) === '.svelte' &&
			path.basename(currentValue).indexOf('__') !== 0
		) {
			accumulator.push(`${siteUrl}/${currentValue.replace('.svelte', '/').replace('index/', '')}`);
		}
		return accumulator;
	}, []);
	return pages;
}

export const getPosts = () => {
	const location = path.join('./src/routes/blog/');
	const directories = fs
		.readdirSync(location)
		.filter((element) => fs.lstatSync(`${location}/${element}`).isDirectory());
	const articles = [];

	directories.forEach((element) => {
		const contentPath = `${location}/${element}/index.svx`;
		if (fs.existsSync(contentPath)) {
			const content = fs.readFileSync(contentPath, { encoding: 'utf-8' });
			const frontmatter = fm(content);
			const { date } = frontmatter.attributes;
			articles.push({ slug: element, date });
		}
	});
	return articles;
};

const render = (pages, posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:pagemap="http://www.google.com/schemas/sitemap-pagemap/1.0"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
	>
	${pages
		.map(
			(element) => `  <url>
	    <loc>${element}</loc>
		  <lastmod>${`${TIMESTAMP}`}</lastmod>
		  <changefreq>daily</changefreq>
		  <priority>0.4</priority>
	  </url>`
		)
		.join('')}
	${posts
		.map((element) => {
			const { slug } = element;
			return `  <url>
	    <loc>${siteUrl}/blog/${slug}/</loc>
		  <lastmod>${`${TIMESTAMP}`}</lastmod>
		  <changefreq>daily</changefreq>
		  <priority>0.7</priority>
	  </url>
	`;
		})
		.join('')}</urlset>`;

const pages = getPages();
const posts = getPosts();

fs.writeFileSync(sitemapFile, render(pages, posts));
