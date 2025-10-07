import { books } from '$lib/data/books';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	// Use the current request URL to determine the base URL
	const baseUrl = `${url.protocol}//${url.host}`;
	
	// Static pages
	const staticPages = [
		{
			url: '',
			lastmod: new Date().toISOString(),
			changefreq: 'weekly',
			priority: '1.0'
		},
		{
			url: '/about',
			lastmod: new Date().toISOString(),
			changefreq: 'monthly',
			priority: '0.8'
		},
		{
			url: '/catalog',
			lastmod: new Date().toISOString(),
			changefreq: 'weekly',
			priority: '0.9'
		}
	];

	// Dynamic book pages (if you have individual book pages)
	const bookPages = books.map(book => ({
		url: `/catalog#${book.id}`,
		lastmod: new Date().toISOString(),
		changefreq: 'monthly',
		priority: '0.7'
	}));

	// Combine all pages
	const allPages = [...staticPages, ...bookPages];

	// Generate sitemap XML
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		page => `	<url>
		<loc>${baseUrl}${page.url}</loc>
		<lastmod>${page.lastmod}</lastmod>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600' // Cache for 1 hour
		}
	});
};
