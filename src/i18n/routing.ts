import { defineRouting } from 'next-intl/routing';
import { defaultLocale, localeCodes } from '@/constants/navigation';

export const routing = defineRouting({
  locales: localeCodes,
  defaultLocale,
  localePrefix: 'as-needed', // 默认语言路径不带 locale
});
