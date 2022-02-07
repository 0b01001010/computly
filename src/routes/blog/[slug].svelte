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
		return {
			status: res.status,
			props: {
				post: await res.json(),
				page: (await import('../../posts/test.md')).default
			}
		};
	};
</script>

<script lang="ts">
	import { theme as themeStore } from '$lib/stores/theme';
	import type { Post } from '$lib/types/post';
	export let page;

	export let post: Post;
	$: darkMode = $themeStore === 'dark';
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>
<article class="{darkMode ? 'bg-dark' : 'bg-light'} border border-2">
	<h1>{post.title}</h1>
	<!-- {@html post.body} -->
	<svelte:component this={page} />
</article>

<style lang="scss">
	article {
		padding: 1em;
		margin: 2rem 1rem;
		h1:first-child {
			text-align: center;
		}
	}
</style>
