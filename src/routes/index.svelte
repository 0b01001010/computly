<script lang="ts">
	import * as THREE from 'three';
	import * as TH from 'threlte';
	import { onMount } from 'svelte';

	import Background from '$lib/Components/Landpage/Background.svelte';
	import Office from '$lib/Components/Landpage/Office.svelte';
	import { browser } from '$app/env';
	import { cameraPosition, controlsPosition } from '$lib/stores/tweened';
	import Contents from '$lib/Components/Landpage/Contents.svelte';
	// TODO loading manager

	let vec1 = new THREE.Vector3(0, 0, 0);

	onMount(async () => {
		setTimeout(async () => {
			await Promise.all([
				// controlsPosition.set({ x: -1, y: 1.2, z: 0.6 }),
				// cameraPosition.set({ x: -2, y: 1.5, z: 1 })
			]);
		}, 3500);

		const mainElm = document.querySelector('#homepage-1');
		mainElm.addEventListener('touchstart', touchEvent, false);
	});

	const windowSize = browser && {
		width: window.innerWidth,
		height: window.innerHeight
	};
	const mouse = new THREE.Vector2();

	const moveMouse = (pointX: number, pointY: number) => {
		mouse.x = (pointX / windowSize.width) * 2 - 1;
		mouse.y = -(pointY / windowSize.height) * 2 + 1;
	};
	const touchEvent = (event: TouchEvent) => {
		moveMouse(event.touches[0].clientX, event.touches[0].clientY);
	};
	const mouseEvent = (event: MouseEvent) => {
		moveMouse(event.clientX, event.clientY);
	};
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
<main id="homepage-1" on:mousemove={mouseEvent}>
	<TH.Canvas>
		<TH.PerspectiveCamera bind:position={$cameraPosition} fov={60}>
			<TH.OrbitControls
				minPolarAngle={0.3}
				maxPolarAngle={1.5}
				minAzimuthAngle={1}
				maxDistance={20.5}
				minDistance={1}
				enablePan={false}
				enableRotate={true}
				bind:target={$controlsPosition}
				keys={{ LEFT: 'KeyLeft', UP: 'KeyUp', RIGHT: 'KeyRight', BOTTOM: 'KeyDown' }}
			/>
		</TH.PerspectiveCamera>
		<TH.DirectionalLight shadow color={'white'} position={{ x: -7, y: 18, z: 2 }} />
		<TH.HemisphereLight skyColor={'white'} groundColor={'#ffffff'} intensity={0.4} />
		<Background />
		<Office />
		<Contents textPosition={vec1} />
	</TH.Canvas>
</main>
<aside>
	<div>
		<input type="range" min={-4} max={4} step="0.1" bind:value={vec1.x} />
		<span>X: {vec1.x}</span>
	</div>
	<div>
		<input type="range" min={-4} max={4} step="0.1" bind:value={vec1.y} />
		<span>Y: {vec1.y}</span>
	</div>
	<div>
		<input type="range" min={-4} max={4} step="0.1" bind:value={vec1.z} />
		<span>Z: {vec1.z}</span>
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
		position: static;
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
