<script lang="ts">
	import lazyload from 'vanilla-lazyload';
	import { browser } from '$app/env';
	// @ts-ignore
	if (browser && !window.lazyloadInstance) {
		// @ts-ignore
		window.lazyloadInstance = new lazyload();
	}
</script>

<slot />
