<script lang="ts">
	import { onMount } from 'svelte';
	import 'papercss/dist/paper.min.css';
	import '$lib/styles/index.scss';
	import { browser } from '$app/env';
	import { theme as themeStore } from '$lib/stores/theme';
	import BlogFooter from '$lib/Components/Footer/Footer.svelte';
	import BlogHeader from '$lib/Components/Header/Header.svelte';
	import SVGbackground from '$lib/Components/SVGbackground.svelte';
	// Using this to check theme before rendering the page
	// So if you have set it to dark mode, you won't see a white theme that changes to dark after the page loads
	if (browser) {
		if ($themeStore === 'null') {
			let browserDarkMode =
				window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			$themeStore = browserDarkMode ? 'dark' : 'light';
		}
		$themeStore === 'dark' && document.documentElement.classList.toggle('dark');
	}
	onMount(() => {
		// const gFontCSS = document.createElement('link');
		// gFontCSS.href =
		// 	'https://fonts.googleapis.com/css2?family=Acme&family=Josefin+Sans&display=swap';
		// gFontCSS.rel = 'stylesheet';
		// gFontCSS.type = 'text/css';
		// document.querySelector('head').appendChild(gFontCSS);
	});
</script>

<BlogHeader />
<SVGbackground />
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
