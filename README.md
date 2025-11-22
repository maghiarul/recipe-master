# Recipe Master 🍳

A modern, SEO-optimized static recipe blog built with Next.js, TypeScript, and TailwindCSS.

## Features

✨ **Static Site Generation** - Fully static, no server required
📝 **Markdown-based** - All recipes stored as simple Markdown files
🎨 **Beautiful UI** - Clean, responsive design with TailwindCSS
🔍 **SEO Optimized** - Proper meta tags, structured data, and semantic HTML
📱 **Mobile Friendly** - Fully responsive across all devices
🏷️ **Category Filtering** - Easy navigation by recipe category
📄 **Pagination** - Built-in pagination for large recipe collections
💰 **Ad-Ready** - Placeholder sections for Google AdSense
⚡ **Fast Performance** - Optimized for speed and Core Web Vitals
🌍 **Multi-Language** - Romanian (default) and English support
📤 **Social Sharing** - Working share buttons (Facebook, Twitter, WhatsApp, Copy Link)
🖨️ **Print-Friendly** - Print-optimized recipe layout

## Project Structure

```
recipe-master/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Homepage with recipe grid
│   ├── about/               # About page
│   ├── recipes/[slug]/      # Dynamic recipe detail pages
│   └── categories/[category]/ # Category filter pages
├── components/              # Reusable React components
│   ├── Header.tsx          # Site header with navigation
│   ├── Footer.tsx          # Site footer
│   ├── RecipeCard.tsx      # Recipe preview card
│   ├── AdPlaceholder.tsx   # Ad container component
│   └── Pagination.tsx      # Pagination component
├── content/recipes/         # Recipe Markdown files
│   ├── chocolate-chip-cookies.md
│   ├── creamy-tomato-pasta.md
│   └── ...
├── lib/                     # Utility functions
│   ├── types.ts            # TypeScript interfaces
│   └── recipes.ts          # Recipe parsing & data utilities
└── public/                  # Static assets
    └── images/             # Recipe images
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding New Recipes

1. Create a new Markdown file in `content/recipes/`:

```markdown
---
title: Your Recipe Title
slug: your-recipe-slug
date: 2024-11-12T10:00:00.000Z
description: A short description for SEO
category: Main Course
image: /images/your-recipe.jpg
prepTime: 15 minutes
cookTime: 30 minutes
servings: 4
ingredients:
  - 2 cups flour
  - 1 cup sugar
  - 3 eggs
---

## Instructions

### Step 1: Prepare
Your instructions here...

### Step 2: Cook
More instructions...
```

2. Add your recipe image to `public/images/`

3. The recipe will automatically appear on the site!

## Recipe Front Matter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Recipe title |
| `slug` | string | ✅ | URL-friendly identifier |
| `date` | string | ✅ | Publication date (ISO format) |
| `description` | string | ✅ | Short summary for SEO |
| `category` | string | ✅ | Recipe category |
| `ingredients` | array | ✅ | List of ingredients |
| `image` | string | ❌ | Path to recipe image |
| `prepTime` | string | ❌ | Preparation time |
| `cookTime` | string | ❌ | Cooking time |
| `servings` | number | ❌ | Number of servings |

## Building for Production

Build the static site:
```bash
npm run build
```

This creates an `out/` directory with all static files ready for deployment.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

### Other Platforms

The static export in the `out/` directory can be deployed to:
- Netlify
- GitHub Pages
- AWS S3
- Cloudflare Pages
- Any static hosting service

## Adding Google AdSense

1. Get your AdSense account approved
2. Replace `<AdPlaceholder />` components with actual AdSense code

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS 4** - Utility-first styling
- **gray-matter** - Front matter parsing
- **remark** - Markdown processing
- **date-fns** - Date formatting

## License

MIT License - feel free to use this for your own recipe blog!

---

Built with ❤️ using Next.js and TailwindCSS
