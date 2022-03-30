<script>
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<footer class="background-secondary">
	<div />
	<div>Copyright Computly &copy; 2022</div>
	<ThemeSwitcher />
</footer>

<style lang="scss">
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 1rem;
		text-align: center;
		font-size: 12px;
	}
</style>
