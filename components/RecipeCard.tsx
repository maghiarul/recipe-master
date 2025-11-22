import Link from 'next/link';
import Image from 'next/image';
import { RecipeMetadata } from '@/lib/types';
import { format } from 'date-fns';
import { ro } from 'date-fns/locale';

interface RecipeCardProps {
  recipe: RecipeMetadata;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.slug}`} prefetch={false} className="group">
      <article className="overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/30">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
          {recipe.image ? (
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600">
              <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute left-3 top-3">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-800 shadow-sm backdrop-blur-sm transition-colors group-hover:bg-white">
              {recipe.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 p-5">
          <h2 className="line-clamp-2 text-lg font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-orange-600">
            {recipe.title}
          </h2>

          <p className="line-clamp-2 text-sm leading-relaxed text-zinc-600">
            {recipe.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between border-t border-zinc-100 pt-4 text-xs font-medium text-zinc-500">
            <div className="flex items-center gap-4">
              {recipe.prepTime && (
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {recipe.prepTime}
                </div>
              )}
              {recipe.servings && (
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {recipe.servings}
                </div>
              )}
            </div>

            <time className="text-[10px] uppercase tracking-wider text-zinc-400" dateTime={recipe.date}>
              {format(new Date(recipe.date), 'd MMMM yyyy', { locale: ro })}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
}
