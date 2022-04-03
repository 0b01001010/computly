<script>
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<footer>
	<a sveltekit:prefetch href="/privacy">Privacy policy</a>
	<div class="copyright">Copyright Computly &copy; 2022</div>
	<ThemeSwitcher />
</footer>

<style lang="scss">
	footer {
		background-color: var(--primary-shaded-70);
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 1rem;
		text-align: center;
		font-size: 3vmin;
	}
</style>
