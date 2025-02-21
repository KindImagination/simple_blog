# Simple Blog

A modern blog platform built with Nuxt.js 3, Prisma, and Tailwind CSS.

## Tech Stack

- Frontend: Nuxt.js 3
- Database ORM: Prisma
- Styling: Tailwind CSS
- Database: PostgreSQL

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL
- pnpm (recommended)

## Quick Start

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Copy `.env.example` to `.env`
4. Start dev server with `pnpm dev`

## Documentation

- [Project Rules](PROJECT_RULES.md)
- [Roadmap](ROADMAP.md)

## License

MIT

## Features & Layout

### Public Pages

1. Home Page (`/`)
   - Latest blog posts grid
   - Featured posts carousel
   - Categories navigation
   - Search bar
   - Responsive layout

2. Blog Post Page (`/post/[id]`)
   - Rich text content
   - Author information
   - Publication date
   - Categories and tags
   - Comments section
   - Share buttons
   - Related posts

3. Category Page (`/category/[slug]`)
   - Posts filtered by category
   - Category description
   - Pagination

4. Author Page (`/author/[id]`)
   - Author profile
   - Author's posts
   - Social links

### User Features

1. Authentication
   - Email/Password login
   - Social auth (Google, GitHub)
   - Password recovery
   - Email verification

2. User Dashboard (`/dashboard`)
   - Post management
   - Profile settings
   - Statistics
   - Drafts
   - Comments management

3. Post Editor (`/dashboard/post/[id]`)
   - Rich text editor (TipTap)
   - Image upload with preview
   - Category and tag selection
   - Draft auto-save
   - SEO settings
   - Publication scheduling

### Admin Features

1. Admin Dashboard (`/admin`)
   - User management
   - Content moderation
   - Site statistics
   - System settings

2. Category Management
   - Create/Edit categories
   - Category hierarchy
   - Category permissions

3. Analytics
   - View counts
   - User engagement
   - Popular content
   - Search analytics

### Additional Features

- Dark/Light theme
- Mobile-first design
- SEO optimization
- RSS feed
- Newsletter integration
- Social media sharing
- Reading time estimation
- Code syntax highlighting
- Image optimization
- Lazy loading

