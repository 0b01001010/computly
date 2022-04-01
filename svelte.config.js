import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: './src/routes/blog/_post.layout.svelte'
		})
	],

	kit: {
		adapter: vercel(),
		files: {
			hooks: 'src/hooks'
		},
		vite: {
			plugins: [imagetools()]
		}
	},
	onwarn: (warning, handler) => {
		const { code } = warning;
		if (code === 'anchor-is-valid' || code === 'a11y-autofocus') return;
		if (code === 'css-unused-selector') return;
		handler(warning);
	}
};

export default config;
