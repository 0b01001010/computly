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
	import type { Post } from '$lib/types/post';
	export let page;
	console.log(page);

	export let post: Post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>
<article>
	<!-- {@html post.body} -->
	<svelte:component this={page} />
</article>
