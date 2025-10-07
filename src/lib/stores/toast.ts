// src/lib/stores/toast.ts
import { writable } from 'svelte/store';

export interface ToastData {
	id: string;
	message: string;
	type: 'info' | 'success' | 'warning' | 'error';
	duration?: number;
}

function createToastStore() {
	const { subscribe, update } = writable<ToastData[]>([]);

	return {
		subscribe,
		add: (toast: Omit<ToastData, 'id'>) => {
			const id = Math.random().toString(36).substr(2, 9);
			const newToast: ToastData = {
				id,
				duration: 4000,
				...toast
			};

			update(toasts => [...toasts, newToast]);

			// Auto-remove after duration
			setTimeout(() => {
				update(toasts => toasts.filter(t => t.id !== id));
			}, newToast.duration);

			return id;
		},
		remove: (id: string) => {
			update(toasts => toasts.filter(t => t.id !== id));
		},
		clear: () => {
			update(() => []);
		}
	};
}

export const toastStore = createToastStore();

// Convenience functions
export const showToast = {
	info: (message: string, duration?: number) => 
		toastStore.add({ message, type: 'info', duration }),
	success: (message: string, duration?: number) => 
		toastStore.add({ message, type: 'success', duration }),
	warning: (message: string, duration?: number) => 
		toastStore.add({ message, type: 'warning', duration }),
	error: (message: string, duration?: number) => 
		toastStore.add({ message, type: 'error', duration })
};
