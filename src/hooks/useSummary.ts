'use client';

import { SummaryContext } from '@/context/SummaryProvider';
import { useContext } from 'react';

export const useSummary = () => {
  const context = useContext(SummaryContext);
  if (!context) {
    throw new Error('useSummaryContext must be used within a SummaryProvider');
  }
  return context;
};
