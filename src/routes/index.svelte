<script context="module">
	export const router = false;
</script>

<script lang="ts">
	import {
		fogDensity,
		ogCameraPosition,
		ogControlsPosition,
		playScene
	} from '$lib/stores/landPage';
	import * as TH from 'threlte';

	import Background from '$lib/Components/Landpage/Background.svelte';
	import Office from '$lib/Components/Landpage/Office.svelte';
	import { cameraPosition, controlsPosition, detailsWindow } from '$lib/stores/landPage';
	import Contents from '$lib/Components/Landpage/Contents.svelte';
	import Lights from '$lib/Components/Landpage/Lights.svelte';
	import DetailsWindow from '$lib/Components/Landpage/DetailsWindow.svelte';
	import Overlay from '$lib/Components/Landpage/Overlay.svelte';
	import '$lib/styles/landpage.scss';

	let play = false;

	const startTheShow = async () => {
		play = true;
		playScene.set(true);
		await Promise.all([
			controlsPosition.set($ogControlsPosition),
			cameraPosition.set($ogCameraPosition),
			detailsWindow.set({ controlsEnabled: true, isOpen: false, title: '' }),
			fogDensity.set(0)
		]);
	};
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

{#if !play}
	<Overlay on:startTheShow={startTheShow} />
{/if}

<main style:visibility={play ? 'visible' : 'hidden'}>
	<TH.Canvas>
		<TH.FogExp2 color={0x000000} density={$fogDensity} />
		<TH.PerspectiveCamera bind:position={$cameraPosition} fov={60}>
			<TH.OrbitControls
				enabled={$detailsWindow.controlsEnabled}
				minPolarAngle={0.3}
				maxPolarAngle={1.5}
				minAzimuthAngle={1}
				maxDistance={2.3}
				minDistance={1}
				enablePan={true}
				keyPanSpeed={0.1}
				enableRotate={true}
				dampingFactor={0.05}
				enableDamping={true}
				target={$controlsPosition}
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
