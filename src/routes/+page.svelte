<script lang="ts">
	import { browser } from '$app/environment';
	import { books } from '$lib/data/books';
	import BookCard from '$lib/components/BookCard.svelte';
	import AgeGate from '$lib/components/AgeGate.svelte';
	import { showToast } from '$lib/stores/toast';
	import { trackPageView, trackNewsletterSignup, trackContentNotesView, trackExternalLink } from '$lib/analytics';

	let ageOk = $state(false);

	$effect(() => {
		if (!browser) return;
		// Read once on mount
		ageOk = localStorage.getItem('eros_age_ok') === '1';

		// Track page view
		trackPageView('home');

		// Section-aware nav highlight
		const sections = [...document.querySelectorAll('main section[id]')];
		const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('.nav a')];
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						const id = '#' + (e.target as HTMLElement).id;
						navLinks.forEach((a) => a.removeAttribute('aria-current'));
						const active = navLinks.find((a) => a.getAttribute('href') === id);
						if (active) active.setAttribute('aria-current', 'true');
					}
				});
			},
			{ rootMargin: '-60% 0px -35% 0px', threshold: 0.01 }
		);
		sections.forEach((s) => io.observe(s));

		// Parallax bg
		const onScroll = () => {
			const scrolled = window.pageYOffset;
			const bg = document.querySelector<HTMLElement>('.watercolor-bg');
			if (bg) bg.style.transform = `translateY(${scrolled * 0.2}px)`;
		};
		window.addEventListener('scroll', onScroll);

		return () => {
			io.disconnect();
			window.removeEventListener('scroll', onScroll);
		};
	});

	function confirmAge() {
		ageOk = true;
		if (browser) localStorage.setItem('eros_age_ok', '1');
	}

	let newsletterState = $state<'idle' | 'loading' | 'success' | 'error'>('idle');
	let newsletterMessage = $state('');

	async function handleNewsletterSubmit(e: Event) {
		e.preventDefault();
		const form = e.currentTarget as HTMLFormElement;
		const formData = new FormData(form);
		const email = formData.get('email') as string;

		// Validate email
		if (!email || !email.includes('@')) {
			newsletterState = 'error';
			newsletterMessage = 'Please enter a valid email address.';
			return;
		}

		newsletterState = 'loading';
		newsletterMessage = 'Subscribing...';

		try {
			const response = await fetch('https://formspree.io/f/xqaybvvq', {
				method: 'POST',
				body: formData,
				headers: {
					'Accept': 'application/json'
				}
			});

			if (response.ok) {
				newsletterState = 'success';
				newsletterMessage = "You're in! Watch your inbox for a welcome note.";
				form.reset();

				// Track successful newsletter signup
				trackNewsletterSignup(email);

				// Reset state after 5 seconds
				setTimeout(() => {
					newsletterState = 'idle';
					newsletterMessage = '';
				}, 5000);
			} else {
				throw new Error('Subscription failed');
			}
		} catch (error) {
			newsletterState = 'error';
			newsletterMessage = 'Sorry, something went wrong. Please try again.';

			// Reset error state after 5 seconds
			setTimeout(() => {
				newsletterState = 'idle';
				newsletterMessage = '';
			}, 5000);
		}
	}

	// Featured books (first 3)
	const featuredBooks = books.slice(0, 3);

function handleContentNotesClick(e: Event) {
	e.preventDefault();

	// Track content notes access
	trackContentNotesView();

	// Scroll to content notes section
	const notesSection = document.getElementById('notes');
	if (notesSection) {
		notesSection.scrollIntoView({ behavior: 'smooth' });

		// Add highlight effect
		notesSection.classList.add('highlight');
		setTimeout(() => {
			notesSection.classList.remove('highlight');
		}, 2000);
	}

	// Show toast notification
	showToast.info('📋 Content notes section highlighted above. All works include clear content warnings and prioritize consent.', 6000);
}

function handleExternalLinkClick(url: string, label: string) {
	trackExternalLink(url, label);
}
</script>

