<script lang="ts">
	export let href: string;
	export let title: string;
	export let color: string;
</script>

<a class="social-button" {href} target="_blank" rel="external" style="--icon-color:{color}">
	<div class="icon">
		<slot />
	</div>
	<p>{title}</p>
</a>

<style lang="scss">
	/* From cssbuttons.io by @fanishah */
	$transition: all 500ms ease-in-out;
	a {
		font-family: inherit;
		background: var(--icon-color);
		color: white;
		padding: 0.35em 0;
		font-size: 17px;
		border: none;
		border-radius: 0.7em;
		letter-spacing: 0.08em;
		position: relative;
		display: flex;
		align-content: center;
		align-items: center;
		overflow: hidden;
		height: 2.1em;
		padding-left: 3em;
		padding-right: 1em;
		.icon {
			background: #fff;
			height: 80%;
			width: 2em;
			border-radius: 2em;
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			left: 5%;
			top: 10%;
			transition: $transition;
		}
		p {
			transition: $transition;
		}
		&:hover {
			.icon {
				width: 90%;
				border-radius: 0.5em;
				box-shadow: 0px 0px 10px 3px hsla(0, 0%, 0%, 0.4);
			}
			p {
				opacity: 0;
			}
		}
	}
</style>
