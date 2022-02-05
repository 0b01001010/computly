import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex({ extensions: ['.svelte.md', '.md', '.svx'] }),
		preprocess({
			scss: {
				prependData: "@import 'src/lib/styles/variables.scss';",
			},
		})],

	kit: {
		adapter: adapter()
	}
};

export default config;
