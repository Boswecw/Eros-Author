import type { RequestHandler } from './$types';
import { dev } from '$app/environment';

export const GET: RequestHandler = async ({ url }) => {
	// Use the current request URL to determine the base URL
	const baseUrl = `${url.protocol}//${url.host}`;

	const robots = dev
		? `User-agent: *
Disallow: /

Sitemap: ${baseUrl}/sitemap.xml`
		: `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Block access to private areas
Disallow: /.svelte-kit/
Disallow: /admin/
Disallow: /api/private/`;

	return new Response(robots, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=86400' // Cache for 24 hours
		}
	});
};
