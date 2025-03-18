import { SummaryResponse } from '@/api/types/api';
import { getLocalStorageKeys } from './getLocalStorageKeys';
import { Logger } from './logger';

const log = Logger();

export function saveData(summary: SummaryResponse | null): void {
  if (typeof window !== 'undefined' && summary) {
    try {
      localStorage.setItem(
        getLocalStorageKeys().DATA,
        JSON.stringify(summary)
      );
    } catch (err) {
      log.error('Error saving summary to localStorage:', err);
    }
  }
}
