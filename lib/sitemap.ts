import { getAllRecipes, getAllCategories } from './recipes';

interface SitemapPage {
  url: string;
  lastmod?: string;
  priority: string;
  changefreq: string;
}

/**
 * Generate sitemap XML for SEO
 * Call this function to generate a sitemap
 */
export function generateSitemap(baseUrl: string = 'https://recipe-master.vercel.app'): string {
  const recipes = getAllRecipes();
  const categories = getAllCategories();
  
  const staticPages: SitemapPage[] = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
  ];

  const recipePages: SitemapPage[] = recipes.map((recipe) => ({
    url: `/recipes/${recipe.slug}`,
    lastmod: recipe.date,
    priority: '0.9',
    changefreq: 'monthly',
  }));

  const categoryPages: SitemapPage[] = categories.map((category) => ({
    url: `/categories/${category.toLowerCase()}`,
    priority: '0.7',
    changefreq: 'weekly',
  }));

  const allPages = [...staticPages, ...recipePages, ...categoryPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${new Date(page.lastmod).toISOString()}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
}
