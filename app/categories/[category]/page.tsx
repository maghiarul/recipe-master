import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllCategories, getRecipesByCategory } from '@/lib/recipes';
import RecipeCard from '@/components/RecipeCard';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';
import { t } from '@/lib/translations';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/ /g, '-'),
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryName = category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${categoryName} Recipes`,
    description: `Discover delicious ${categoryName.toLowerCase()} recipes. Browse our collection of tested and approved recipes.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const recipes = getRecipesByCategory(category);
  
  if (recipes.length === 0) {
    notFound();
  }

  // Helper to get translated category name
  const getCategoryName = (slug: string) => {
    const camelCase = slug.toLowerCase().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    const translated = t(camelCase);
    // If translation is same as key (meaning missing), fallback to title case
    if (translated === camelCase) {
       return slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    return translated;
  };

  const categoryName = getCategoryName(category);
  const allCategories = getAllCategories();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm mb-4 text-orange-100">
            <Link href="/" prefetch={false} className="hover:text-white">
              {t('home')}
            </Link>
            <svg className="w-4 h-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{t('categories')}</span>
            <svg className="w-4 h-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{categoryName}</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('recipes')} {categoryName}
          </h1>
          <p className="text-xl text-orange-50">
            {t('recipesInCategory', 'ro', { count: recipes.length, category: categoryName })}
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            <span className="text-gray-600 font-medium mr-2 whitespace-nowrap">{t('categories')}:</span>
            {allCategories.map((cat) => (
              <Link
                key={cat}
                href={`/categories/${cat.toLowerCase().replace(/ /g, '-')}`}
                prefetch={false}
                className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                  cat.toLowerCase() === category.toLowerCase()
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {getCategoryName(cat.toLowerCase())}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Placeholder - Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <AdPlaceholder size="medium" />
      </div>

      {/* Recipe Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* Ad Placeholder - Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <AdPlaceholder size="large" />
      </div>

      {/* Browse More */}
      <section className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('lookingForMore')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('browseComplete')}
          </p>
          <Link
            href="/"
            prefetch={false}
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            {t('viewAllRecipes')}
          </Link>
        </div>
      </section>
    </div>
  );
}
