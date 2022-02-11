<script lang="ts">
	// Landpage
</script>

<svelte:head>
	<title>a3k</title>
</svelte:head>
<div />
<h1 class="wrapper"><span class="char-animation">Coming soon</span></h1>
<div />

<style lang="scss">
	:root {
		--text-color: #fc1f2c;
		--border-color: #03edf9;
	}
	:global(body) {
		user-select: none;
		background: #000;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 90vh;
	}
	.wrapper {
		font-family: Lato;
		font-weight: 700;
		font-size: 80px;
		color: #fff;
		padding: 40px;
		border: 4px solid;
		border-radius: 20px;
		text-transform: uppercase;
		text-shadow: 0 0 2px #000, 0 0 10px var(--text-color), 0 0 5px var(--text-color),
			0 0 25px var(--text-color);
		animation: border-blink 5.5s infinite alternate;
	}
	.char-animation {
		animation: 1s text-blink 5.5s infinite alternate;
	}
	@keyframes text-blink {
		0%,
		100%,
		20%,
		22%,
		25%,
		28%,
		55%,
		80% {
			text-shadow: 0 0 2px #000, 0 0 10px var(--text-color), 0 0 5px var(--text-color),
				0 0 25px var(--text-color);
			opacity: 1;
			color: var(--text-color);
		}
		21%,
		24%,
		56% {
			opacity: 0.2;
			text-shadow: none;
		}
	}
	@keyframes border-blink {
		0%,
		100%,
		20%,
		22%,
		25%,
		28%,
		55%,
		57%,
		63% {
			color: var(--text-color);
			box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff, 0 0 2rem var(--border-color),
				inset 0 0 2rem var(--border-color), 0 0 4rem var(--border-color),
				inset 0 0 4rem var(--border-color);
			border-color: var(--border-color);
		}
		21%,
		24%,
		56% {
			box-shadow: none;
		}
	}
</style>
