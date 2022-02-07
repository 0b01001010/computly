<script lang="ts">
	import { theme as themeStore } from '$lib/stores/theme';

	$: darkMode = $themeStore === 'dark';
	// Load all posts
</script>

<div class="main-content border border-primary {darkMode ? 'bg-dark' : 'bg-light'}">
	<h1>Blog posts</h1>
</div>

<style lang="scss">
	div.main-content {
		margin: 2rem auto;
		width: min(960px, 90vw);
		z-index: 1;
	}
</style>
