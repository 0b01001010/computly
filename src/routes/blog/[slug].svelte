<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params, fetch }) => {
		const { slug } = params;
		const res: Response = await fetch('/api/blog/posts.json', {
			method: 'POST',
			body: JSON.stringify({
				slug
			})
		});
		const imageData = await import(`../../lib/generated/posts/${slug}.js`);

		return {
			status: res.status,
			props: {
				post: await res.json(),
				imageData: { ...imageData.default },
				page: (await import(`../../lib/posts/${slug}/index.md`)).default
			}
		};
	};
</script>

<script lang="ts">
	import type { Post } from '$lib/types/post';

	import { theme as themeStore } from '$lib/stores/theme';
	import Image from '$lib/Components/Blog/Image.svelte';

	export let page;
	export let imageData;
	export let post: Post;

	$: darkMode = $themeStore === 'dark';

	const { alt, width, height, src, sources, placeholder } = imageData;
	const sizes = '(max-width: 672px) calc(100vw - 32px), 672px';
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>
<article class="{darkMode ? 'bg-dark' : 'bg-light'} border border-2">
	<h1>{post.title}</h1>
	<Image {alt} {width} loading="eager" {height} {src} {sources} {placeholder} {sizes} />
	<svelte:component this={page} />
</article>

<style lang="scss">
	article {
		padding: 1em;
		margin: 3rem 1rem 5rem;
		h1:first-child {
			text-align: center;
		}
	}
</style>
