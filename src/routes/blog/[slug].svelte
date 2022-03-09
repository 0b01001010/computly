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
			const imageData = await import(`../../posts/${slug}/info.json`);
			const page = await import(`../../posts/${slug}/post.md`);

			return {
				status: res.status,
				props: {
					post: await res.json(),
					imageData: { ...imageData.default },
					page: page.default
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
	import { Picture } from 'svelte-lazy-loader';

	import { theme as themeStore } from '$lib/stores/theme';

	export let post: Post, imageData: ImageProps, page;

	$: darkMode = $themeStore === 'dark';

	const { alt, sources, placeholder } = imageData;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>
<article class="{darkMode ? 'bg-dark' : 'bg-light'} border border-2">
	<Picture {alt} src={sources[sources.length - 1].srcset} {placeholder}>
		{#each sources as { srcset, type }}
			<source data-srcset={srcset} {type} />
		{/each}
	</Picture>
	<h1>{post.title}</h1>
	<svelte:component this={page} />
</article>
