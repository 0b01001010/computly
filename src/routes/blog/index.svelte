<script lang="ts">
	import { theme as themeStore } from '$lib/stores/theme';
</script>

<svelte:head>
	<title>Blog posts</title>
</svelte:head>

<div class="main-content border border-primary {$themeStore === 'dark' ? 'bg-dark' : 'bg-light'}">
	<h1>Blog posts</h1>
</div>

<style lang="scss">
	div.main-content {
		margin: 2rem auto;
		width: min(960px, 90vw);
		z-index: 1;
	}
</style>
