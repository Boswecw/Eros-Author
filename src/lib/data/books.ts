// src/lib/data/books.ts
export interface Book {
	id: string;
	title: string;
	subtitle?: string;
	description: string;
	longDescription?: string;
	coverGradient: string;
	coverImage?: string;
	status: 'available' | 'coming-soon' | 'draft';
	genre: string[];
	contentWarnings: string[];
	pageCount?: number;
	releaseDate?: string;
	price?: number;
	links?: {
		amazon?: string;
		kobo?: string;
		apple?: string;
		sample?: string;
	};
}

export const books: Book[] = [
	{
		id: 'crimson-whispers',
		title: 'Crimson Whispers',
		subtitle: 'Dark Tales of Desire',
		description:
			'A slate of dark-edge shorts: blades, bargains, and bedroom politics. Fast, sharp, adult.',
		longDescription: `A collection of interconnected short stories set in a world where magic has a price, and desire is currency. Each tale explores the boundaries between power and passion, featuring morally complex characters who navigate treacherous courts, dangerous bargains, and relationships that could reshape kingdoms.

Features seven complete stories, each 15-20k words, that can be read standalone or as a continuous narrative arc.`,
		coverGradient: 'linear-gradient(135deg, #682E44, #2B2B2B)',
		status: 'available',
		genre: ['Dark Fantasy', 'Romance', 'Short Stories'],
		contentWarnings: [
			'Explicit sexual content',
			'Violence and combat',
			'Morally grey characters',
			'Political intrigue'
		],
		pageCount: 280,
		releaseDate: 'Available Now',
		price: 2.99,
		links: {
			amazon: '#'
		}
	},
	{
		id: 'sloppy-jo',
		title: 'Sloppy Jo',
		description: 'A messy, satisfying tale of appetite and desire served hot.',
		longDescription: `Sometimes the best things in life are a little messy. Jo's diner serves more than just comfort food—it's where appetites of all kinds get satisfied. When the new pitcher for the local baseball team walks through her door, Jo discovers that some hungers are worth the mess.

A steamy contemporary romance that explores the delicious intersection of food, passion, and small-town secrets. From the crack of the bat to the sizzle of the grill, this is a story about taking what you want and savoring every bite.

Perfect for readers who like their romance with extra sauce and a side of heat.`,
		coverGradient: 'linear-gradient(135deg, #D2691E, #8B4513)',
		coverImage: 'https://firebasestorage.googleapis.com/v0/b/endless-fire-467204-n2.firebasestorage.app/o/Eros%2FSloppy%20Jo%20Book%20Cover.png?alt=media&token=ee6b8582-9d5f-41af-bbd2-a57b9c2408ce',
		status: 'coming-soon',
		genre: ['Contemporary Romance', 'Small Town', 'Sports Romance'],
		contentWarnings: [
			'Explicit sexual content',
			'Food play',
			'Small town dynamics',
			'Athletic themes'
		],
		pageCount: 180,
		releaseDate: 'Coming Soon',
		price: 2.99,
		links: {
			amazon: '#'
		}
	},
	{
		id: 'high-card-stud-pokes-her',
		title: 'High Card Stud Pokes Her',
		description: 'High stakes. Hotter nights. One bet that changes everything.',
		longDescription: `Vegas was supposed to be simple: cards, bourbon, and Amy by Toni's side. But at the high-stakes tables, the games don't end when the chips are gone. A mysterious redhead, her powerful husband, and the glittering lure of the Strip turn chance into seduction and wagers into desire.

What begins as a gamble becomes a spiral of jealousy, temptation, and erotic indulgence. From the neon glow of the casino floor to the steam of a luxury suite, Toni is forced to play a hand where the stakes aren't just money—they're love, loyalty, and control.

High Card Stud Pokes Her is a decadent erotic novella of Vegas temptation, MMF indulgence, and the cruelest wager of all: losing the one you love.`,
		coverGradient: 'linear-gradient(135deg, #C04C2B, #9E1A1A)',
		coverImage: 'https://firebasestorage.googleapis.com/v0/b/endless-fire-467204-n2.firebasestorage.app/o/Eros%2FBook_Cover.png?alt=media&token=43df0d98-5cfc-4c5d-a15e-8d9dcc358ba9',
        status: 'available',
		genre: ['Erotic Fiction', 'Contemporary', 'Novella'],
		contentWarnings: [
			'Explicit sexual content',
			'MMF threesome',
			'Jealousy and emotional tension',
			'Power dynamics',
			'Gambling themes'
		],
		pageCount: 120,
		releaseDate: 'Available Now',
		price: 2.99,
		links: {
			amazon: '#'
		}
	},
	{
		id: 'velvet-nights',
		title: 'Velvet Nights',
		subtitle: 'A Magic & Passion Trilogy',
		description:
			'Three linked tales where magic and desire collide—and choices carry heat and fallout.',
		longDescription: `In a city where magic flows through pleasure and power intertwines with passion, three connected stories explore how desire shapes destiny.

Book 1: The Courtesan's Grimoire - A pleasure worker discovers she can steal magic through intimacy
Book 2: The Archmage's Surrender - A powerful mage must choose between control and connection
Book 3: The Binding - When their paths converge, the city's fate hangs in the balance

Each book stands alone but together forms an epic tale of transformation, power, and love that defies convention.`,
		coverGradient: 'linear-gradient(135deg, #9E1A1A, #682E44)',
		status: 'coming-soon',
		genre: ['Fantasy Romance', 'Urban Fantasy', 'Trilogy'],
		contentWarnings: [
			'Explicit sexual content',
			'Sex work (depicted positively)',
			'Power dynamics',
			'Magic system involving intimacy'
		],
		releaseDate: '2026-Q1'
	},
	{
		id: 'sacred-flames',
		title: 'Sacred Flames',
		subtitle: 'The Redemption Saga',
		description:
			'A high-fantasy arc of loyalty, wrath, and redemption—with romance that actually changes the stakes.',
		longDescription: `When a holy warrior loses everything to betrayal, she must forge an unlikely alliance with the demon prince she's sworn to destroy. Together, they'll unravel a conspiracy that threatens both their worlds.

This epic fantasy series combines intense action, complex politics, and a slow-burn romance between enemies who must become allies. Features a diverse cast, found family dynamics, and a romance where consent and choice matter as much as destiny.

Book 1: Oathbreaker (Available)
Book 2: Flamekeepers (Coming 2026)
Book 3: Ascension (TBA)`,
		coverGradient: 'linear-gradient(135deg, #C04C2B, #9E1A1A)',
		status: 'draft',
		genre: ['Epic Fantasy', 'Romance', 'Series'],
		contentWarnings: [
			'Violence and warfare',
			'Religious themes and crisis of faith',
			'Explicit sexual content',
			'Found family'
		],
		pageCount: 450,
		releaseDate: '2026-Q2'
	}
];

export function getBookById(id: string): Book | undefined {
	return books.find((book) => book.id === id);
}

export function getAvailableBooks(): Book[] {
	return books.filter((book) => book.status === 'available');
}

export function getComingSoonBooks(): Book[] {
	return books.filter((book) => book.status === 'coming-soon');
}