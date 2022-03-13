<script>
	import { theme as themeStore } from '$lib/stores/theme';
	import Image from '$lib/Components/Blog/Image.svelte';
	import { fly } from 'svelte/transition';
	import { backInOut } from 'svelte/easing';

	/** @type {string} */
	export let title;
	/** @type {import('$lib/types/imageProps').ImageProps[]} */
	export let imagesData;
	/** @type {string} */
	export let date;
	/** @type {string} */
	export let description;
	$: darkMode = $themeStore === 'dark';

	let scroll2Top = false;
	const handleScroll = () => {
		scroll2Top = document.body.scrollTop > 500 || document.documentElement.scrollTop > 500;
	};
</script>

<svelte:window on:scroll={handleScroll} />
<svelte:head>
	<title>{title}</title>
</svelte:head>
<article class="{darkMode ? 'bg-dark' : 'bg-light'} border border-2 post-article">
	<Image imageData={imagesData.filter((_i) => _i.name === 'header')[0]} />
	<h1>{title}</h1>
	<sub>Published at {new Date(date).toLocaleDateString()}</sub>
	<slot />
</article>
{#if scroll2Top}
	<div class="scroll2top" transition:fly={{ y: 100, duration: 400, easing: backInOut }}>
		<button
			on:click={() => {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="m8.7 15.5 2.5-5 5.4 5 .5-.6-5.3-9.1L6 14Z" />
				<path fill="none" d="M0 0h24v24H0z" />
			</svg>
		</button>
	</div>
{/if}

<style>
	sub {
		display: block;
		width: 100%;
		text-align: center;
	}
	.scroll2top {
		position: fixed;
		right: 1.5rem;
		bottom: 1.5rem;
		transition: all 200ms ease-in-out;
	}
	.scroll2top > button {
		border-radius: 46% 54% 70% 30% / 30% 50% 50% 70%;
		padding: 0;
	}
	.scroll2top > button:focus {
		outline: none;
		border: 2px solid #41403e;
	}
	.scroll2top > button > svg {
		width: 2rem;
		height: 2rem;
		fill: var(--primary);
	}
	.scroll2top:hover > button {
		border: 2px solid #416d72;
	}
	.scroll2top:hover > button > svg {
		width: 2rem;
		height: 2rem;
		fill: #416d72;
	}
</style>
