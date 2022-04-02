<script lang="ts">
	import { theme as themeStore } from '$lib/stores/theme';
</script>

<svelte:head>
	<title>Computly</title>
</svelte:head>

<main class="main-content border border-primary {$themeStore === 'dark' ? 'bg-dark' : 'bg-light'}">
	<!--  -->
</main>

<style lang="scss">
	//
</style>
