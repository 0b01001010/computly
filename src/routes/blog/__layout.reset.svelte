<script lang="ts">
	import 'papercss/dist/paper.min.css';
	import '$lib/styles/index.scss';
	import { browser } from '$app/env';
	import { theme as themeStore } from '$lib/stores/theme';
	import BlogFooter from '$lib/Components/BlogFooter.svelte';
	import BlogHeader from '$lib/Components/Header/BlogHeader.svelte';
	import SvGbackground from '$lib/Components/SVGbackground.svelte';
	if (browser) {
		if ($themeStore === 'null') {
			let browserDarkMode: boolean =
				window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			$themeStore = browserDarkMode ? 'dark' : 'light';
		}
		$themeStore === 'dark' && document.documentElement.classList.toggle('dark');
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
