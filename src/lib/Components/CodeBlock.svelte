<script lang="ts">
	import { theme as themeStore } from '$lib/stores/theme';
	import { CopyButton } from 'spaper';
	let contents;
	export let title = '/etc/passwd';
	export let lang: string;
	export let startLine = 1;
	export let highlightAdd: number[] = [];
	export let highlightDel: number[] = [];
	$: darkmode = $themeStore === 'dark';
</script>

<div class="code-block">
	<div class="header">
		<span class="path">{title}</span>
		<span class="lang">{lang}</span>
	</div>
	<pre bind:textContent={contents} contenteditable="false"><slot /></pre>
	<div class="copy" title="Copy code">
		<CopyButton text={contents}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				style:fill={darkmode ? '#ffffff' : ''}
			>
				<path fill="none" d="M0 0h24v24H0z" />
				<path d="M7 4V2h9l1 2h3l1 1v14l-2 3H4l-1-1V5l1-1Zm0 2L5 7v13h14V6h-2v2H7Zm2-2v2h6V4Z" />
			</svg>
		</CopyButton>
	</div>
</div>

<style lang="scss">
	.code-block {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 1rem auto;
		.header {
			position: absolute;
			top: 0;
			padding: 0.5em 1em;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			font-size: 0.7em;
			font-family: Courier, monospace;
			background-color: var(--primary-shaded-50);
			span {
				width: auto;
			}
			span.lang {
				color: var(--secondary-light-10);
			}
		}
		pre {
			margin: 0;
			padding: 2em;
		}
		.copy {
			position: absolute;
			bottom: 0;
			right: 1vmin;
			width: 5vmin;
			opacity: 0.7;
			transition: opacity 100ms ease-in-out;
			&:hover {
				opacity: 1;
			}
			svg {
				width: 3vmin;
				margin: 0;
			}
		}
	}
</style>
