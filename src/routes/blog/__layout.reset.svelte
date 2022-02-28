<script lang="ts">
	import 'papercss/dist/paper.min.css';
	import '$lib/styles/index.scss';
	import { browser } from '$app/env';
	import lazyload from 'vanilla-lazyload';
	import { theme as themeStore } from '$lib/stores/theme';
	import BlogFooter from '$lib/Components/Blog/Footer/Footer.svelte';
	import BlogHeader from '$lib/Components/Blog/Header/Header.svelte';
	import SVGbackground from '$lib/Components/Blog/SVGbackground.svelte';
	let loaded = false;
	if (browser) {
		if ($themeStore === 'null') {
			let browserDarkMode: boolean =
				window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			$themeStore = browserDarkMode ? 'dark' : 'light';
		}
		$themeStore === 'dark' && document.documentElement.classList.toggle('dark');
		// @ts-ignore
		if (!window.lazyloadInstance) {
			// @ts-ignore
			window.lazyloadInstance = new lazyload();
		}
		loaded = true;
	}
</script>

{#if loaded}
	<BlogHeader />
	<SVGbackground />
	<main>
		<slot />
	</main>
	<BlogFooter />
{/if}

<style lang="scss">
	main {
		display: flex;
		justify-content: center;
		min-height: 100vh;
	}
</style>
