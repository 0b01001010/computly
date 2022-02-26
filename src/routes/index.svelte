<script lang="ts">
	import { loadingProgress } from '$lib/stores/landPage';
	import * as TH from 'threlte';
	import { onMount } from 'svelte';
	import '$lib/styles/index.scss';

	import Background from '$lib/Components/Landpage/Background.svelte';
	import Office from '$lib/Components/Landpage/Office.svelte';
	import { cameraPosition, controlsPosition, detailsWindow } from '$lib/stores/landPage';
	import Contents from '$lib/Components/Landpage/Contents.svelte';
	import Lights from '$lib/Components/Landpage/Lights.svelte';
	import DetailsWindow from '$lib/Components/Landpage/DetailsWindow.svelte';
	import Overlay from '$lib/Components/Landpage/Overlay.svelte';
	let timeOut = false;

	onMount(() => {
		setTimeout(async () => {
			await Promise.all([
				controlsPosition.set({ x: -1, y: 1.2, z: 0.6 }),
				cameraPosition.set({ x: -2, y: 1.5, z: 1 }),
				detailsWindow.set({ controlsEnabled: true, isOpen: false, title: '' }),
				(timeOut = true)
			]);
		}, 4000);
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

{#if !timeOut && $loadingProgress < 100}
	<Overlay />
{/if}

<main style:visibility={timeOut ? 'visible' : 'hidden'}>
	<TH.Canvas>
		<TH.PerspectiveCamera bind:position={$cameraPosition} fov={60}>
			<TH.OrbitControls
				enabled={$detailsWindow.controlsEnabled}
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

{#if $detailsWindow.isOpen}
	<DetailsWindow />
{/if}

<style lang="scss">
	main {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
</style>
