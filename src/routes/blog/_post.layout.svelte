<script lang="ts">
	import { theme as themeStore } from '$lib/stores/theme';
	import Image from '$lib/Components/Blog/Image.svelte';

	export let title;
	export let imagesData;
	export let date;
	export let description;
	$: darkMode = $themeStore === 'dark';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<article class="{darkMode ? 'bg-dark' : 'bg-light'} border border-2">
	<Image imageData={imagesData.filter((_i) => _i.name === 'header')[0]} />
	<h1>{title}</h1>
	<sub>Published at {date.split('T').shift()}</sub>
	<slot />
</article>

<style lang="scss">
	sub {
		display: block;
		width: 100%;
		text-align: center;
	}
</style>
