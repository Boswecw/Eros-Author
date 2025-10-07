import { browser } from '$app/environment';

interface AnalyticsEvent {
	event: string;
	page?: string;
	data?: Record<string, any>;
}

class PrivacyAnalytics {
	private endpoint = '/api/analytics';
	private sessionId: string;
	private enabled = false;

	constructor() {
		if (browser) {
			// Generate a session ID that doesn't persist across browser sessions
			this.sessionId = this.generateSessionId();
			this.enabled = true;
		} else {
			this.sessionId = '';
		}
	}

	private generateSessionId(): string {
		// Simple session ID that resets on each browser session
		return Math.random().toString(36).substring(2) + Date.now().toString(36);
	}

	private async sendEvent(event: AnalyticsEvent) {
		if (!this.enabled || !browser) return;

		try {
			// Use sendBeacon for better reliability, fallback to fetch
			const data = JSON.stringify({
				...event,
				sessionId: this.sessionId,
				timestamp: Date.now(),
				userAgent: navigator.userAgent,
				referrer: document.referrer || 'direct',
				url: window.location.href
			});

			if (navigator.sendBeacon) {
				navigator.sendBeacon(this.endpoint, data);
			} else {
				fetch(this.endpoint, {
					method: 'POST',
					body: data,
					headers: {
						'Content-Type': 'application/json'
					},
					keepalive: true
				}).catch(() => {
					// Silently fail - analytics shouldn't break the site
				});
			}
		} catch (error) {
			// Silently fail - analytics shouldn't break the site
			console.debug('Analytics error:', error);
		}
	}

	// Track page views
	pageView(page: string) {
		this.sendEvent({
			event: 'page_view',
			page
		});
	}

	// Track custom events
	track(event: string, data?: Record<string, any>) {
		this.sendEvent({
			event,
			data
		});
	}

	// Track newsletter signups
	newsletterSignup(email?: string) {
		this.sendEvent({
			event: 'newsletter_signup',
			data: {
				// Don't store the actual email for privacy
				hasEmail: !!email
			}
		});
	}

	// Track book interactions
	bookView(bookId: string) {
		this.sendEvent({
			event: 'book_view',
			data: { bookId }
		});
	}

	// Track external link clicks
	externalLink(url: string, label?: string) {
		this.sendEvent({
			event: 'external_link',
			data: { url, label }
		});
	}

	// Track content notes access
	contentNotesView() {
		this.sendEvent({
			event: 'content_notes_view'
		});
	}
}

// Create singleton instance
export const analytics = new PrivacyAnalytics();

// Convenience functions
export const trackPageView = (page: string) => analytics.pageView(page);
export const trackEvent = (event: string, data?: Record<string, any>) => analytics.track(event, data);
export const trackNewsletterSignup = (email?: string) => analytics.newsletterSignup(email);
export const trackBookView = (bookId: string) => analytics.bookView(bookId);
export const trackExternalLink = (url: string, label?: string) => analytics.externalLink(url, label);
export const trackContentNotesView = () => analytics.contentNotesView();
