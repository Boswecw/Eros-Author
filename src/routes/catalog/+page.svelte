<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// Use the pre-loaded data
	const books = data.books;
	const meta = data.meta;

	let selectedBook = $state<string | null>(null);

	$effect(() => {
		// Handle hash navigation
		const hash = $page.url.hash.slice(1);
		if (hash) {
			selectedBook = hash;
			setTimeout(() => {
				document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
			}, 100);
		}
	});

	function getStatusBadge(status: string) {
		const badges = {
			available: { text: 'Available Now', class: 'badge-available' },
			'coming-soon': { text: 'Coming Soon', class: 'badge-coming' },
			draft: { text: 'In Progress', class: 'badge-draft' }
		};
		return badges[status as keyof typeof badges] || badges.draft;
	}
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="keywords" content={meta.keywords} />
	{#if import.meta.env.MODE === 'development'}
		<meta name="robots" content="noindex,nofollow" />
	{/if}

	<!-- Open Graph / Social Media -->
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{$page.url.origin}/catalog" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.description} />
</svelte:head>

<div class="catalog-page">
	<header class="catalog-header">
		<div class="container">
			<a href="/" class="back-link">← Back to Home</a>
			<h1>The Catalog</h1>
			<p class="catalog-intro">
				Fantasy novels, romance series, and adult short stories. All featuring action-forward plots,
				complex characters, and heat that matters to the story.
			</p>
		</div>
	</header>

	<main class="catalog-main">
		<div class="container">
			{#each books as book (book.id)}
				{@const badge = getStatusBadge(book.status)}
				<article id={book.id} class="book-detail">
					<div class="book-detail-grid">
						{#if book.coverImage}
							<div class="book-cover-large-image">
								<img src={book.coverImage} alt="{book.title} cover" />
							</div>
						{:else}
							<div class="book-cover-large" style="background: {book.coverGradient}">
								<span class="cover-title">{book.title}</span>
							</div>
						{/if}

						<div class="book-info">
							<div class="book-header">
								<div>
									<h2>{book.title}</h2>
									{#if book.subtitle}
										<p class="subtitle">{book.subtitle}</p>
									{/if}
								</div>
								<span class="status-badge {badge.class}">{badge.text}</span>
							</div>

							<div class="book-meta">
								<div class="meta-item">
									<strong>Genre:</strong>
									{book.genre.join(', ')}
								</div>
								{#if book.pageCount}
									<div class="meta-item">
										<strong>Length:</strong>
										~{book.pageCount} pages
									</div>
								{/if}
								{#if book.price}
									<div class="meta-item">
										<strong>Price:</strong>
										${book.price.toFixed(2)}
									</div>
								{/if}
								{#if book.releaseDate}
									<div class="meta-item">
										<strong>Release:</strong>
										{book.releaseDate}
									</div>
								{/if}
							</div>

							<div class="book-description">
								<p>{book.description}</p>
								{#if book.longDescription}
									{#each book.longDescription.split('\n\n') as paragraph}
										<p>{paragraph}</p>
									{/each}
								{/if}
							</div>

							<div class="content-warnings">
								<h3>Content Notes</h3>
								<ul>
									{#each book.contentWarnings as warning}
										<li>{warning}</li>
									{/each}
								</ul>
							</div>

							{#if book.status === 'available' && book.links}
								<div class="book-links">
									<h3>Get the Book</h3>
									<div class="store-links">
										{#if book.links.amazon}
											<a href={book.links.amazon} class="store-btn amazon-btn" target="_blank" rel="noopener">
												<span class="btn-icon">📚</span>
												Buy on Amazon - ${book.price?.toFixed(2) || 'TBD'}
											</a>
										{/if}
										{#if book.links.kobo}
											<a href={book.links.kobo} class="store-btn" target="_blank" rel="noopener">
												Kobo
											</a>
										{/if}
										{#if book.links.apple}
											<a href={book.links.apple} class="store-btn" target="_blank" rel="noopener">
												Apple Books
											</a>
										{/if}
										{#if book.links.sample}
											<a href={book.links.sample} class="store-btn sample-btn">Read Sample</a>
										{/if}
									</div>
									<p class="kindle-unlimited">
										<strong>📖 Available with Kindle Unlimited</strong> - Read for free with your KU subscription!
									</p>
								</div>
							{/if}
						</div>
					</div>
				</article>
			{/each}
		</div>
	</main>

	<section class="catalog-footer">
		<div class="container">
			<h2>Stay Updated</h2>
			<p>Join the newsletter for release dates, exclusive content, and early access.</p>
			<a href="/#join" class="cta-button">Subscribe Now</a>
		</div>
	</section>
</div>

<style>
	.catalog-page {
		min-height: 100vh;
		background: var(--cream);
	}

	.catalog-header {
		background: linear-gradient(135deg, rgba(158, 26, 26, 0.05), rgba(104, 46, 68, 0.05));
		padding: 2rem 0 3rem;
		text-align: center;
		border-bottom: 3px solid var(--blush-pink);
	}

	.back-link {
		display: inline-block;
		color: var(--wine-plum);
		text-decoration: none;
		margin-bottom: 1rem;
		font-family: 'Montserrat', sans-serif;
		transition: color 0.2s ease;
	}

	.back-link:hover {
		color: var(--crimson);
	}

	.catalog-header h1 {
		font-family: 'Great Vibes', cursive;
		font-size: 3rem;
		color: var(--crimson);
		margin-bottom: 0.5rem;
	}

	.catalog-intro {
		max-width: 640px;
		margin: 0 auto;
		color: var(--wine-plum);
		font-style: italic;
	}

	.catalog-main {
		padding: 3rem 0;
	}

	.book-detail {
		margin-bottom: 4rem;
		background: white;
		border-radius: 16px;
		padding: 2rem;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
	}

	.book-detail-grid {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 2rem;
		align-items: start;
	}

	.book-cover-large {
		width: 100%;
		aspect-ratio: 2/3;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
		position: sticky;
		top: 2rem;
	}

	.book-cover-large-image {
		width: 100%;
		aspect-ratio: 2/3;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
		position: sticky;
		top: 2rem;
	}

	.book-cover-large-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.cover-title {
		font-family: 'Great Vibes', cursive;
		font-size: 2rem;
		color: white;
		text-align: center;
		padding: 1rem;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.book-header {
		display: flex;
		justify-content: space-between;
		align-items: start;
		margin-bottom: 1.5rem;
		gap: 1rem;
	}

	.book-header h2 {
		font-family: 'Great Vibes', cursive;
		font-size: 2.5rem;
		color: var(--crimson);
		margin: 0;
	}

	.subtitle {
		color: var(--wine-plum);
		font-style: italic;
		margin-top: 0.25rem;
	}

	.status-badge {
		padding: 0.5rem 1rem;
		border-radius: 999px;
		font-size: 0.875rem;
		font-weight: 500;
		white-space: nowrap;
	}

	.badge-available {
		background: linear-gradient(135deg, #4caf50, #2e7d32);
		color: white;
	}

	.badge-coming {
		background: linear-gradient(135deg, var(--burnt-orange), var(--crimson));
		color: white;
	}

	.badge-draft {
		background: #e0e0e0;
		color: var(--charcoal);
	}

	.book-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--blush-pink);
	}

	.meta-item {
		font-size: 0.95rem;
		color: var(--wine-plum);
	}

	.meta-item strong {
		color: var(--charcoal);
	}

	.book-description {
		line-height: 1.7;
		margin-bottom: 2rem;
	}

	.book-description p {
		margin-bottom: 1rem;
	}

	.content-warnings {
		background: rgba(158, 26, 26, 0.05);
		padding: 1.5rem;
		border-radius: 8px;
		margin-bottom: 2rem;
	}

	.content-warnings h3 {
		font-family: 'Montserrat', sans-serif;
		font-size: 1.1rem;
		color: var(--crimson);
		margin-bottom: 0.75rem;
	}

	.content-warnings ul {
		list-style: none;
		padding: 0;
		display: grid;
		gap: 0.5rem;
	}

	.content-warnings li {
		padding-left: 1.5rem;
		position: relative;
	}

	.content-warnings li::before {
		content: '•';
		position: absolute;
		left: 0;
		color: var(--crimson);
		font-weight: bold;
	}

	.book-links h3 {
		font-family: 'Montserrat', sans-serif;
		font-size: 1.1rem;
		color: var(--crimson);
		margin-bottom: 1rem;
	}

	.store-links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.store-btn {
		padding: 0.75rem 1.5rem;
		background: linear-gradient(135deg, var(--crimson), var(--wine-plum));
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.store-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(158, 26, 26, 0.3);
	}

	.sample-btn {
		background: linear-gradient(135deg, var(--burnt-orange), var(--crimson));
	}

	.catalog-footer {
		background: linear-gradient(135deg, rgba(158, 26, 26, 0.05), rgba(104, 46, 68, 0.05));
		padding: 3rem 0;
		text-align: center;
		border-top: 3px solid var(--blush-pink);
	}

	.catalog-footer h2 {
		font-family: 'Great Vibes', cursive;
		font-size: 2.5rem;
		color: var(--crimson);
		margin-bottom: 0.5rem;
	}

	.catalog-footer p {
		color: var(--wine-plum);
		margin-bottom: 1.5rem;
	}

	@media (max-width: 768px) {
		.book-detail-grid {
			grid-template-columns: 1fr;
		}

		.book-cover-large {
			max-width: 300px;
			margin: 0 auto;
			position: static;
		}

		.book-header {
			flex-direction: column;
		}

		.catalog-header h1 {
			font-size: 2.2rem;
		}
	}
</style>