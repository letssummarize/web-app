import { SummaryType } from '@/api/types/api';
import { PromptBoxType } from '@/components/PromptBox/PromptBox';

export function getPromptBoxType(sourceType: SummaryType): PromptBoxType {
  switch (sourceType) {
    case 'video':
      return 'url';
    case 'file':
      return 'upload';
    case 'text':
      return 'text';
    default:
      return 'text';
  }
}
