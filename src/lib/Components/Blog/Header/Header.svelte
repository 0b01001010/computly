<script lang="ts">
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<header>
	<a class="logo" href="/"> Computly </a>
	<nav>
		<ul class="inline">
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a sveltekit:prefetch href="/blog/">Blog</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
		</ul>
		<ThemeSwitcher />
	</nav>
</header>

<style lang="scss">
	@font-face {
		font-family: 'Paskowy';
		src: url('/fonts/Paskowy.ttf');
	}
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		font-family: 'Paskowy';
		user-select: none;
		font-size: 20vmin;
		text-transform: uppercase;
	}
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 3rem;
	}
	@media screen and (max-width: 768px) {
		nav {
			flex-direction: column;
		}
	}
	nav ul {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
</style>
