import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md';
  label?: string;
}

const LoadingSpinner = ({ size = 'md', label = 'Summarizing...' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-12 w-12 border-t-2 border-b-2',
  };

  return (
    <div className='flex items-center justify-center'>
      <div
        className={`animate-spin rounded-full ${sizeClasses[size]} border-gradient-to-r from-[#D8775F] via-[#A02B66] to-[#3E15BA]`}
      ></div>
      {label && <span className='ml-3 text-white'>{label}</span>}
    </div>
  );
};

export default LoadingSpinner;
