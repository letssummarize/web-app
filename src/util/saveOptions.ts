import { SummaryOptions } from '@/api/types/api';
import { Logger } from './logger';
import { getLocalStorageKeys, LocalStorageKeys } from './getLocalStorageKeys';

const log = Logger();

export function saveOptions(options: SummaryOptions): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(
        getLocalStorageKeys().OPTIONS,
        JSON.stringify(options)
      );
      log.info('Options saved to localStorage:', options);
    } catch (err) {
      log.error('Error saving options to localStorage:', err);
    }
  }
}
