<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	// Get error details from the page store
	$: status = $page.status;
	$: message = $page.error?.message || 'Something went wrong';

	// Error-specific content
	$: errorContent = getErrorContent(status);

	function getErrorContent(status: number) {
		switch (status) {
			case 404:
				return {
					title: 'Page Not Found',
					description: 'The page you\'re looking for doesn\'t exist. It might have been moved, deleted, or you entered the wrong URL.',
					suggestion: 'Try going back to the home page or check the URL for typos.'
				};
			case 500:
				return {
					title: 'Server Error',
					description: 'Something went wrong on our end. This is usually temporary.',
					suggestion: 'Please try refreshing the page or come back in a few minutes.'
				};
			case 403:
				return {
					title: 'Access Forbidden',
					description: 'You don\'t have permission to access this page.',
					suggestion: 'If you believe this is an error, please contact us.'
				};
			default:
				return {
					title: 'Oops! Something Went Wrong',
					description: 'An unexpected error occurred.',
					suggestion: 'Please try refreshing the page or go back to the home page.'
				};
		}
	}

	function goHome() {
		if (browser) {
			window.location.href = '/';
		}
	}

	function goBack() {
		if (browser) {
			window.history.back();
		}
	}
</script>

<svelte:head>
	<title>Error {status} - Ἔρως</title>
	<meta name="description" content="Error {status}: {errorContent.title}" />
	<meta name="robots" content="noindex,nofollow" />
</svelte:head>

<div class="watercolor-bg" aria-hidden="true"></div>

<main class="error-page">
	<div class="container">
		<div class="error-content">
			<div class="error-code">
				{status}
			</div>
			
			<h1 class="error-title">
				{errorContent.title}
			</h1>
			
			<p class="error-description">
				{errorContent.description}
			</p>
			
			<p class="error-suggestion">
				{errorContent.suggestion}
			</p>
			
			<div class="error-actions">
				<button class="btn btn-primary" onclick={goHome}>
					<i class="fas fa-home" aria-hidden="true"></i>
					Go Home
				</button>
				<button class="btn btn-secondary" onclick={goBack}>
					<i class="fas fa-arrow-left" aria-hidden="true"></i>
					Go Back
				</button>
			</div>
			
			{#if status >= 500}
				<div class="error-details">
					<details>
						<summary>Technical Details</summary>
						<p><strong>Error:</strong> {message}</p>
						<p><strong>Status:</strong> {status}</p>
						<p><strong>Time:</strong> {new Date().toLocaleString()}</p>
					</details>
				</div>
			{/if}
		</div>
	</div>
</main>

<style>
	.error-page {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem 1rem;
		text-align: center;
	}

	.error-content {
		max-width: 600px;
		margin: 0 auto;
	}

	.error-code {
		font-size: 8rem;
		font-weight: 300;
		color: var(--crimson);
		line-height: 1;
		margin-bottom: 1rem;
		font-family: 'Montserrat', sans-serif;
	}

	.error-title {
		font-size: 2.5rem;
		color: var(--blush-pink);
		margin-bottom: 1.5rem;
		font-family: 'Great Vibes', cursive;
	}

	.error-description {
		font-size: 1.2rem;
		color: var(--text-light);
		margin-bottom: 1rem;
		line-height: 1.6;
	}

	.error-suggestion {
		font-size: 1rem;
		color: var(--text-muted);
		margin-bottom: 2rem;
		line-height: 1.5;
	}

	.error-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 2rem;
	}

	.btn {
		padding: 0.75rem 1.5rem;
		border: none;
		border-radius: 999px;
		font-size: 1rem;
		font-weight: 500;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.2s ease;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}

	.btn-primary {
		background: var(--crimson);
		color: white;
	}

	.btn-primary:hover {
		background: #8B1538;
		transform: translateY(-2px);
	}

	.btn-secondary {
		background: transparent;
		color: var(--blush-pink);
		border: 1px solid var(--blush-pink);
	}

	.btn-secondary:hover {
		background: var(--blush-pink);
		color: white;
		transform: translateY(-2px);
	}

	.error-details {
		margin-top: 2rem;
		text-align: left;
	}

	.error-details details {
		background: rgba(158, 26, 26, 0.1);
		border: 1px solid var(--crimson);
		border-radius: 8px;
		padding: 1rem;
	}

	.error-details summary {
		cursor: pointer;
		font-weight: 500;
		color: var(--crimson);
		margin-bottom: 0.5rem;
	}

	.error-details p {
		margin: 0.5rem 0;
		font-size: 0.9rem;
		color: var(--text-light);
	}

	@media (max-width: 768px) {
		.error-code {
			font-size: 6rem;
		}

		.error-title {
			font-size: 2rem;
		}

		.error-actions {
			flex-direction: column;
			align-items: center;
		}

		.btn {
			width: 100%;
			max-width: 200px;
		}
	}
</style>
