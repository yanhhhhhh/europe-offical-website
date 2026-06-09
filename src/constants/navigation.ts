// 支持的语言列表
export const locales = [
  { code: 'en', region: 'UK & Ireland', language: 'English' },
  { code: 'de', region: 'Germany', language: 'German' },
  { code: 'nl', region: 'Netherlands', language: 'Dutch' },
  { code: 'sv', region: 'Sweden', language: 'Swedish' },
  { code: 'pl', region: 'Poland', language: 'Polish' },
  { code: 'es', region: 'Spain', language: 'Spanish' },
  { code: 'fr', region: 'France', language: 'French' },
  { code: 'hu', region: 'Hungary', language: 'Hungarian' },
  { code: 'it', region: 'Italy', language: 'Italian' },
] as const;

export type Locale = (typeof locales)[number]['code'];

export const localeCodes = locales.map((locale) => locale.code) as [
  Locale,
  ...Locale[],
];

export const defaultLocale: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return localeCodes.includes(value as Locale);
}

// 产品列表
export const productSlugs = {
  f8s: 'arkvolt-f8s',
  l16s: 'arkvolt-l16s',
  l16: 'arkvolt-l16',
  r30: 'arkvolt-r30',
} as const;

// 路由配置
export const routes = {
  home: '/',
  products: '/products',
  about: '/about',
  contact: '/contact',
  service: '/service',
  downloads: '/service/downloads',
} as const;

// 导航菜单配置（支持嵌套）
export interface NavItem {
  key: string;
  href?: string;
  children?: NavItem[];
}

export const headerNavigation: NavItem[] = [
  {
    key: 'navigation.home',
    href: routes.home,
  },
  {
    key: 'navigation.products',
    children: [
      {
        key: 'product.f8s.title',
        href: `${routes.products}/${productSlugs.f8s}`,
      },
      {
        key: 'product.l16s.title',
        href: `${routes.products}/${productSlugs.l16s}`,
      },
      {
        key: 'product.l16.title',
        href: `${routes.products}/${productSlugs.l16}`,
      },
      {
        key: 'product.r30.title',
        href: `${routes.products}/${productSlugs.r30}`,
      },
    ],
  },
  {
    key: 'navigation.about',
    children: [
      {
        key: 'navigation.contact',
        href: routes.contact,
      },
    ],
  },
  {
    key: 'navigation.service',
    children: [
      {
        key: 'navigation.downloads',
        href: routes.downloads,
      },
    ],
  },
] as const;
