# Ἔρως Author Website

A modern, performant author website built with SvelteKit for showcasing fantasy novels and adult short stories. Features a watercolor-inspired design, age verification, dynamic content management, and optimized for SEO.

![Ἔρως Logo](https://firebasestorage.googleapis.com/v0/b/endless-fire-467204-n2.firebasestorage.app/o/Eros%2FFluent%20Eros%20in%20Watercolor%20Harmony.png?alt=media&token=b0dd3ca7-365e-4862-bc6f-679ef9f91cad)

## 🌟 Features

- **Modern Tech Stack**: Built with SvelteKit 2, Svelte 5, and Vite 7
- **Responsive Design**: Tailwind CSS 4 with custom watercolor aesthetics
- **Age Verification**: LocalStorage-based age gate for adult content
- **Dynamic Catalog**: Flexible book management system with status tracking
- **SEO Optimized**: Dynamic sitemap, robots.txt, and meta tags
- **Analytics Ready**: Built-in analytics endpoint for privacy-friendly tracking
- **Static Site Generation**: Pre-rendered pages for optimal performance
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Content Warnings**: Clear labeling for adult content and themes

## 🚀 Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) 2.x
- **UI Library**: [Svelte](https://svelte.dev/) 5.x (with runes)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4.x
- **Build Tool**: [Vite](https://vitejs.dev/) 7.x
- **Type Safety**: TypeScript 5.x
- **Deployment**: Netlify (auto-detected with adapter-auto)
- **Code Quality**: ESLint + Prettier
- **Fonts**: Google Fonts (Great Vibes, Lora, Montserrat)
- **Icons**: Font Awesome 6.x

## 📦 Installation

### Prerequisites

- Node.js 22.x or higher
- npm, pnpm, or yarn

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd eros-site

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost:5173
```

## 🛠️ Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type checking
npm run check
npm run check:watch

# Linting
npm run lint

# Code formatting
npm run format
```

### Project Structure

```
eros-site/
├── src/
│   ├── lib/
│   │   ├── assets/          # Static assets (favicon, images)
│   │   ├── components/      # Reusable Svelte components
│   │   │   ├── AgeGate.svelte
│   │   │   ├── BookCard.svelte
│   │   │   ├── FeatureBookHero.svelte
│   │   │   └── ToastContainer.svelte
│   │   ├── data/            # Content data
│   │   │   └── books.ts     # Book catalog data
│   │   ├── stores/          # Svelte stores
│   │   │   └── ageVerification.ts
│   │   └── index.ts
│   ├── routes/
│   │   ├── api/
│   │   │   └── analytics/   # Analytics endpoint
│   │   ├── about/           # About page
│   │   ├── catalog/         # Book catalog
│   │   ├── robots.txt/      # Dynamic robots.txt
│   │   ├── sitemap.xml/     # Dynamic sitemap
│   │   ├── +layout.svelte   # Root layout with age gate
│   │   ├── +page.svelte     # Homepage
│   │   └── +error.svelte    # Error page
│   ├── app.css              # Global styles
│   └── app.html             # HTML template
├── static/
│   └── robots.txt           # Static fallback robots.txt
├── netlify.toml             # Netlify configuration
├── svelte.config.js         # SvelteKit configuration
├── tailwind.config.js       # Tailwind configuration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## 📚 Content Management

### Adding/Editing Books

Books are managed in `src/lib/data/books.ts`. Each book follows this structure:

```typescript
{
  id: 'unique-slug',
  title: 'Book Title',
  subtitle: 'Optional Subtitle',
  description: 'Short description',
  longDescription: 'Detailed description with paragraphs',
  genre: ['Fantasy', 'Romance'],
  status: 'available' | 'coming-soon' | 'draft',
  contentWarnings: ['Violence', 'Explicit content'],
  coverImage: 'https://...' || null,
  coverGradient: 'linear-gradient(...)',
  pageCount: 350,
  releaseDate: '2025-01-15',
  price: 4.99,
  links: {
    amazon: 'https://...',
    kobo: 'https://...',
    apple: 'https://...',
    sample: 'https://...'
  }
}
```

### Brand Styling

Brand colors are defined as CSS variables in `src/app.css`:

```css
--crimson: #9E1A1A
--wine-plum: #682E44
--burnt-orange: #C04C2B
--blush-pink: #F29CA3
--cream: #F6F1E7
--charcoal: #2B2B2B
```

## 🌐 Deployment

### Netlify Deployment (Recommended)

The site is optimized for Netlify deployment with automatic detection via `adapter-auto`.

#### Option 1: Deploy via Netlify UI

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Netlify will auto-detect the build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy site"

#### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

#### Configuration

The `netlify.toml` file includes:
- Build settings
- Redirects for SvelteKit routing
- Security headers
- Asset caching rules
- Adult content headers

### Post-Deployment Checklist

- [ ] Update domain URLs in `sitemap.xml` and `robots.txt`
- [ ] Set up custom domain in Netlify
- [ ] Verify SSL certificate is active
- [ ] Test age verification flow
- [ ] Check all external links (Firebase Storage, social media)
- [ ] Test newsletter form submission
- [ ] Verify analytics tracking
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Submit sitemap to Google Search Console

## 🔐 Environment Variables

Create a `.env` file for local development:

```env
# Site Configuration
PUBLIC_SITE_URL=http://localhost:5173

# Analytics (optional)
PUBLIC_GA_ID=your-ga-id

# External URLs
PUBLIC_PATREON_URL=https://...
PUBLIC_INSTAGRAM_URL=https://...
```

For production, set these in Netlify's environment variables dashboard.

## 🎨 Design System

### Typography

- **Display/Logo**: Great Vibes (script)
- **Headings**: Lora (serif)
- **Body**: Lora (serif)
- **UI Elements**: Montserrat (sans-serif)

### Color Palette

Based on watercolor aesthetics with rich, romantic tones:

- **Primary**: Crimson Red (#9E1A1A)
- **Secondary**: Wine Plum (#682E44)
- **Accent**: Burnt Orange (#C04C2B)
- **Highlight**: Blush Pink (#F29CA3)
- **Background**: Cream Paper (#F6F1E7)
- **Text**: Charcoal Black (#2B2B2B)

### Components

- **AgeGate**: Modal for 18+ verification with localStorage persistence
- **BookCard**: Catalog card with status badges and hover effects
- **FeatureBookHero**: Homepage hero for featured book
- **ToastContainer**: Notification system for user feedback

## 🔍 SEO Features

- **Dynamic Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Environment-aware crawler directives
- **Meta Tags**: Open Graph and Twitter Card support
- **Structured Data**: Ready for JSON-LD implementation
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Fast Page Load**: Pre-rendering and optimized assets

## 📊 Analytics

The site includes a privacy-friendly analytics endpoint at `/api/analytics`.

Current implementation logs events to console. To integrate with a service:

```typescript
// src/routes/api/analytics/+server.ts
// Replace console.log with your analytics service
// Options: Plausible, Simple Analytics, Fathom, Google Analytics
```

## 🧪 Testing

```bash
# Type checking
npm run check

# Linting
npm run lint

# Build test
npm run build
npm run preview
```

### Manual Testing Checklist

- [ ] Age gate appears on first visit
- [ ] Age gate remembers user choice
- [ ] All navigation links work
- [ ] Book catalog displays correctly
- [ ] External links open in new tabs
- [ ] Forms validate properly
- [ ] Responsive design works on mobile
- [ ] Newsletter subscription works
- [ ] Social media links are correct

## 🐛 Troubleshooting

### Build Errors

**Issue**: Type errors during build
```bash
# Solution: Run type check
npm run check
```

**Issue**: Tailwind classes not working
```bash
# Solution: Restart dev server
npm run dev
```

### Age Gate Issues

**Issue**: Age gate appears on every visit
```bash
# Solution: Check browser localStorage
# In browser console:
localStorage.getItem('eros_age_ok')
```

### Deployment Issues

**Issue**: 404 errors on Netlify
```bash
# Solution: Check netlify.toml redirects
# Ensure publish directory is 'build'
```

## 📝 Content Guidelines

### Book Listings

- Include clear content warnings
- Use professional cover images (2:3 aspect ratio)
- Write compelling descriptions (150-300 words)
- Add genre tags for discoverability
- Include page count and pricing

### Writing Style

- **Tone**: Poetic, sensual, confident
- **Voice**: Intimate but not crude, inclusive and modern
- **Themes**: Agency, consent, character-driven heat
- **Audience**: Adult readers (18+) who appreciate literary fantasy

## 🤝 Contributing

This is a private author website. For collaborators:

1. Create a feature branch
2. Make your changes
3. Test thoroughly (build + preview)
4. Submit a pull request with clear description
5. Update this README if adding features

### Code Style

- Use TypeScript for type safety
- Follow ESLint/Prettier rules (`npm run lint`)
- Write semantic, accessible HTML
- Keep components focused and reusable
- Comment complex logic

## 📄 License

All content © 2025 Ἔρως. All rights reserved.

Code is proprietary. Please do not distribute without permission.

## 🔗 Links

- **Live Site**: https://yoursite.com
- **Documentation**: This README
- **Patreon**: https://www.patreon.com/...
- **Contact**: authoreros@gmail.com

## 🎯 Roadmap

### Phase 1: Launch (Current)
- [x] Basic site structure
- [x] Book catalog
- [x] Age verification
- [x] SEO optimization
- [x] Netlify deployment

### Phase 2: Enhancement
- [ ] Newsletter integration (Netlify Forms)
- [ ] Individual book pages
- [ ] Blog/updates section
- [ ] Search functionality
- [ ] Dark mode toggle

### Phase 3: Advanced
- [ ] Reader dashboard (login)
- [ ] Sample chapter reader
- [ ] Pre-order system
- [ ] Advanced analytics
- [ ] Multi-language support

## 💡 Tips for Maintenance

### Regular Updates

```bash
# Update dependencies monthly
npm outdated
npm update

# Check for security issues
npm audit
npm audit fix
```

### Content Updates

1. Edit `src/lib/data/books.ts` for catalog changes
2. Update `src/routes/about/+page.svelte` for bio changes
3. Modify `src/app.css` for style adjustments
4. Test locally before deploying

### Performance Monitoring

- Run Lighthouse audits quarterly
- Monitor Core Web Vitals
- Check page load times
- Review analytics data

---

**Built with ❤️ and ☕ for fantasy readers who appreciate character agency and consensual heat.**