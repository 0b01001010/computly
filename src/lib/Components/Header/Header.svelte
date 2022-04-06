<script lang="ts">
	import { Navbar } from 'spaper';
</script>

<a sveltekit:prefetch class="logo" href="/"> Computly </a>
<header>
	<Navbar>
		<ul class="inline">
			<li>
				<a sveltekit:prefetch href="/">Home</a>
			</li>
			<li>
				<a sveltekit:prefetch href="/blog">Blog</a>
			</li>
			<li>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li>
				<a sveltekit:prefetch href="/contact">Contact</a>
			</li>
			<li>
				<a href="https://portfolio.computly.me" target="_blank" rel="external">Portfolio</a>
			</li>
		</ul>
	</Navbar>
</header>

<style lang="scss">
	.logo {
		position: static;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		font-family: Paskowy;
		user-select: none;
		font-size: 20vmin;
		color: var(--primary);
		text-transform: uppercase;
	}
	header {
		position: sticky;
		top: 0;
		width: 100%;
		box-shadow: 0px 2px 5px rgba(145, 145, 145, 0.575);
		display: flex;
		align-items: center;
		z-index: 100;
		ul {
			display: flex;
			justify-content: center;
			flex-grow: 1;
			gap: 4vmin;
		}
	}
</style>
