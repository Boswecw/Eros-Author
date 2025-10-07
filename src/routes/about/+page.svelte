<script lang="ts">
	// About page logic here if needed
</script>

<svelte:head>
	<title>About — Ἔρως</title>
	<meta
		name="description"
		content="Learn about Ἔρως, a single-author imprint dedicated to fantasy novels and adult fiction that prioritizes character agency, consent, and heat that serves the story."
	/>
</svelte:head>

<div class="about-page">
	<header class="page-header">
		<div class="container">
			<a href="/" class="back-link">← Back to Home</a>
			<h1>About Ἔρως</h1>
		</div>
	</header>

	<main class="page-content">
		<div class="container">
			<section class="about-section">
				<h2>The Philosophy</h2>
				<p>
					<strong>Ἔρως</strong> (Eros) is more than a pen name—it's a commitment to stories where
					desire drives plot, relationships have consequences, and heat serves character development.
				</p>
				<p>
					Named after the Greek god of passionate love, this imprint explores the intersection of
					action-forward fantasy and romance that respects agency. Here, characters make choices
					that matter. Consent isn't just present—it's integral to the narrative. And explicit
					content exists to deepen understanding, not just titillate.
				</p>
			</section>

			<div class="divider" aria-hidden="true"></div>

			<section class="about-section">
				<h2>What Makes It Different</h2>
				<div class="principles-grid">
					<div class="principle-card">
						<h3>🗡️ Action First</h3>
						<p>
							Fast pacing, high stakes, and combat that matters. The fantasy isn't window
							dressing—it's the engine.
						</p>
					</div>
					<div class="principle-card">
						<h3>❤️‍🔥 Heat With Purpose</h3>
						<p>
							Explicit scenes that reveal character, advance plot, or explore power dynamics.
							Intimacy as storytelling.
						</p>
					</div>
					<div class="principle-card">
						<h3>⚔️ Agency Always</h3>
						<p>
							Characters choose their path. Consent is explicit. Relationships evolve through
							communication, not miscommunication tropes.
						</p>
					</div>
					<div class="principle-card">
						<h3>🔮 Magic Has Costs</h3>
						<p>
							World-building that makes sense. Magic systems with rules. Politics that feel real.
							Consequences that stick.
						</p>
					</div>
				</div>
			</section>

			<div class="divider" aria-hidden="true"></div>

			<section class="about-section">
				<h2>The Author</h2>
				<p>
					Behind Ἔρως is a fantasy author and web developer who believes stories can be both
					commercially entertaining and thoughtfully crafted. Influences range from epic fantasy
					(Brandon Sanderson, Robin Hobb) to progression fantasy (Andrew Rowe, Shirtaloon) to
					romance-forward fantasy (Logan Jacobs, Eric Val).
				</p>
				<p>
					The goal? Write the books I want to read: fast-paced fantasy with complex characters,
					relationships that evolve naturally, and explicit content that enhances rather than
					distracts from the story.
				</p>
				<blockquote class="author-quote">
					"Fantasy should make you feel something—excitement, desire, connection. The best stories
					do all three."
				</blockquote>
			</section>

			<div class="divider" aria-hidden="true"></div>

			<section class="about-section">
				<h2>Influences & Inspiration</h2>
				<div class="influences">
					<div class="influence-group">
						<h3>For World-Building</h3>
						<ul>
							<li>Brandon Sanderson (magic systems, consequences)</li>
							<li>Robin Hobb (character depth, emotional resonance)</li>
							<li>N.K. Jemisin (innovative structures, social commentary)</li>
						</ul>
					</div>
					<div class="influence-group">
						<h3>For Pacing & Action</h3>
						<ul>
							<li>Andrew Rowe (Arcane Ascension series)</li>
							<li>Shirtaloon (He Who Fights With Monsters)</li>
							<li>Will Wight (Cradle series)</li>
						</ul>
					</div>
					<div class="influence-group">
						<h3>For Romance & Heat</h3>
						<ul>
							<li>Logan Jacobs (harem fantasy with heart)</li>
							<li>Eric Val (fast-paced, chemistry-driven)</li>
							<li>Tanya Huff (Valor series, found family dynamics)</li>
						</ul>
					</div>
				</div>
			</section>

			<div class="divider" aria-hidden="true"></div>

			<section class="about-section">
				<h2>Content Approach</h2>
				<p>Every story under the Ἔρως banner follows these principles:</p>
				<ul class="content-list">
					<li>
						<strong>18+ Only:</strong> All content is for adult readers. Characters are adults making
						adult choices.
					</li>
					<li>
						<strong>Consent-Forward:</strong> Explicit, enthusiastic consent is non-negotiable. No dubcon,
						no coercion framed as romantic.
					</li>
					<li>
						<strong>Content Warnings Provided:</strong> Every work includes clear warnings so readers
						can make informed choices.
					</li>
					<li>
						<strong>Diverse Representations:</strong> Characters of various identities, orientations,
						and backgrounds—treated with respect.
					</li>
					<li>
						<strong>No Sexual Violence:</strong> Violence exists in the fantasy sense, but sexual violence
						is never depicted or romanticized.
					</li>
				</ul>
			</section>

			<div class="divider" aria-hidden="true"></div>

			<section class="about-section cta-section">
				<h2>Join the Journey</h2>
				<p>
					Ἔρως is just getting started. If you want fast-paced fantasy, romance that matters, and
					stories that respect both your intelligence and your desire for heat, you're in the right
					place.
				</p>
				<div class="cta-buttons">
					<a href="/catalog" class="cta-button">Browse the Catalog</a>
					<a href="/#join" class="cta-button secondary">Subscribe to Newsletter</a>
				</div>
			</section>
		</div>
	</main>
