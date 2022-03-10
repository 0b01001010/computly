<script lang="ts">
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<header>
	<nav>
		<ul class="inline">
			<li>
				<a sveltekit:prefetch href="/blog/">Home</a>
			</li>
			<li>
				<a sveltekit:prefetch href="/blog/about">About</a>
			</li>
			<li>
				<a href="/" target="_self" rel="external">Portfolio</a>
			</li>
		</ul>
		<ThemeSwitcher />
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
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
