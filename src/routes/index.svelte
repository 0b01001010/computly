<script lang="ts">
	import 'papercss/dist/paper.min.css';
	import { Progress } from 'spaper';

	import { loadingProgress } from '$lib/stores/landPage';
</script>

<Progress value={$loadingProgress} striped type="warning">
	Progress: {$loadingProgress}%
</Progress>
