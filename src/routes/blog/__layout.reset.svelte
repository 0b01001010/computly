<script lang="ts">
	import 'papercss/dist/paper.min.css';
	import '$lib/styles/index.scss';
	import { browser } from '$app/env';
	import { theme as themeStore } from '$lib/stores/theme';
	import BlogFooter from '$lib/Components/Blog/Footer/Footer.svelte';
	import BlogHeader from '$lib/Components/Blog/Header/Header.svelte';
	import SVGbackground from '$lib/Components/Blog/SVGbackground.svelte';
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
