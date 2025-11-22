import Link from 'next/link';
import { t } from '@/lib/translations';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/60 bg-white/60 text-zinc-600 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-tight text-zinc-900">{t('siteTitle')}</h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              {t('footerAbout')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-tight text-zinc-900">{t('quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" prefetch={false} className="text-zinc-600 transition-colors hover:text-orange-600">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/about" prefetch={false} className="text-zinc-600 transition-colors hover:text-orange-600">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/categories/main-course" prefetch={false} className="text-zinc-600 transition-colors hover:text-orange-600">
                  {t('mainCourses')}
                </Link>
              </li>
              <li>
                <Link href="/categories/desserts" prefetch={false} className="text-zinc-600 transition-colors hover:text-orange-600">
                  {t('desserts')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter (Placeholder for future) */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold tracking-tight text-zinc-900">{t('stayUpdated')}</h3>
            <p className="text-sm leading-relaxed text-zinc-600">
              {t('newsletterDesc')}
            </p>
            <div className="flex max-w-xs">
              <input
                type="email"
                placeholder={t('yourEmail')}
                className="flex-1 rounded-l-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              <button className="rounded-r-lg bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-700 hover:shadow-md">
                {t('subscribe')}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200/60 pt-8 text-center text-sm text-zinc-500">
          <p>&copy; {currentYear} {t('siteTitle')}. {t('allRightsReserved')}.</p>
        </div>
      </div>
    </footer>
  );
}
