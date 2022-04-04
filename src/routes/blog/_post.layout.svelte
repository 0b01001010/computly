<script>
	import { theme as themeStore } from '$lib/stores/theme';
	import Image from '$lib/Components/Image.svelte';
	import { fly } from 'svelte/transition';
	import { backInOut } from 'svelte/easing';
	import { browser } from '$app/env';

	/** @type {string} */
	export let title;
	/** @type {import('$lib/types/imageProps').ImageProps} */
	export let mainImage;
	/** @type {string} */
	export let date;
	/** @type {string} */
	export const description = '';
	$: darkMode = $themeStore === 'dark';

	const rem = browser && parseFloat(getComputedStyle(document.documentElement).fontSize);
	let scroll2Top = false;
	let scrollReachedBottom = false;
	let scroll2TopTranslate = 0;
	const footerHeight = browser && document.getElementsByTagName('footer')[0].offsetHeight;

	const handleScroll = () => {
		scroll2Top = document.body.scrollTop > 200 || document.documentElement.scrollTop > 200;
		const scrollHeight =
			(document.body.scrollTop || document.documentElement.scrollTop) + window.innerHeight;
		scrollReachedBottom =
			scrollHeight > document.body.scrollHeight - footerHeight + 1.5 * rem - 0.5 * rem;
		scroll2TopTranslate =
			scrollHeight - (document.body.scrollHeight - footerHeight + 1.5 * rem) + 0.5 * rem;
	};
</script>

<svelte:window on:scroll={handleScroll} />
<svelte:head>
	<title>{title}</title>
</svelte:head>
<article class="{darkMode ? 'bg-dark' : 'bg-light'} border border-2 post-article">
	<Image imageData={mainImage} />
	<h1>{title}</h1>
	<sub>Published at {new Date(date).toLocaleDateString()}</sub>
	<slot />
</article>
{#if scroll2Top}
	<div
		class="scroll2top"
		transition:fly={{ y: 100, duration: 500, easing: backInOut }}
		style="--translateHeight:-{scroll2TopTranslate}px;{scrollReachedBottom
			? 'transform: translateY(var(--translateHeight));'
			: ''}"
	>
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
		display: none;
	}
	@media screen and (min-width: 768px) {
		.scroll2top {
			position: fixed;
			display: block;
			right: 1.5rem;
			bottom: 1.5rem;
			z-index: 99;
			transition: border 200ms ease-in-out;
		}
		.scroll2top > button {
			border-radius: 30% 70% 39% 61% / 57% 30% 70% 43%;
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
			transition: fill 200ms ease-in-out;
		}
		.scroll2top:hover > button {
			border: 2px solid var(--secondary);
		}
	}
</style>
