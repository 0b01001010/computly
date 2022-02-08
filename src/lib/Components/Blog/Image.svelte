<script lang="ts">
	export let alt: string;
	export let sources: { srcset: string; type: string }[];
	let src = sources[sources.length - 1].srcset;
	export let placeholder: string;
	export let width: number; // needed to reduce CLS
	export let height: number; // needed to reduce CLS
	export let maxWidth = '1280px';
	export let sizes = `(max-width: ${maxWidth}) 100vw, ${maxWidth}}`;
	export let loading: 'lazy' | 'eager' = 'lazy';
</script>

<picture>
	{#each sources as source}
		<source data-sizes={sizes} data-srcset={source.srcset} type={source.type} {width} {height} />
	{/each}
	<img
		class="lazy"
		{alt}
		{loading}
		decoding="async"
		{width}
		{height}
		data-src={src}
		src={placeholder}
		style={`max-width:${maxWidth};`}
	/>
</picture>

<style>
	picture {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	img {
		height: auto;
		width: clamp(80vmin, 70%, 1200px);
	}

	img:not([src]):not([srcset]) {
		visibility: hidden;
	}
</style>
