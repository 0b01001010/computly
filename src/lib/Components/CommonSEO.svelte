<script lang="ts">
	export let title: string;
	export let descriptions =
		'Computly blog is the place where I post about various software development fields';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={descriptions} />
	<meta property="og:title" content={title} />
	<meta name="og:description" content={descriptions} />

	<meta property="og:type" content="Website:Blog" />
	<meta property="og:url" content="https://computly.me/" />
	<meta property="og:image" content="%svelte.assets%/favicon/apple-touch-icon.png" />
</svelte:head>
