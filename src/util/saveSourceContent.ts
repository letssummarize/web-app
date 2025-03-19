import { SummaryType } from '@/api/types/api';
import { getLocalStorageKeys } from './getLocalStorageKeys';
import { Logger } from './logger';

export interface SourceContent {
  type: SummaryType;
  content: string;
  fileName?: string;
  filePath?: string;
}

const log = Logger();

export function saveSourceContent(sourceContent: SourceContent | null) {
  if (typeof window !== 'undefined' && sourceContent) {
    try {
      localStorage.setItem(
        getLocalStorageKeys().SOURCE_CONTENT,
        JSON.stringify(sourceContent)
      );
    } catch (err) {
      log.error('Error saving sourceContent to localStorage:', err);
    }
  }
}
