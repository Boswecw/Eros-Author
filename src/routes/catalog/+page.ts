import { books } from '$lib/data/books';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	// Pre-load all book data for static generation
	return {
		books,
		// Add metadata for SEO
		meta: {
			title: 'Book Catalog - Ἔρως',
			description: 'Explore the complete collection of fantasy novels and adult short stories by Ἔρως. Dark fantasy, romance, and action-packed adventures.',
			keywords: 'fantasy books, adult fiction, romance novels, dark fantasy, short stories, eros books'
		}
	};
};

// Enable static site generation for this page
export const prerender = true;
