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
	<sub>Published at {new Date(date).toLocaleDateString()}</sub>
	<slot />
</article>
<div class="scroll2top">
	<button
		on:click={() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}}
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="m8.7 15.5 2.5-5 5.4 5 .5-.6-5.3-9.1L6 14Z" /><path fill="none" d="M0 0h24v24H0z" />
		</svg>
	</button>
</div>

<style lang="scss">
	sub {
		display: block;
		width: 100%;
		text-align: center;
	}
	.scroll2top {
		position: fixed;
		bottom: 2rem;
		right: 1.5rem;
		button {
			border-radius: 46% 54% 70% 30% / 30% 50% 50% 70%;
			svg {
				width: 1rem;
				height: 1rem;
			}
			&:focus {
				outline: none;
				border: 2px solid #41403e;
			}
		}
	}
</style>
