import { Metadata } from 'next';
import Image from 'next/image';
import { t } from '@/lib/translations';

export const metadata: Metadata = {
  title: 'Despre',
  description: 'Află mai multe despre Recipe Master și pasiunea noastră pentru a împărtăși rețete delicioase.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-orange-50">
            {t('aboutSubtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('ourStory')}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t('aboutStoryP1')}
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            {t('aboutStoryP2')}
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">{t('whatWeOffer')}</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-orange-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">{t('testedRecipes')}</h3>
              </div>
              <p className="text-gray-700">
                {t('testedRecipesDesc')}
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-orange-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">{t('quickEasy')}</h3>
              </div>
              <p className="text-gray-700">
                {t('quickEasyDesc')}
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-orange-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">{t('variety')}</h3>
              </div>
              <p className="text-gray-700">
                {t('varietyDesc')}
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-orange-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">{t('community')}</h3>
              </div>
              <p className="text-gray-700">
                {t('communityDesc')}
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">{t('ourMission')}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t('aboutMissionP1')}
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">{t('getInTouch')}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t('aboutContactP1')}
          </p>

          <div className="bg-gray-50 p-8 rounded-lg mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('stayConnected')}</h3>
            <p className="text-gray-700 mb-6">
              {t('stayConnectedDesc')}
            </p>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder={t('yourEmail')}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-r-lg hover:bg-orange-700 transition-colors">
                {t('subscribe')}
              </button>
            </div>
          </div>

          <div className="text-center mt-12 pt-12 border-t border-gray-200">
            <p className="text-gray-600 text-lg">
              {t('thankYou')}
            </p>
            <p className="text-gray-600 mt-2">
              {t('happyCooking')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
