<script lang="ts">
	import { books } from '$lib/data/books';

	// Get the first available book as the featured book
	const featuredBook = books.find((book) => book.status === 'available') || books[0];
</script>

<section class="featured-book-hero">
	<div class="container">
		<div class="featured-grid">
			<div class="featured-cover">
				{#if featuredBook.coverImage}
					<img src={featuredBook.coverImage} alt="{featuredBook.title} cover" />
				{:else}
					<div class="cover-placeholder" style="background: {featuredBook.coverGradient}">
						<span class="placeholder-title">{featuredBook.title}</span>
					</div>
				{/if}
				<div class="cover-glow"></div>
			</div>

			<div class="featured-content">
				<div class="badge-available">📚 Now Available</div>
				<h2>{featuredBook.title}</h2>
				{#if featuredBook.subtitle}
					<p class="subtitle">{featuredBook.subtitle}</p>
				{/if}

				<p class="description">{featuredBook.description}</p>

				<div class="book-stats">
					<div class="stat">
						<span class="stat-label">Genre</span>
						<span class="stat-value">{featuredBook.genre[0]}</span>
					</div>
					{#if featuredBook.pageCount}
						<div class="stat">
							<span class="stat-label">Length</span>
							<span class="stat-value">~{featuredBook.pageCount} pages</span>
						</div>
					{/if}
					{#if featuredBook.price}
						<div class="stat">
							<span class="stat-label">Price</span>
							<span class="stat-value">${featuredBook.price.toFixed(2)}</span>
						</div>
					{/if}
				</div>

				<div class="cta-group">
					<a href="/catalog#{featuredBook.id}" class="btn-primary">Read More</a>
					{#if featuredBook.links?.amazon}
						<a href={featuredBook.links.amazon} class="btn-secondary" target="_blank" rel="noopener"
							>Get on Amazon</a
						>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.featured-book-hero {
		padding: 3rem 0;
		background: linear-gradient(135deg, rgba(158, 26, 26, 0.08), rgba(104, 46, 68, 0.08));
		position: relative;
		overflow: hidden;
	}

	.featured-book-hero::before {
		content: '';
		position: absolute;
		top: -50%;
		right: -10%;
		width: 600px;
		height: 600px;
		background: radial-gradient(circle, var(--blush-pink) 0%, transparent 70%);
		opacity: 0.15;
		animation: pulse 8s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
			opacity: 0.15;
		}
		50% {
			transform: scale(1.1);
			opacity: 0.25;
		}
	}

	.featured-grid {
		display: grid;
		grid-template-columns: 350px 1fr;
		gap: 3rem;
		align-items: center;
		position: relative;
		z-index: 1;
	}

	.featured-cover {
		position: relative;
	}

	.featured-cover img,
	.cover-placeholder {
		width: 100%;
		aspect-ratio: 2/3;
		border-radius: 12px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
		display: block;
	}

	.cover-placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-family: 'Great Vibes', cursive;
		font-size: 2rem;
		text-align: center;
		padding: 2rem;
	}

	.cover-glow {
		position: absolute;
		inset: 0;
		border-radius: 12px;
		background: linear-gradient(135deg, var(--crimson), var(--wine-plum));
		opacity: 0;
		filter: blur(30px);
		transition: opacity 0.3s ease;
		z-index: -1;
	}

	.featured-cover:hover .cover-glow {
		opacity: 0.5;
	}

	.featured-content {
		max-width: 600px;
	}

	.badge-available {
		display: inline-block;
		background: linear-gradient(135deg, #4caf50, #2e7d32);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 999px;
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 1rem;
		animation: slideIn 0.6s ease-out;
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateX(-20px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.featured-content h2 {
		font-family: 'Great Vibes', cursive;
		font-size: 3rem;
		color: var(--crimson);
		margin-bottom: 0.5rem;
		line-height: 1.2;
	}

	.subtitle {
		font-style: italic;
		color: var(--wine-plum);
		font-size: 1.1rem;
		margin-bottom: 1rem;
	}

	.description {
		font-size: 1.05rem;
		line-height: 1.7;
		color: var(--charcoal);
		margin-bottom: 1.5rem;
	}

	.book-stats {
		display: flex;
		gap: 2rem;
		margin-bottom: 2rem;
		padding: 1rem 0;
		border-top: 1px solid var(--blush-pink);
		border-bottom: 1px solid var(--blush-pink);
	}

	.stat {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.stat-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		color: var(--wine-plum);
		font-family: 'Montserrat', sans-serif;
	}

	.stat-value {
		font-size: 1rem;
		font-weight: 600;
		color: var(--crimson);
	}

	.cta-group {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.btn-primary,
	.btn-secondary {
		display: inline-block;
		padding: 0.9rem 1.75rem;
		border-radius: 8px;
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
		text-decoration: none;
		transition: all 0.2s ease;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.btn-primary {
		background: linear-gradient(135deg, var(--crimson), var(--wine-plum));
		color: white;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(158, 26, 26, 0.3);
	}

	.btn-secondary {
		background: linear-gradient(135deg, var(--burnt-orange), var(--crimson));
		color: white;
	}

	.btn-secondary:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(192, 76, 43, 0.3);
	}

	@media (max-width: 900px) {
		.featured-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
			text-align: center;
		}

		.featured-cover {
			max-width: 300px;
			margin: 0 auto;
		}

		.featured-content {
			margin: 0 auto;
		}

		.featured-content h2 {
			font-size: 2.5rem;
		}

		.book-stats {
			justify-content: center;
		}

		.cta-group {
			justify-content: center;
		}
	}

	@media (max-width: 520px) {
		.featured-content h2 {
			font-size: 2rem;
		}

		.book-stats {
			flex-direction: column;
			gap: 1rem;
			text-align: center;
		}

		.cta-group {
			flex-direction: column;
		}

		.btn-primary,
		.btn-secondary {
			width: 100%;
		}
	}
</style>