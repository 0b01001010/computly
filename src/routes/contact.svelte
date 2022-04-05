<script lang="ts">
	import { theme as themeStore } from '$lib/stores/theme';
	$: darkMode = $themeStore === 'dark';
	// @ts-ignore
	import liIconMeta from '$lib/assets/icons/linkedin.png?w=32&format=avif;webp;png&metadata';
	// @ts-ignore
	import liPlaceholder from '$lib/assets/icons/linkedin.png?w=32&blur=5&quality=10';
	// @ts-ignore
	import mailIconMeta from '$lib/assets/icons/email.png?w=32&format=avif;webp;png&metadata';
	// @ts-ignore
	import mailPlaceholder from '$lib/assets/icons/email.png?w=32&blur=5&quality=10';
	import Image from '$lib/Components/Image.svelte';
	import CommonSeo from '$lib/Components/CommonSEO.svelte';

	const linkedInImages = {
		sources: liIconMeta,
		placeholder: liPlaceholder,
		width: 32,
		height: 32,
		alt: 'LinkedIn'
	};

	const mailImages = {
		sources: mailIconMeta,
		placeholder: mailPlaceholder,
		width: 32,
		height: 32,
		alt: 'Email'
	};
</script>

<CommonSeo title="Contact us" descriptions="Feel free to get in touch using one of these methods" />

