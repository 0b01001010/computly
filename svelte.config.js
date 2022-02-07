import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				prependData: "@import 'src/lib/styles/variables.scss';"
			}
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter({ precompress: true }),
		files: {
			hooks: 'src/hooks'
		},
		vite: {
			define: {
				'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()) // Using this for sitemap.xml
			},
			plugins: [imagetools({ force: true })],
		}
	}
};

export default config;
