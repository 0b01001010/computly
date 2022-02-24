<script lang="ts">
	import * as THREE from 'three';
	import * as TH from 'threlte';
	import { onMount } from 'svelte';

	import Background from '$lib/Components/Landpage/Background.svelte';
	import Office from '$lib/Components/Landpage/Office.svelte';
	import { cameraPosition, controlsPosition, controlsEnabled } from '$lib/stores/landPage';
	import Contents from '$lib/Components/Landpage/Contents.svelte';
	import Lights from '$lib/Components/Landpage/Lights.svelte';
	// TODO loading manager

	let vec1 = new THREE.Vector3(0, 0, 0);

	onMount(async () => {
		setTimeout(async () => {
			await Promise.all([
				controlsPosition.set({ x: -1, y: 1.2, z: 0.6 }),
				cameraPosition.set({ x: -2, y: 1.5, z: 1 })
			]);
		}, 3500);
		// setTimeout(async () => {
		// 	await Promise.all([
		// 		controlsPosition.set({ x: 0, y: 1.2, z: 0.5 }),
		// 		cameraPosition.set({ x: -1.9, y: 1.2, z: 0.4 })
		// 	]);
		// }, 3500);
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
<main>
	<TH.Canvas>
		<TH.PerspectiveCamera bind:position={$cameraPosition} fov={60}>
			<TH.OrbitControls
				enabled={$controlsEnabled}
				minPolarAngle={0.3}
				maxPolarAngle={1.5}
				minAzimuthAngle={1}
				maxDistance={2.5}
				minDistance={1}
				enablePan={false}
				enableRotate={true}
				bind:target={$controlsPosition}
				keys={{ LEFT: 'KeyLeft', UP: 'KeyUp', RIGHT: 'KeyRight', BOTTOM: 'KeyDown' }}
			/>
		</TH.PerspectiveCamera>
		<Background />
		<Office />
		<Contents />
		<Lights />
	</TH.Canvas>
</main>
<aside>
	<div>
		<input type="range" min={-4} max={4} step="0.1" bind:value={$cameraPosition.x} />
		<span>X: {$cameraPosition.x}</span>
	</div>
	<div>
		<input type="range" min={-4} max={4} step="0.1" bind:value={$cameraPosition.y} />
		<span>Y: {$cameraPosition.y}</span>
	</div>
	<div>
		<input type="range" min={-4} max={4} step="0.1" bind:value={$cameraPosition.z} />
		<span>Z: {$cameraPosition.z}</span>
	</div>
	<div>
		<input type="range" min={-4} max={4} step="0.1" bind:value={$controlsPosition.x} />
		<span>X: {$controlsPosition.x}</span>
	</div>
	<div>
		<input type="range" min={-4} max={4} step="0.1" bind:value={$controlsPosition.y} />
		<span>Y: {$controlsPosition.y}</span>
	</div>
	<div>
		<input type="range" min={-4} max={4} step="0.1" bind:value={$controlsPosition.z} />
		<span>Z: {$controlsPosition.z}</span>
	</div>
</aside>

<style lang="scss">
	main {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	aside {
		position: fixed;
		top: 0;
		left: 0;
		width: fit-content;
		height: fit-content;
		background: hsla(0, 0%, 100%, 0.3);
		backdrop-filter: blur(2rem);
		border-radius: 0.5rem;
		padding: 1rem;
		margin: 1rem;
		display: none;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h1 {
			font-family: sans-serif;
		}
		div {
			width: 100%;
		}
	}
</style>
