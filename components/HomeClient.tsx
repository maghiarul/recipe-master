'use client';

import RecipeCard from '@/components/RecipeCard';
import AdPlaceholder from '@/components/AdPlaceholder';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';
import { RecipeMetadata } from '@/lib/types';

interface HomeClientProps {
  recipes: RecipeMetadata[];
  totalRecipes: number;
  categories: string[];
}

export default function HomeClient({ recipes, totalRecipes, categories }: HomeClientProps) {
  const { language } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <div className="space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              Recipe Master
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              {t('heroTitle', language)}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              {t('heroSubtitle', language)}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {categories.slice(0, 6).map((category) => (
                <Link
                  key={category}
                  href={`/categories/${category.toLowerCase().replace(/ /g, '-')}`}
                  prefetch={false}
                  className="rounded-full border border-zinc-200/60 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 hover:shadow-md"
                >
                  {category}
                </Link>
              ))}
              {categories.length > 6 && (
                <Link
                  href={`/categories/${categories[0].toLowerCase().replace(/ /g, '-')}`}
                  prefetch={false}
                  className="rounded-full border border-transparent bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-700 hover:shadow-md"
                >
                  {t('browseByCategory', language)}
                </Link>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200/60 bg-white/90 p-5 shadow-md backdrop-blur-sm">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                {t('weeksPicks', language)}
              </p>
              <div className="space-y-2">
                {recipes.slice(0, 3).map((recipe) => (
                  <Link
                    key={recipe.slug}
                    href={`/recipes/${recipe.slug}`}
                    prefetch={false}
                    className="flex items-start justify-between gap-3 rounded-lg px-3 py-2 transition-all hover:bg-orange-50"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-zinc-900">
                        {recipe.title}
                      </p>
                      <p className="truncate text-xs text-zinc-500">
                        {recipe.description}
                      </p>
                    </div>
                    {recipe.prepTime && (
                      <span className="shrink-0 rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-600">
                        {recipe.prepTime}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
              <p className="text-xs text-zinc-500">
                {t('showingRecipes', language, { count: recipes.length.toString(), total: totalRecipes.toString() })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Placeholder - Top */}
      <div className="mt-6">
        <AdPlaceholder size="medium" />
      </div>

      {/* Recipe Grid Section */}
      <section className="py-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-2">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            {t('latestRecipes', language)}
          </h2>
          <p className="text-sm text-zinc-500">
            {t('showingRecipes', language, { count: recipes.length.toString(), total: totalRecipes.toString() })}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>

        {recipes.length === 0 && (
          <div className="py-10 text-center">
            <p className="text-sm text-zinc-500">{t('noRecipes', language)}</p>
          </div>
        )}

        {/* Show "View All" link if there are more recipes */}
        {totalRecipes > 9 && (
          <div className="mt-8 text-center">
            <p className="mb-3 text-xs text-zinc-500">
              {t('viewMoreRecipes', language, { total: totalRecipes.toString() })}
            </p>
            <Link
              href="/categories/fel-principal"
              prefetch={false}
              className="inline-flex items-center rounded-full bg-orange-600 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-orange-700"
            >
              {t('browseByCategory', language)}
            </Link>
          </div>
        )}
      </section>

      {/* Ad Placeholder - Bottom */}
      <div className="mb-10">
        <AdPlaceholder size="large" />
      </div>

      {/* Call to Action */}
      <section className="mb-8 rounded-2xl border border-zinc-200/60 bg-white shadow-md py-12">
        <div className="mx-auto max-w-md px-4 text-center">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-zinc-900">
            {t('loveCooking', language)}
          </h2>
          <p className="mb-6 text-base leading-relaxed text-zinc-600">
            {t('newsletterPromo', language)}
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder={t('yourEmail', language)}
              className="flex-1 rounded-l-lg border border-zinc-200 px-4 py-3 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
            <button className="rounded-r-lg bg-orange-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-700 hover:shadow-md">
              {t('subscribe', language)}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
