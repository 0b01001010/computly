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
		const post = await res.json();

		return {
			status: 200,
			props: {
				post
			}
		};
	};
</script>

<script lang="ts">
	import type { Post } from '$lib/types/post';

	export let post: Post;
</script>

<pre>
	{post.title}
</pre>
