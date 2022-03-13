<script lang="ts">
	import { theme as themeStore } from '$lib/stores/theme';
	$: darkMode = $themeStore === 'dark';
	import { Picture } from 'svelte-lazy-loader';
	const linkedInImages = [
		{ srcset: '/icons/in.avif', type: 'image/avif' },
		{ srcset: '/icons/in.png', type: 'image/png' }
	];
	const mailImages = [
		{ srcset: '/icons/mail.avif', type: 'image/avif' },
		{ srcset: '/icons/mail.png', type: 'image/png' }
	];
	const width = '48px';
	const height = '48px';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>
<article class="{darkMode ? 'bg-dark' : 'bg-light'} border border-2">
	<h1>Contact</h1>
	<p>I'm currently looking for new opportunities.</p>
	<p>Feel free to get in touch with one of these methods:</p>
	<div class="contact-methods">
		<a href="https://www.linkedin.com/in/a3k/" target="_blank" rel="external">
			<Picture alt="LinkedIn" src={linkedInImages[1].srcset} {width} {height}>
				{#each linkedInImages as image}
					<source data-srcset={image.srcset} type={image.type} />
				{/each}
			</Picture>
		</a>
		<a href="mailto://contact@a3k.tech" target="_blank" rel="external">
			<Picture alt="Send me an email" src={mailImages[1].srcset} {width} {height}>
				{#each mailImages as image}
					<source data-srcset={image.srcset} type={image.type} />
				{/each}
			</Picture>
		</a>
	</div>
</article>

<style lang="scss">
	.contact-methods {
		display: flex;
		justify-content: center;
		gap: 1rem;
		a {
			background: none;
		}
	}
</style>
