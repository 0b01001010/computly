<script lang="ts">
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<header>
	<nav>
		<ul class="inline">
			<li>
				<a href="/" target="_self" rel="external">Home</a>
			</li>
			<li>
				<a sveltekit:prefetch href="/blog/">Blog</a>
			</li>
			<li>
				<a sveltekit:prefetch href="/blog/about">About</a>
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
