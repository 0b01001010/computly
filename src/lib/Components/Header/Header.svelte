<script lang="ts">
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<a class="logo" href="/" target="_self" rel="external"> Computly </a>
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
				<a href="https://computly.me" target="_self" rel="external">Portfolio</a>
			</li>
		</ul>
		<ThemeSwitcher />
	</nav>
</header>

<style lang="scss">
	@font-face {
		font-family: Paskowy;
		src: url('/Paskowy.ttf');
	}
	.logo {
		position: static;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		font-family: Paskowy;
		user-select: none;
		font-size: 20vmin;
		text-transform: uppercase;
	}
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
