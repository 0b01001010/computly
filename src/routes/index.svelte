<script lang="ts">
	import { onMount } from 'svelte';

	import * as THREE from 'three';
	import * as TH from 'threlte';

	let background;
	// let scene = new THREE.Scene();
	onMount(() => {
		new THREE.TextureLoader().load('/textures/360-bridge.jpg', (loaded) => {
			background = loaded;
			background.mapping = THREE.EquirectangularReflectionMapping;
			background.encoding = THREE.sRGBEncoding;
		});
		// scene.background = new THREE.TextureLoader().load('./textures/360-bridge.jpg');
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
<div>
	<TH.Canvas>
		<TH.PerspectiveCamera position={{ x: 19, y: 8, z: 10 }} fov={60}>
			<TH.OrbitControls autoRotate enableZoom={false} maxPolarAngle={1.7} />
		</TH.PerspectiveCamera>
		<TH.DirectionalLight shadow color={'white'} position={{ x: -15, y: 45, z: 20 }} />
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
			geometry={new THREE.CircleBufferGeometry(3, 72)}
			material={new THREE.MeshStandardMaterial({ color: 'white' })}
		/>
		<TH.Text text="Hi there" />
	</TH.Canvas>
</div>

<style>
	div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
