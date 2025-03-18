import { getLocalStorageKeys } from './getLocalStorageKeys';
import { Logger } from './logger';

const log = Logger();

export function clearLocalStorage(): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(getLocalStorageKeys().SUMMARY);
      localStorage.removeItem(getLocalStorageKeys().OPTIONS);
      localStorage.removeItem(getLocalStorageKeys().SOURCE_CONTENT);
      log.info('Cleared all localStorage items');
    } catch (err) {
      log.error('Error clearing localStorage:', err);
    }
  }
}
