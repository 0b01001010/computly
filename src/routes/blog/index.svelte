<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async () => {
		let posts: Post[] = [];

		const modules = import.meta.glob('./**/index.svx');
		const infoFiles = import.meta.glob('./**/_info.json');

		for (const path in modules) {
			const _dir = path.split('/')[1];
			const md = await modules[path]();
			const infoJson = await infoFiles[`./${_dir}/_info.json`]();
			const mainImage = infoJson.default;
			posts.push({
				...md.metadata,
				slug: _dir,
				excerpt: md.metadata.description.replace(/^(.{100}[^\s]*).*/, '$1'),
				mainImage
			});
		}
		return {
			status: 200,
			props: {
				posts
			}
		};
	};
</script>

<script lang="ts">
	import { theme as themeStore } from '$lib/stores/theme';
	import type { Post } from '$lib/types/post';
	import Image from '$lib/Components/Image.svelte';
	export let posts: Post[];
</script>

<svelte:head>
	<title>Blog posts</title>
</svelte:head>

<main class="main-content border border-primary {$themeStore === 'dark' ? 'bg-dark' : 'bg-light'}">
	<section>
		{#each posts as post}
			<div class="post-card">
				<a sveltekit:prefetch class="image-link" href="/blog/{post.slug}">
					<Image imageData={post.mainImage} />
				</a>
				<div class="post-contents">
					<a sveltekit:prefetch href="/blog/{post.slug}"><h1>{post.title}</h1></a>
					<p>{post.excerpt}</p>
					<div>
						<sub>{new Date(post.date).toLocaleDateString()}</sub>
						<a sveltekit:prefetch href="/blog/{post.slug}">Read more</a>
					</div>
				</div>
			</div>
		{/each}
	</section>
</main>

<style lang="scss">
	section {
		display: grid;
		padding: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		grid-column-gap: 1rem;
		grid-auto-rows: 1fr;
		.post-card {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: stretch;
			a.image-link {
				text-decoration: none;
				color: inherit;
				background: none;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				filter: opacity(0.8) grayscale(1);
				transition: all 100ms ease-in-out;
				&:hover {
					filter: opacity(1) grayscale(0);
				}
			}
			.post-contents {
				padding: 1rem;
				h1 {
					font-size: 5vmin;
					letter-spacing: -2px;
					text-align: center;
				}
				div {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
			}
		}
	}
</style>
