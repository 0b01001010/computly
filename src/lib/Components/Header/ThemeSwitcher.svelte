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
		: '#c4eeff'}; --switch-tertiary-color: white;"
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
		justify-content: center;
		align-items: center;
		.theme-switch-wrapper {
			position: relative;
			width: 4rem;
			height: 2rem;
			background: var(--switch-secondary-color);
			border-radius: 100vw;
			box-shadow: inset 1px 1px 5px hsla(0, 0%, 0%, 0.5);
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
					top: 10px;
					left: 35px;
					z-index: 0;
					width: 30%;
					height: 3px;
				}

				.star-2 {
					top: 18px;
					left: 28px;
					z-index: 1;
					width: 30%;
					height: 3px;
				}

				.star-3 {
					top: 27px;
					left: 40px;
					z-index: 0;
					width: 30%;
					height: 3px;
				}

				.star-4,
				.star-5,
				.star-6 {
					opacity: 0;
					transition: all 250ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
				}

				.star-4 {
					top: 16px;
					left: 11px;
					z-index: 0;
					width: 2px;
					height: 2px;
					transform: translate3d(3px, 0, 0);
				}

				.star-5 {
					top: 32px;
					left: 17px;
					z-index: 0;
					width: 3px;
					height: 3px;
					transform: translate3d(3px, 0, 0);
				}

				.star-6 {
					top: 36px;
					left: 28px;
					z-index: 0;
					width: 2px;
					height: 2px;
					transform: translate3d(0.5rem, 0, 0);
				}
			}
			.theme-btn-slider {
				position: absolute;
				margin: 5px;
				width: 1.5rem;
				aspect-ratio: 1;
				border-radius: 100vw;
				background: var(--switch-primary-color);
				transform: translateX(0px);
				transition: transform 250ms;
			}
			input:checked + .slider-wrapper .theme-btn-slider {
				background: transparent;
				transform: translateX(1.1rem);
				box-shadow: 0.5rem 0px 0 0 var(--switch-primary-color);
			}
			input:checked + .slider-wrapper {
				.star-1 {
					width: 2px;
					height: 2px;
					animation: blink 3s infinite;
				}

				.star-2 {
					width: 4px;
					height: 4px;
					transform: translate3d(20px, 0, 0);
				}

				.star-3 {
					width: 2px;
					height: 2px;
					transform: translate3d(-7px, 0, 0);
					animation: blink 2s infinite;
				}

				.star-4,
				.star-5,
				.star-6 {
					opacity: 1;
				}
				.star-4 {
					transform: translate3d(10px, 0, 0);
					transition: all 250ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
				}
				.star-5 {
					transform: translate3d(0, 0, 0);
					transition: all 250ms 350ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
					animation: blink 5s infinite;
				}
				.star-6 {
					transform: translate3d(0.7rem, 0, 0);
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
			opacity: 0.7;
		}
		51% {
			opacity: 1;
		}
	}
</style>
