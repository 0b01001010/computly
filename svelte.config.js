import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		preprocess({
			scss: {
				prependData: "@import 'src/lib/styles/index.scss';"
			}
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter({ precompress: true }),
		files: {
			hooks: 'src/hooks'
		}
	}
};

export default config;
