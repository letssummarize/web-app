import { metadata } from "./metadata";
import { NavbarData } from "./types/navbar";

export const navbarData: NavbarData = {
  menu: [
    {
      name: 'Summarize Videos',
      href: '/videos',
      icon: 'youtube',
    },
    {
      name: 'Summarize Text',
      href: '/text',
      icon: 'text',
    },
    {
      name: 'Summarize PDF',
      href: '/pdf',
      icon: 'document',
    },
  ],
  logo: {
        link: '/',
        alt: `${metadata.title} logo`,
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
