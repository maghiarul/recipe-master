'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

interface HeaderClientProps {
  categories: string[];
}

export default function HeaderClient({ categories }: HeaderClientProps) {
  const { language } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/50 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            prefetch={false}
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-zinc-900 transition-colors hover:text-orange-600"
          >
            <Image
              src="/logo.svg"
              alt="Recipe Master Logo"
              width={150}
              height={30}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            prefetch={false}
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-orange-600"
          >
            {t('home', language)}
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-zinc-600 transition-colors hover:text-orange-600">
              {t('categories', language)}
              <svg className="h-4 w-4 text-zinc-400 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl border border-zinc-100 bg-white/95 p-2 text-sm shadow-xl shadow-zinc-200/20 opacity-0 backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
              <div className="max-h-64 overflow-y-auto">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/categories/${category.toLowerCase().replace(/ /g, '-')}`}
                    prefetch={false}
                    className="block rounded-lg px-4 py-2 text-zinc-600 transition-colors hover:bg-orange-50 hover:text-orange-600"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/about"
            prefetch={false}
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-orange-600"
          >
            {t('about', language)}
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <button className="rounded-md p-2 text-zinc-600 hover:bg-zinc-100 hover:text-orange-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
