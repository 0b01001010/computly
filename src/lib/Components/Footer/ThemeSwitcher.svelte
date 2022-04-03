<script lang="ts">
	// All credits to @AmirthaShankari
	// Source: https://codepen.io/AmirthaShankari/pen/eYpmjmx

	import { theme as themeStore } from '$lib/stores/theme';
	let darkMode: boolean = $themeStore === 'dark';

	function switchTheme(e) {
		$themeStore = e.target.checked ? 'dark' : 'light';
		document.documentElement.classList.toggle('dark');
	}
</script>

<div
	class="main-wrapper"
	style="--switch-primary-color: {darkMode
		? '#ffe5b5'
		: '#FFD700'}; --switch-secondary-color: {darkMode
		? '#0a0d12'
		: '#c4eeff'}; --switch-tertiary-color: #ffffff;"
>
	<div class="theme-switch-wrapper">
		<label for="theme-btn">
			<input bind:checked={darkMode} on:change={switchTheme} type="checkbox" id="theme-btn" />
			<div class="slider-wrapper">
				<div class="theme-btn-slider" />
				<span class="star star-1" />
				<span class="star star-2" />
				<span class="star star-3" />
				<span class="star star-4" />
				<span class="star star-5" />
				<span class="star star-6" />
			</div>
		</label>
	</div>
</div>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		cursor: pointer;
	}

	.main-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		.theme-switch-wrapper {
			width: 10vmin;
			height: 5vmin;
			background: var(--switch-secondary-color);
			border-radius: 49% 25% 60% 22% / 40% 84% 64% 86%;
			box-shadow: inset 1px 1px 10px -5px hsla(0, 0%, 0%, 0.6);
			input {
				display: none;
			}
			.slider-wrapper {
				position: relative;
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				.star {
					position: absolute;
					background-color: var(--switch-tertiary-color);
					box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
					transition: all 250ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
					border-radius: 100vw;
				}

				.star-1 {
					top: 1vmin;
					left: 4vmin;
					z-index: 0;
					width: 30%;
					height: 0.5vmin;
				}

				.star-2 {
					top: 2vmin;
					left: 3vmin;
					z-index: 1;
					width: 30%;
					height: 0.5vmin;
				}

				.star-3 {
					top: 3vmin;
					left: 4vmin;
					z-index: 0;
					width: 30%;
					height: 0.5vmin;
				}

				.star-4,
				.star-5,
				.star-6 {
					opacity: 0;
					transition: all 250ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
					aspect-ratio: 1;
				}

				.star-4 {
					top: 4vmin;
					left: 1vmin;
					z-index: 0;
					width: 0.4vmin;
				}

				.star-5 {
					top: 2vmin;
					left: 1.5vmin;
					z-index: 0;
					width: 0.5vmin;
				}

				.star-6 {
					top: 3vmin;
					left: 2vmin;
					z-index: 0;
					width: 0.4vmin;
				}
			}
			.theme-btn-slider {
				position: absolute;
				margin: 1vmin;
				width: 3vmin;
				aspect-ratio: 1;
				border-radius: 100vw;
				background: var(--switch-primary-color);
				transform: translateX(0px);
				transition: transform 250ms;
			}
			input:checked + .slider-wrapper .theme-btn-slider {
				background: transparent;
				transform: translateX(3vmin);
				box-shadow: 1vmin 0px 0 0 var(--switch-primary-color);
			}
			input:checked + .slider-wrapper {
				.star-1,
				.star-2,
				.star-3 {
					aspect-ratio: 1;
				}
				.star-1 {
					width: 0.4vmin;
					animation: blink 3s infinite;
				}

				.star-2 {
					width: 0.4vmin;
					transform: translate3d(3vmin, 0, 0);
				}

				.star-3 {
					width: 0.4vmin;
					transform: translate3d(-1vmin, 0, 0);
					animation: blink 2s infinite;
				}

				.star-4,
				.star-5,
				.star-6 {
					opacity: 1;
				}
				.star-4 {
					transform: translate3d(3vmin, 0, 0);
					transition: all 250ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
				}
				.star-5 {
					transform: translate3d(0, -0.4vmin, 0);
					transition: all 250ms 350ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
					animation: blink 5s infinite;
				}
				.star-6 {
					transform: translate3d(2.5vmin, -0.5vmin, 0);
					transition: all 250ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
				}
			}
		}
	}
	@keyframes blink {
		49% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
		51% {
			opacity: 1;
		}
	}
</style>
