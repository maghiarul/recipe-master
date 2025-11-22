'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { t } from '@/lib/translations';

interface ShareButtonsProps {
  title: string;
  description: string;
  url: string;
}

export default function ShareButtons({ title, description, url }: ShareButtonsProps) {
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const { language } = useLanguage();

  const handleShare = async (platform: string) => {
    const fullUrl = typeof window !== 'undefined' ? window.location.href : url;
    
    switch (platform) {
      case 'native':
        // Try native Web Share API first
        if (navigator.share) {
          try {
            await navigator.share({
              title,
              text: description,
              url: fullUrl,
            });
          } catch (err) {
            console.log('Share cancelled or failed');
          }
        }
        break;
        
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
          '_blank',
          'width=600,height=400'
        );
        break;
        
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`,
          '_blank',
          'width=600,height=400'
        );
        break;
        
      case 'whatsapp':
        window.open(
          `https://wa.me/?text=${encodeURIComponent(title + ' - ' + fullUrl)}`,
          '_blank'
        );
        break;
        
      case 'copy':
        try {
          await navigator.clipboard.writeText(fullUrl);
          setShowCopyMessage(true);
          setTimeout(() => setShowCopyMessage(false), 2000);
        } catch (err) {
          console.error('Failed to copy link');
        }
        break;
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        {t('shareRecipe', language)}
      </h3>
      
      {/* Native Share (mobile) */}
      {typeof window !== 'undefined' && typeof navigator.share !== 'undefined' && (
        <button
          onClick={() => handleShare('native')}
          className="w-full mb-3 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          {t('shareVia', language)}
        </button>
      )}
      
      {/* Social Share Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <button
          onClick={() => handleShare('facebook')}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          {t('facebook', language)}
        </button>
        <button
          onClick={() => handleShare('twitter')}
          className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors text-sm font-medium"
        >
          {t('twitter', language)}
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => handleShare('whatsapp')}
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
        >
          {t('whatsapp', language)}
        </button>
        <button
          onClick={() => handleShare('copy')}
          className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium relative"
        >
          {t('copyLink', language)}
        </button>
      </div>
      
      {/* Copy confirmation message */}
      {showCopyMessage && (
        <div className="mt-3 bg-green-100 text-green-800 text-sm py-2 px-3 rounded-md text-center">
          ✓ {t('linkCopied', language)}
        </div>
      )}
    </div>
  );
}
