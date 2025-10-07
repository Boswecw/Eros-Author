// src/lib/stores/ageVerification.ts
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createAgeStore() {
	const { subscribe, set } = writable(false);

	return {
		subscribe,
		init: () => {
			if (browser) {
				const verified = localStorage.getItem('eros_age_ok') === '1';
				set(verified);
			}
		},
		verify: () => {
			if (browser) {
				localStorage.setItem('eros_age_ok', '1');
			}
			set(true);
		},
		reject: () => {
			if (browser) {
				localStorage.removeItem('eros_age_ok');
			}
			set(false);
		}
	};
}

export const ageVerified = createAgeStore();