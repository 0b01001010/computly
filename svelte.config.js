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
	},
	onwarn: (warning, handler) => {
		const { code, frame } = warning;

		if (code === 'anchor-is-valid' || code === 'a11y-autofocus') return;
		if (code === 'css-unused-selector')
			// && frame.includes("shape")
			return;
		handler(warning);
	}
};

export default config;
