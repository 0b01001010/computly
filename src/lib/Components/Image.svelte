<script lang="ts">
	import type { ImageProps } from '$lib/types/imageProps';
	import { Picture } from 'svelte-lazy-loader';

	export let imageData: ImageProps;
	const { sources, placeholder, alt, width, height } = imageData;
</script>

<Picture src={sources[sources.length - 1].srcset} {placeholder} {alt} {width} {height}>
	{#each sources as { srcset, type }}
		<source data-srcset={srcset} {type} />
	{/each}
</Picture>
