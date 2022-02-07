<script lang="ts">
	import { browser } from '$app/env';
	import lazyload from 'vanilla-lazyload';
	if (browser && !document.lazyloadInstance) {
		document.lazyloadInstance = new lazyload();
	}
</script>

<slot />
