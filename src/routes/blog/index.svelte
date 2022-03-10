<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const response = await fetch('/api/blog/posts.json', {
			method: 'POST'
		});
		return {
			status: 200
			// props: {
			// 	posts: await response.json()
			// }
		};
	};
</script>

<script lang="ts">
	import { theme as themeStore } from '$lib/stores/theme';
	import type { Post } from '$lib/types/post';
	import { Card, Button } from 'spaper';
	// export let posts: Post[];
</script>

<svelte:head>
	<title>Blog posts</title>
</svelte:head>

<div class="main-content border border-primary {$themeStore === 'dark' ? 'bg-dark' : 'bg-light'}">
	<h1>Blog posts</h1>
	<!-- {#each posts as post}
		<Card title={post.title} image={post.mainImage}>
			Card Content
			<p slot="bottom">
				<Button>Read</Button>
			</p>
		</Card>
	{/each} -->
</div>

<style lang="scss">
	div.main-content {
		margin: 2rem auto;
		width: min(960px, 90vw);
		z-index: 1;
	}
</style>
