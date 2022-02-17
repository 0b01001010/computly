<script lang="ts">
	import { onMount } from 'svelte';
	import Background from '$lib/Components/Landpage/Background.svelte';
	import * as THREE from 'three';
	import * as TH from 'threlte';
	let cameraX = 0;
	let cameraY = 0;
	let cameraZ = 0;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
<div>
	<TH.Canvas>
		<TH.PerspectiveCamera position={{ x: 0, y: 0, z: 20 }} fov={60}>
			<TH.OrbitControls maxPolarAngle={1.5} minPolarAngle={0.9} minAzimuthAngle={1} />
			<Background />
		</TH.PerspectiveCamera>
		<TH.DirectionalLight shadow color={'white'} position={{ x: -7, y: 18, z: 2 }} />
		<TH.HemisphereLight skyColor={'white'} groundColor={'#ac844c'} intensity={0.4} />

		<TH.Mesh
			castShadow
			geometry={new THREE.BoxBufferGeometry(1, 1, 1)}
			material={new THREE.MeshStandardMaterial({ color: '#ff3e00' })}
		/>

		<TH.Mesh
			receiveShadow
			position={{ y: -0.5 }}
			rotation={{ x: -90 * (Math.PI / 180) }}
			geometry={new THREE.CircleBufferGeometry(5, 360)}
			material={new THREE.MeshStandardMaterial({ color: 'white', side: THREE.DoubleSide })}
		/>
		<TH.Text text="Hi there" color="#ff00000" position={{ x: 15, y: 2, z: 4 }} />
	</TH.Canvas>
</div>
<div class="controls">
	<input
		type="range"
		name="camX"
		id="camX"
		bind:value={cameraX}
		min="-100"
		max="100"
		step="1"
	/>{cameraX}
	<input
		type="range"
		name="camY"
		id="camY"
		bind:value={cameraY}
		min="-100"
		max="100"
		step="1"
	/>{cameraY}
	<input
		type="range"
		name="camZ"
		id="camZ"
		bind:value={cameraZ}
		min="-100"
		max="100"
		step="1"
	/>{cameraZ}
</div>

<style>
	div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.controls {
		position: fixed;
		top: 0;
		left: 0;
		margin: 1rem;
		padding: 0.5rem auto;
		display: none;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: fit-content;
		height: fit-content;
		border-radius: 4px;
		background: hsla(0, 0%, 100%, 0.5);
		backdrop-filter: blur(10px);
	}
</style>
