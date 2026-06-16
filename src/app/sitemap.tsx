import { MetadataRoute } from 'next';

import { defaultLocale, localeCodes } from '@/constants/navigation';

function normalizeBaseUrl(raw?: string) {
  return (raw || process.env.NEXT_PUBLIC_SITE_URL).replace(/\/$/, '');
}

const routePaths = [
  '/',
  '/about-us/contact',
  '/service/downloads',
  '/products/arkvolt-f8s',
  '/products/arkvolt-l16',
  '/products/arkvolt-l16s',
  '/products/arkvolt-r30',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_SITE_URL);
  const lastModified = new Date();

  return localeCodes.flatMap((locale) => {
    const localePrefix = locale === defaultLocale ? '' : `/${locale}`;

    return routePaths.map((path) => {
      const normalizedPath = path === '/' ? '' : path;
      const url = `${baseUrl}${localePrefix}${normalizedPath || '/'}`;

      return {
        url,
        lastModified,
      };
    });
  });
}