<article class="{darkMode ? 'bg-dark' : 'bg-light'} border border-2">
	<h1>Contact</h1>
	<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 894 448">
		<path
			fill="#f0f0f0"
			d="m294 448-80-1c-39-2-79-3-115-23-26-15-49-38-67-67a224 224 0 0 1-25-64 261 261 0 0 1 1-123 220 220 0 0 1 15-41C50 73 99 36 157 26a7 7 0 0 1 2 0h1a17 17 0 0 1 3 0c90-14 186 13 277 79 70 50 163 77 284 82l1 1c34 1 66 15 94 40a204 204 0 0 1 64 106 26 26 0 0 1-7 25l-2 2-1 1-21 15a65 65 0 0 1-16 6 2270 2270 0 0 1-264 48 2269 2269 0 0 1-278 17ZM158 28C100 38 51 75 24 130a218 218 0 0 0-14 40 259 259 0 0 0-1 123 222 222 0 0 0 25 63c17 29 40 52 65 66 37 20 76 21 115 23a2266 2266 0 0 0 358-16 2337 2337 0 0 0 264-48 63 63 0 0 0 15-6c7-3 13-8 21-15h1l2-2c6-7 9-15 7-23l-4-14c-24-75-85-128-153-131l-2-1c-55-2-103-9-147-21-53-13-99-34-137-62-90-65-186-92-276-78a15 15 0 0 0-2 0h-1a9 9 0 0 1-1 0h-1Z"
		/>
		<path
			fill="#2f2e41"
			d="M279 146c-2-2-5-16-8-17 2 5 1 7 1 12a39 39 0 0 1-1 10h-54v-42a29 29 0 0 1 28-29 17 17 0 0 1 5 1 27 27 0 0 1 19 19c4 15 11 40 10 46Z"
		/>
		<path fill="#ffb6b6" d="M220 198v-33l-20 2 7 21-3 52a8 8 0 1 0 10 6Zm38 235h8l3-30h-11v30z" />
		<path fill="#2f2e41" d="m255 429 12-1v5l12 9a3 3 0 0 1-2 6h-14l-3-6-1 6h-5Z" />
		<path fill="#ffb6b6" d="M213 433h7l4-30h-11v30z" />
		<path fill="#2f2e41" d="m210 429 12-1v5l12 9a3 3 0 0 1-2 6h-15l-2-6-1 6h-6Z" />
		<path
			fill="#e6e6e6"
			d="M251 130h-16l-12 12-9 1a18 18 0 0 0-16 17l2 9h10l5 32c-2 6-2 10 2 12l14 25 40-18c2-3 3-7 1-10l3-50h9c0-9-3-17-12-18a109 109 0 0 0-11 0Z"
		/>
		<path
			fill="#2f2e41"
			d="M271 220s-39 7-54-7l-4 6-2 4-3 4-1 4c-7 16-16 38-14 53l6 54c1 2-1 5-1 7l3 4-2 4 2 4 7 62h19l3-69-3-25 7-51 9 48 1 28 10 71h17v-69l1-4-1-4 1-5-1-6Z"
		/>
		<path fill="#ffb6b6" d="M256 120a18 18 0 1 1 3-15v1a18 18 0 0 1-3 14Z" />
		<path
			fill="#2f2e41"
			d="M252 110a10 10 0 0 0-3-5 13 13 0 0 1-1 5 25 25 0 0 1-14-3c-3-2-7-2-12 0a18 18 0 0 1 18-17h3a18 18 0 0 1 18 17 53 53 0 0 1-9 3Z"
		/>
		<circle cx="113.2" cy="285" r="51" fill="#f0f0f0" />
		<circle cx="438.2" cy="51" r="51" fill="#f0f0f0" />
		<circle cx="843.2" cy="293" r="51" fill="#f0f0f0" />
		<path
			fill="#416d72"
			d="M530 57v115a9 9 0 0 1-9 9h-13a41 41 0 0 1-41-40V57a9 9 0 0 1 9-10h6c-3 8 31 11 33 0h6a9 9 0 0 1 9 10Z"
		/>
		<path fill="#3f3d56" d="M490 39a1 1 0 0 1 2-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-2-1Z" />
		<path
			fill="#3f3d56"
			d="M524 196h-51a15 15 0 0 1-16-15v-81a2 2 0 0 1 0-2v-8a2 2 0 0 1 0-2v-2a2 2 0 0 1 0-2v-8a2 2 0 0 1 0-1v-4a2 2 0 0 1-1-2v-8a2 2 0 0 1 1-2V48a15 15 0 0 1 16-15h51a15 15 0 0 1 15 15v23a2 2 0 0 1 1 2v15a2 2 0 0 1-1 2v91a15 15 0 0 1-15 15ZM473 35a13 13 0 0 0-14 13v12h-1v9h1v112a13 13 0 0 0 14 13h51a13 13 0 0 0 13-13V88h1V73h-1V48a13 13 0 0 0-13-13Z"
		/>
		<circle cx="504.2" cy="38.8" r="1.2" fill="#3f3d56" />
		<path
			fill="#fff"
			d="M244 270H110a7 7 0 0 1-7-7v-65a7 7 0 0 1 7-7h134a7 7 0 0 1 7 7v65a7 7 0 0 1-7 7Z"
		/>
		<path
			fill="#3f3d56"
			d="M244 270H110a7 7 0 0 1-7-7v-65a7 7 0 0 1 7-7h134a7 7 0 0 1 7 7v65a7 7 0 0 1-7 7Zm-134-77a5 5 0 0 0-5 5v65a5 5 0 0 0 5 5h134a5 5 0 0 0 5-5v-65a5 5 0 0 0-5-5Z"
		/>
		<path
			fill="#416d72"
			d="m184 261-64-1a5 5 0 0 1-5-5v-54a2 2 0 0 1 2-2h120a2 2 0 0 1 2 2v37a23 23 0 0 1-22 23h-33Z"
		/>
		<path
			fill="#3f3d56"
			d="M230 234H121a4 4 0 0 1-4-2l-12-35a4 4 0 0 1 4-6h136a4 4 0 0 1 5 5l-1 1-15 35a4 4 0 0 1-4 2Zm15-41H109a2 2 0 0 0-2 3l12 35a2 2 0 0 0 2 1h109a2 2 0 0 0 2-1l15-35 1 1-1-1a2 2 0 0 0-2-3Z"
		/>
		<circle cx="177" cy="233.5" r="8.5" fill="#fff" />
		<circle cx="499" cy="159.5" r="8.5" fill="#fff" />
		<path
			fill="#3f3d56"
			d="m821 283-22-22a12 12 0 0 0-9-4 12 12 0 0 0-8 4 28 28 0 0 0-1 39h1a27 27 0 0 0 4 4 28 28 0 0 0 16 4 28 28 0 0 0 19-8 12 12 0 0 0 0-17Zm-1 16a26 26 0 0 1-33 3 27 27 0 0 1-4-3 26 26 0 0 1 0-37 10 10 0 0 1 7-3 10 10 0 0 1 7 3l23 23a10 10 0 0 1 0 14Zm-73-90-23-22a12 12 0 0 0-9-4 12 12 0 0 0-8 4 28 28 0 0 0-5 33 28 28 0 0 0 5 6v1a28 28 0 0 0 20 8 28 28 0 0 0 20-9 12 12 0 0 0 0-17Zm-2 16a26 26 0 0 1-18 8 26 26 0 0 1-19-45 10 10 0 0 1 14 0l23 23a10 10 0 0 1 0 14Z"
		/>
		<path
			fill="#416d72"
			d="m823 290-25-25a9 9 0 0 0-13 0 22 22 0 1 0 32 31Zm-75-74-25-24a9 9 0 0 0-12 0 22 22 0 1 0 31 31Z"
		/>
		<path
			fill="#3f3d56"
			d="M795 306v1l-9-3c-46-19-69-42-84-84l-2-6 2-1a26 26 0 0 0 2 6l3 7c14 36 34 56 74 74l6 2a26 26 0 0 0 8 4Z"
		/>
		<path fill="#3f3d56" d="m723 234 1-1 52 51-1 2z" />
		<path fill="#ffb6b6" d="M284 190v-33l-20 2 7 21-24 37a8 8 0 1 0 9 7Z" />
	</svg>
	<p>Feel free to get in touch using one of these methods:</p>
	<div class="contact-methods">
		<a href="https://www.linkedin.com/in/a3k/" target="_blank" rel="external">
			<Image imageData={linkedInImages} />
		</a>
		<a href="mailto://contact@computly.me" target="_blank" rel="external">
			<Image imageData={mailImages} />
		</a>
	</div>
</article>

<style lang="scss">
	svg {
		margin: 2rem;
	}
	p {
		margin: 0;
		text-align: center;
	}
	.contact-methods {
		margin-top: 1rem;
		width: auto;
		display: flex;
		justify-content: center;
		gap: 1rem;
		a {
			background: none;
			transition: transform 200ms ease-in-out;
			&:hover {
				transform: scale(1.2);
				filter: contrast(1.5);
			}
		}
	}
</style>
