<script lang="ts">
	import { Navbar } from 'spaper';
</script>

<header>
	<a class="logo" href="/"> Computly </a>
	<Navbar>
		<ul class="inline">
			<li>
				<a sveltekit:prefetch href="/">Home</a>
			</li>
			<li>
				<a sveltekit:prefetch href="/blog/">Blog</a>
			</li>
			<li>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
		</ul>
	</Navbar>
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
	.inline {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 1rem;
	}
</style>
