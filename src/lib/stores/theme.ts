import { writable } from 'svelte/store';
import { browser } from '$app/env';
import type { Writable } from 'svelte/types/runtime/store';
const ls = browser && localStorage.getItem('theme');

export const theme: Writable<string> = writable(ls); // null | light | dark

theme.subscribe((value) => {
	if (browser) {
		localStorage.setItem('theme', value);
	}
});
