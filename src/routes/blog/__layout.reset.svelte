<script lang="ts">
	import lazyload from 'vanilla-lazyload';
	import 'papercss/dist/paper.min.css';
	import '$lib/styles/index.scss';
	import { browser } from '$app/env';
	import { theme as themeStore } from '$lib/stores/theme';
	import BlogFooter from '$lib/Components/Blog/Footer/Footer.svelte';
	import BlogHeader from '$lib/Components/Blog/Header/Header.svelte';
	import SvGbackground from '$lib/Components/Blog/SVGbackground.svelte';
	if (browser) {
		if ($themeStore === 'null') {
			let browserDarkMode: boolean =
				window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			$themeStore = browserDarkMode ? 'dark' : 'light';
		}
		$themeStore === 'dark' && document.documentElement.classList.toggle('dark');

		if (!document.lazyloadInstance) {
			document.lazyloadInstance = new lazyload();
		}
	}
</script>

<BlogHeader />
<SvGbackground />

<main>
	<slot />
</main>

<BlogFooter />

<style lang="scss">
	main {
		display: flex;
		justify-content: center;
		min-height: 100vh;
	}
</style>
