
import { appMetaData } from "./appMetadata";
import { NavbarData } from "./types/navbar";

export const navbarData: NavbarData = {
  menu: [
    {
      name: 'Summarize Videos',
      href: '/prompt/video',
      icon: 'youtube',
    },
    {
      name: 'Summarize Text',
      href: '/prompt/text',
      icon: 'text',
    },
    {
      name: 'Summarize PDF',
      href: '/prompt/document',
      icon: 'document',
    },
  ],
  logo: {
        link: '/',
        alt: `${appMetaData.title} logo`,
        src: '/images/logo.png',
  },
  secondaryMenu: [
    {
      name: 'API Documentation',
      href: '/api',
      icon: 'api',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/letsSummary/api',
      icon: 'github',
    },
  ],
};
