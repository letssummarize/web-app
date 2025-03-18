import { SummaryType } from '@/api/types/api';
import { PromptBoxType } from '@/components/PromptBox/PromptBox';

export function getPromptBoxType(sourceType: SummaryType): PromptBoxType {
  switch (sourceType) {
    case 'youtube':
      return 'url';
    case 'document':
      return 'upload';
    case 'text':
      return 'text';
    default:
      return 'text';
  }
}
