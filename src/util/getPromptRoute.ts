import { SummaryType } from '@/api/types/api';

export function getPromptRoute(sourceType: SummaryType): string {
  switch (sourceType) {
    case 'youtube':
      return '/prompt/video';
    case 'document':
      return '/prompt/document';
    case 'text':
      return '/prompt/text';
    default:
      return '/';
  }
}
