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
		try {
			const postPath = `../../../static/assets/posts/${slug}`;
			const imageData = await import(`${postPath}/info.json`);
			const postData = await import(`${postPath}/post.md`);
			return {
				status: res.status,
				props: {
					post: await res.json(),
					imageData: { ...imageData.default },
					page: { ...postData.default }
				}
			};
		} catch (error) {
			console.error('Error loading post from [slug].svelte', error);
			return {
				status: 404
			};
		}
	};
</script>

<script lang="ts">
	import type { Post } from '$lib/types/post';
	import type { ImageProps } from '$lib/types/imageProps';

	import { theme as themeStore } from '$lib/stores/theme';
	import Image from '$lib/Components/Blog/Image.svelte';

	export let page;

	export let imageData: ImageProps;

	export let post: Post;

	$: darkMode = $themeStore === 'dark';

	const { alt, width, height, sources, placeholder } = imageData;
	const sizes = '(max-width: 672px) calc(100vw - 32px), 672px';
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>
<article class="{darkMode ? 'bg-dark' : 'bg-light'} border border-2">
	<Image {alt} {width} {height} {sources} {placeholder} {sizes} loading="lazy" />
	<h1>{post.title}</h1>
	<svelte:component this={page} />
</article>

<style lang="scss">
	article {
		padding: 1em;
		margin: 3rem 1rem 5rem;
		h1:first-of-type {
			text-align: center;
		}
	}
</style>
