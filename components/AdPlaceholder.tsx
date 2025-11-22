interface AdPlaceholderProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function AdPlaceholder({ className = '', size = 'medium' }: AdPlaceholderProps) {
  const sizeClasses = {
    small: 'h-24',
    medium: 'h-32 md:h-48',
    large: 'h-48 md:h-64',
  };

  return (
    <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <div className="text-center px-4">
        <svg className="w-8 h-8 mx-auto mb-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        <p className="text-xs text-gray-500 font-medium">Advertisement</p>
        <p className="text-xs text-gray-400 mt-1">Space for Google AdSense</p>
      </div>
    </div>
  );
}
