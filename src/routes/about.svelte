<script lang="ts">
	import { theme as themeStore } from '$lib/stores/theme';
	$: darkMode = $themeStore === 'dark';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>
<article class="{darkMode ? 'bg-dark' : 'bg-light'} border border-2">
	<h1>About</h1>
	<p>
		Welcome to the my blog, a place where I occasionally post articles covering a range of topics,
		from my perspective on software development to posts highlighting some life events. I hope you
		enjoy the posts featured here and welcome you to engage with the content using comments (WiP).
	</p>
	<p>
		This blog is part of my portfolio which you can view <a href="https://computly.me">here</a>.
	</p>
</article>