</div>

<style>
	.about-page {
		min-height: 100vh;
		background: var(--cream);
	}

	.page-header {
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

	.page-header h1 {
		font-family: 'Great Vibes', cursive;
		font-size: 3.5rem;
		color: var(--crimson);
	}

	.page-content {
		padding: 3rem 0;
	}

	.about-section {
		max-width: 800px;
		margin: 0 auto 3rem;
	}

	.about-section h2 {
		font-family: 'Great Vibes', cursive;
		font-size: 2.5rem;
		color: var(--crimson);
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.about-section p {
		line-height: 1.8;
		margin-bottom: 1rem;
		color: var(--charcoal);
	}

	.principles-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.principle-card {
		background: white;
		padding: 1.5rem;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
		border-top: 4px solid var(--crimson);
	}

	.principle-card h3 {
		font-family: 'Montserrat', sans-serif;
		font-size: 1.2rem;
		color: var(--crimson);
		margin-bottom: 0.75rem;
	}

	.principle-card p {
		font-size: 0.95rem;
		color: var(--wine-plum);
		margin: 0;
	}

	.author-quote {
		background: linear-gradient(135deg, rgba(158, 26, 26, 0.05), rgba(104, 46, 68, 0.05));
		padding: 2rem;
		border-left: 4px solid var(--crimson);
		border-radius: 8px;
		font-style: italic;
		color: var(--wine-plum);
		margin: 2rem 0;
		font-size: 1.1rem;
	}

	.influences {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.influence-group h3 {
		font-family: 'Montserrat', sans-serif;
		font-size: 1.1rem;
		color: var(--crimson);
		margin-bottom: 0.75rem;
		border-bottom: 2px solid var(--blush-pink);
		padding-bottom: 0.5rem;
	}

	.influence-group ul {
		list-style: none;
		padding: 0;
	}

	.influence-group li {
		padding: 0.5rem 0;
		color: var(--wine-plum);
		padding-left: 1.5rem;
		position: relative;
	}

	.influence-group li::before {
		content: '→';
		position: absolute;
		left: 0;
		color: var(--crimson);
	}

	.content-list {
		list-style: none;
		padding: 0;
		margin-top: 1.5rem;
	}

	.content-list li {
		padding: 1rem;
		margin-bottom: 0.75rem;
		background: white;
		border-radius: 8px;
		border-left: 4px solid var(--blush-pink);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	}

	.content-list strong {
		color: var(--crimson);
		font-family: 'Montserrat', sans-serif;
	}

	.cta-section {
		text-align: center;
		background: linear-gradient(135deg, rgba(158, 26, 26, 0.05), rgba(104, 46, 68, 0.05));
		padding: 3rem 2rem;
		border-radius: 16px;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-top: 2rem;
		flex-wrap: wrap;
	}

	.cta-button.secondary {
		background: linear-gradient(135deg, var(--burnt-orange), var(--crimson));
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2.5rem;
		}

		.about-section {
			padding: 0 1rem;
		}

		.principles-grid,
		.influences {
			grid-template-columns: 1fr;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: stretch;
		}
	}
</style>