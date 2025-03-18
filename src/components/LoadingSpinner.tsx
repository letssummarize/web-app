import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className='flex items-center justify-center py-10'>
      <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gradient-to-r from-[#D8775F] via-[#A02B66] to-[#3E15BA]'></div>
      <span className='ml-3 text-white'>Summarizing...</span>
    </div>
  );
};

export default LoadingSpinner;