<svelte:head>
	<title>Ἔρως — Fantasy, Action & Adult Shorts</title>
	<meta
		name="description"
		content="Ἔρως is a single-author imprint for fast-paced fantasy novels and adult short stories—monsters, magic, mayhem, and unapologetic heat."
	/>
	{#if import.meta.env.MODE === 'development'}
		<meta name="robots" content="noindex,nofollow" />
	{/if}
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>
<div class="watercolor-bg" aria-hidden="true"></div>

<header class="site-header">
	<div class="container">
		<div class="logo">
			<img
				src="https://firebasestorage.googleapis.com/v0/b/endless-fire-467204-n2.firebasestorage.app/o/Eros%2FFluent%20Eros%20in%20Watercolor%20Harmony.png?alt=media&token=b0dd3ca7-365e-4862-bc6f-679ef9f91cad"
				alt="Ἔρως — Watercolor script logo"
				width="300"
				height="120"
				loading="eager"
				decoding="async"
			/>
		</div>
		<p class="tagline">FANTASY • ACTION • HEAT</p>
		<nav aria-label="Primary">
			<ul class="nav">
				<li><a href="#about">About</a></li>
				<li><a href="#find">What You'll Find</a></li>
				<li><a href="/catalog">Catalog</a></li>
				<li><a href="#notes">Content Notes</a></li>
				<li><a href="#join">Newsletter</a></li>
				<li><a href="#contact">Follow</a></li>
			</ul>
		</nav>
	</div>
</header>

<main id="main">
	<section id="home" class="hero">
		<div class="container">
			<div class="hero-content">
				<h1>Fantasy with Fire</h1>
				<p>
					Action-forward worlds. Bold stakes. Romances that burn hot. Plus naughtier shorts for
					grown readers. One page, everything you need.
				</p>
				<a class="cta-button" href="/catalog">Explore the Work</a>
			</div>
		</div>
	</section>

	<div class="divider" aria-hidden="true"></div>

	<section id="about" class="about">
		<div class="container about-grid">
			<div class="about-visual" aria-hidden="true">
				<div class="artistic-element">
					<div class="watercolor-circle"></div>
					<div class="logo-script">Eros</div>
				</div>
			</div>
			<div class="about-text">
				<h2>The Ethos</h2>
				<p>
					<strong>Ἔρως</strong> is a pen-name for stories that go hard: monsters, magic,
					mayhem—and relationships that actually matter. Expect brisk pacing, character agency, and
					heat where it counts.
				</p>
				<p>
					Influences in spirit: Logan Jacobs, Eric Vall. Same lane, my flavor: combat-ready worlds,
					banter, chemistry, consequences.
				</p>
				<p><a href="/about" class="text-link">Read more about the author →</a></p>
			</div>
		</div>
	</section>

	<div class="divider" aria-hidden="true"></div>

	<section id="find" class="find">
		<div class="container">
			<h2>What You'll Find</h2>
			<ul class="pill-list">
				<li>Fantasy novels packed with action and bold stakes</li>
				<li>Worlds full of monsters, magic, and mayhem</li>
				<li>Romance that burns hot and pushes limits</li>
				<li>Short stories—fast, tight, addictive</li>
				<li>Naughtier shorts for adult readers only</li>
				<li>Influences in spirit: Logan Jacobs, Eric Vall</li>
			</ul>
			<p class="note">
				Expect fantasy, fire, and unapologetic spice. Always consensual. Always character-driven.
			</p>
		</div>
	</section>

	<div class="divider" aria-hidden="true"></div>

	<section id="featured" class="books">
		<div class="container">
			<h2>Featured</h2>
			<div class="book-grid">
				{#each featuredBooks as book}
					<BookCard {book} />
				{/each}
			</div>
			<p class="note">
				<a href="/catalog" class="text-link">View complete catalog →</a>
				<br />
				For early reads and drops, join the newsletter below.
			</p>
		</div>
	</section>

	<div class="divider" aria-hidden="true"></div>

	<section id="notes" class="notes">
		<div class="container">
			<h2>Content Notes &amp; Boundaries</h2>
			<ul class="notes-list">
				<li>Adults only. Explicit content in select works.</li>
				<li>Consent is explicit; no sexual violence, no minors—ever.</li>
				<li>Fantasy violence and grit where the story demands it.</li>
				<li>Romance arcs honor choice, aftermath, and respect.</li>
			</ul>
		</div>
	</section>

	<div class="divider" aria-hidden="true"></div>

	<section id="join" class="newsletter">
		<div class="container">
			<h2>Join the Circle</h2>
			<p>
				Get exclusive shorts, early chapters, and behind-the-scenes notes—just a few drops a month.
			</p>

			<form
				class="newsletter-form"
				name="eros-newsletter"
				method="post"
				onsubmit={handleNewsletterSubmit}
			>
				<label class="sr-only" for="email">Email address</label>
				<input
					id="email"
					name="email"
					type="email"
					placeholder="Your email address"
					required
					disabled={newsletterState === 'loading'}
					class:error={newsletterState === 'error'}
				/>
				<button
					type="submit"
					disabled={newsletterState === 'loading'}
					class:loading={newsletterState === 'loading'}
					class:success={newsletterState === 'success'}
				>
					{#if newsletterState === 'loading'}
						<i class="fas fa-spinner fa-spin" aria-hidden="true"></i>
						Subscribing...
					{:else if newsletterState === 'success'}
						<i class="fas fa-check" aria-hidden="true"></i>
						Subscribed!
					{:else}
						Subscribe
					{/if}
				</button>
			</form>

			{#if newsletterMessage}
				<div
					role="status"
					aria-live="polite"
					class="newsletter-status"
					class:success={newsletterState === 'success'}
					class:error={newsletterState === 'error'}
					class:loading={newsletterState === 'loading'}
				>
					{newsletterMessage}
				</div>
			{/if}
			<small class="privacy">Zero spam. Unsubscribe anytime.</small>
		</div>
	</section>

	<div class="divider" aria-hidden="true"></div>

	<section id="contact" class="contact">
		<div class="container">
			<h2>Follow &amp; Say Hello</h2>
			<div class="social-links">
				<a href="https://www.patreon.com/posts/welcome-to-140690076?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link" aria-label="Patreon" rel="noopener noreferrer" onclick={() => handleExternalLinkClick('patreon', 'Patreon')}>
					<i class="fab fa-patreon" aria-hidden="true"></i> Patreon
				</a>
				<a href="/instagram" aria-label="Instagram" rel="noopener noreferrer" onclick={() => handleExternalLinkClick('/instagram', 'Instagram')}>
					<i class="fab fa-instagram" aria-hidden="true"></i> Instagram
				</a>
				<a href="/x" aria-label="X / Twitter" rel="noopener noreferrer" onclick={() => handleExternalLinkClick('/x', 'X/Twitter')}>
					<i class="fab fa-x-twitter" aria-hidden="true"></i> X
				</a>
				<a href="/goodreads" aria-label="Goodreads" rel="noopener noreferrer" onclick={() => handleExternalLinkClick('/goodreads', 'Goodreads')}>
					<i class="fab fa-goodreads" aria-hidden="true"></i> Goodreads
				</a>
				<a href="mailto:authoreros@gmail.com" aria-label="Email">
					<i class="fas fa-envelope" aria-hidden="true"></i> Email
				</a>
			</div>
		</div>
	</section>
</main>

<footer class="site-footer">
	<div class="container">
		<p class="copyright">© {new Date().getFullYear()} Ἔρως. All rights reserved.</p>
		<p class="legal-line">
			Adult content. 18+ only. All characters depicted are 18+. Consent-forward.
			<a href="#notes" onclick={handleContentNotesClick}>Content notes</a>.
		</p>
	</div>
</footer>

{#if !ageOk}
	<AgeGate
		onConfirm={confirmAge}
		onReject={() => {
			if (browser) window.location.href = 'https://www.google.com';
		}}
	/>
{/if}