import { ServicesCardsData } from "./types/servicesCards";

export const servicesCardsData: ServicesCardsData[] = [
  {
    title: 'Summarize YouTube Videos',
    description: 'Get summaries of YouTube video content.',
    icon: 'youtube',
    link: '/prompt/video',
  },
  {
    title: 'Summarize Documents',
    description: 'Upload documents and receive concise summaries.',
    icon: 'document',
    link: '/prompt/document',
  },
  {
    title: 'Summarize Text',
    description: 'Paste or type text to get quick summaries.',
    icon: 'text',
    link: '/prompt/text',
  },
];
