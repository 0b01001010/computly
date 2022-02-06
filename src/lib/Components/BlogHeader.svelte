<script lang="ts">
	import { Navbar } from 'spaper';
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
		justify-content: center;
	}
	nav ul {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
</style>
