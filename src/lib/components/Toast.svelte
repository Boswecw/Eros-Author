<!-- @component
no description yet
-->
<script lang="ts">
	let {
		message = '',
		type = 'info',
		duration = 4000,
		show = false,
		onClose = () => {}
	} = $props<{
		message: string;
		type?: 'info' | 'success' | 'warning' | 'error';
		duration?: number;
		show: boolean;
		onClose?: () => void;
	}>();

	let toastElement = $state<HTMLDivElement>();
	let timeoutId: number;

	$effect(() => {
		if (show) {
			// Clear any existing timeout
			if (timeoutId) {
				clearTimeout(timeoutId);
			}

			// Auto-hide after duration
			timeoutId = setTimeout(() => {
				handleClose();
			}, duration);
		}

		// Cleanup function
		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	});

	function handleClose() {
		show = false;
		onClose();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			handleClose();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if show}
	<div 
		bind:this={toastElement}
		class="toast toast-{type}"
		role="alert"
		aria-live="polite"
		aria-atomic="true"
	>
		<div class="toast-content">
			<div class="toast-icon">
				{#if type === 'info'}
					ℹ️
				{:else if type === 'success'}
					✅
				{:else if type === 'warning'}
					⚠️
				{:else if type === 'error'}
					❌
				{/if}
			</div>
			<div class="toast-message">
				{message}
			</div>
			<button 
				class="toast-close" 
				onclick={handleClose}
				aria-label="Close notification"
			>
				×
			</button>
		</div>
	</div>
{/if}

<style>
	.toast {
		position: fixed;
		top: 2rem;
		right: 2rem;
		z-index: 10000;
		min-width: 300px;
		max-width: 500px;
		border-radius: 12px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(10px);
		animation: slideIn 0.3s ease-out;
		font-family: 'Montserrat', sans-serif;
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateX(100%);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.toast-content {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		padding: 1rem 1.25rem;
	}

	.toast-icon {
		font-size: 1.25rem;
		flex-shrink: 0;
		margin-top: 0.125rem;
	}

	.toast-message {
		flex: 1;
		font-size: 0.95rem;
		line-height: 1.5;
		color: var(--charcoal);
	}

	.toast-close {
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
		color: var(--wine-plum);
		opacity: 0.7;
		transition: opacity 0.2s ease;
		flex-shrink: 0;
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
	}

	.toast-close:hover {
		opacity: 1;
		background: rgba(0, 0, 0, 0.1);
	}

	.toast-info {
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 245, 242, 0.95));
		border-left: 4px solid var(--blush-pink);
	}

	.toast-success {
		background: linear-gradient(135deg, rgba(232, 245, 233, 0.95), rgba(200, 230, 201, 0.95));
		border-left: 4px solid #4caf50;
	}

	.toast-warning {
		background: linear-gradient(135deg, rgba(255, 248, 225, 0.95), rgba(255, 236, 179, 0.95));
		border-left: 4px solid var(--burnt-orange);
	}

	.toast-error {
		background: linear-gradient(135deg, rgba(255, 235, 238, 0.95), rgba(255, 205, 210, 0.95));
		border-left: 4px solid var(--crimson);
	}

	@media (max-width: 640px) {
		.toast {
			top: 1rem;
			right: 1rem;
			left: 1rem;
			min-width: auto;
			max-width: none;
		}
	}
</style>
