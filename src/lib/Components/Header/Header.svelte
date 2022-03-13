<script lang="ts">
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<header>
	<nav>
		<ul class="inline">
			<li>
				<a sveltekit:prefetch href="/">Home</a>
			</li>
			<li>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li>
				<a sveltekit:prefetch href="/contact">Contact</a>
			</li>
			<li>
				<a href="https://a3k.tech" target="_self" rel="external">Portfolio</a>
			</li>
		</ul>
		<ThemeSwitcher />
	</nav>
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		width: 100%;
		box-shadow: 0px 2px 5px rgba(145, 145, 145, 0.575);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		z-index: 100;
		nav {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 0.5rem 3rem;
			ul {
				display: flex;
				flex-direction: row;
				gap: 2rem;
			}
		}
		@media screen and (max-width: 768px) {
			nav {
				flex-direction: column;
			}
		}
	}
</style>
