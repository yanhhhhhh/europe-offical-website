import { MetadataRoute } from 'next';

import { defaultLocale, localeCodes } from '@/constants/navigation';

function normalizeBaseUrl(raw?: string) {
  return (raw || 'https://www.arkvolteurope.com').replace(/\/$/, '');
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_SITE_URL);

  const localePaths = localeCodes
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => `/${locale}`);

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', ...localePaths, ...localePaths.map((path) => `${path}/`)],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
    ],
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
