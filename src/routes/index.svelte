<script lang="ts">
	import {
		targetPosition,
		detailsWindow,
		fogDensity,
		cameraPosition,
		ogCameraPosition,
		ogTargetPosition,
		playScene
	} from '$lib/stores/landPage';
	import { Canvas, PerspectiveCamera, OrbitControls, FogExp2 } from 'threlte';

	import Background from '$lib/Components/Landpage/Background.svelte';
	import Office from '$lib/Components/Landpage/Office.svelte';
	import Contents from '$lib/Components/Landpage/Contents.svelte';
	import Lights from '$lib/Components/Landpage/Lights.svelte';
	import DetailsWindow from '$lib/Components/Landpage/DetailsWindow.svelte';
	import Overlay from '$lib/Components/Landpage/Overlay.svelte';
	import '$lib/styles/landpage.scss';

	let play = false;

	let controls;

	const updateControls = () => {
		if (!controls) return;
		// ogTargetPosition.set(controls.position0);
		// console.dir(controls);
	};

	const startTheShow = async () => {
		play = true;
		playScene.set(true);
		await Promise.all([
			targetPosition.set($ogTargetPosition),
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

<!-- Camera: lookAt={$targetPosition} -->

<main style:visibility={play ? 'visible' : 'hidden'}>
	<Canvas>
		<FogExp2 color={0x000000} density={$fogDensity} />
		<PerspectiveCamera bind:position={$cameraPosition} fov={60}>
			<OrbitControls
				enabled={$detailsWindow.controlsEnabled}
				minPolarAngle={0.3}
				maxPolarAngle={1.5}
				minAzimuthAngle={1}
				maxDistance={2.3}
				minDistance={1}
				enableRotate={true}
				enableDamping={true}
				dampingFactor={0.05}
				target={$targetPosition}
				bind:controls
				on:start={updateControls}
				keys={{ LEFT: 'KeyLeft', UP: 'KeyUp', RIGHT: 'KeyRight', BOTTOM: 'KeyDown' }}
			/>
		</PerspectiveCamera>
		<Background />
		<Office />
		<Contents />
		<Lights />
	</Canvas>
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
