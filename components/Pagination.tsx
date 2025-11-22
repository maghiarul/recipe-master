import Link from 'next/link';
import { t } from '@/lib/translations';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

export default function Pagination({ currentPage, totalPages, basePath = '' }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  // Show limited page numbers for better UX
  const visiblePages = pages.filter((page) => {
    if (totalPages <= 7) return true;
    if (page === 1 || page === totalPages) return true;
    if (page >= currentPage - 1 && page <= currentPage + 1) return true;
    return false;
  });

  return (
    <nav className="flex justify-center items-center space-x-2 mt-8">
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link
          href={currentPage === 2 ? basePath || '/' : `${basePath}?page=${currentPage - 1}`}
          prefetch={false}
          className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          {t('previous')}
        </Link>
      ) : (
        <span className="px-4 py-2 rounded-md bg-gray-100 border border-gray-200 text-gray-400 cursor-not-allowed">
          {t('previous')}
        </span>
      )}

      {/* Page Numbers */}
      <div className="flex space-x-1">
        {visiblePages.map((page, index) => {
          // Show ellipsis
          if (index > 0 && visiblePages[index - 1] !== page - 1) {
            return (
              <span key={`ellipsis-${page}`} className="px-3 py-2 text-gray-400">
                ...
              </span>
            );
          }

          return (
            <Link
              key={page}
              href={page === 1 ? basePath || '/' : `${basePath}?page=${page}`}
              prefetch={false}
              className={`px-4 py-2 rounded-md transition-colors ${
                page === currentPage
                  ? 'bg-orange-600 text-white font-semibold'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          prefetch={false}
          className="px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          {t('next')}
        </Link>
      ) : (
        <span className="px-4 py-2 rounded-md bg-gray-100 border border-gray-200 text-gray-400 cursor-not-allowed">
          {t('next')}
        </span>
      )}
    </nav>
  );
}
