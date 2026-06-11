// 支持的语言列表
export const locales = [
  { code: 'en', region: 'UK', language: 'English' },
  { code: 'de', region: 'Germany', language: 'German' },
  // 后续再支持更多语言
  // { code: 'nl', region: 'Netherlands', language: 'Dutch' },
  // { code: 'sv', region: 'Sweden', language: 'Swedish' },
  // { code: 'pl', region: 'Poland', language: 'Polish' },
  // { code: 'es', region: 'Spain', language: 'Spanish' },
  // { code: 'fr', region: 'France', language: 'French' },
  // { code: 'hu', region: 'Hungary', language: 'Hungarian' },
  // { code: 'it', region: 'Italy', language: 'Italian' },
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
  type?: 'products'; // 特殊类型：使用 products 数组自动生成下拉
  children?: NavItem[];
}

export const headerNavigation: NavItem[] = [
  {
    key: 'navigation.home',
    href: '/',
  },
  {
    key: 'navigation.products',
    type: 'products', // 自动从 products 常量驱动，无需手动维护子项
  },
  {
    key: 'navigation.about',
    children: [
      {
        key: 'navigation.contact',
        href: '/about-us/contact',
      },
    ],
  },
  {
    key: 'navigation.service',
    children: [
      {
        key: 'navigation.downloads',
        href: '/service/downloads',
      },
    ],
  },
] as const;
