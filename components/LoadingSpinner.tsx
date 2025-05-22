
import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-4',
    lg: 'w-16 h-16 border-4',
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2 my-4">
      <div 
        className={`${sizeClasses[size]} border-indigo-500 border-t-transparent rounded-full animate-spin`}
        role="status"
        aria-live="polite"
        aria-label={message || "Loading..."}
      >
      </div>
      {message && <p className="text-gray-300 text-sm">{message}</p>}
    </div>
  );
};

export default LoadingSpinner;
