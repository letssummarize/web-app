import { SummaryType } from '@/api/types/api';

export function getPromptRoute(sourceType: SummaryType): string {
  switch (sourceType) {
    case 'video':
      return '/prompt/video';
    case 'file':
      return '/prompt/document';
    case 'text':
      return '/prompt/text';
    default:
      return '/';
  }
}
