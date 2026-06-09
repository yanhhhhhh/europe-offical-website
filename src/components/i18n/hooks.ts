'use client';

import { useTranslations } from 'next-intl';

/**
 * 国际化工具 Hook
 * 简化在组件中使用翻译的逻辑
 */
export function usePageTranslations(namespace: string) {
  const t = useTranslations(namespace);

  return {
    // 获取翻译文本
    t: (key: string, defaultValue?: string) => t(key, defaultValue),

    // 获取嵌套的翻译对象
    getSection: (sectionKey: string) => ({
      t: (key: string, defaultValue?: string) =>
        t(`${sectionKey}.${key}`, defaultValue),
    }),

    // 获取列表翻译
    getList: (listKey: string) => {
      const listStr = t(listKey);
      try {
        return JSON.parse(listStr);
      } catch {
        return listStr?.split(',') || [];
      }
    },
  };
}

/**
 * 国际化布尔值转换
 * 将true/false转换为国际化的是/否
 */
export function useBooleanTranslation() {
  const t = useTranslations('common');

  return {
    toString: (value: boolean) => (value ? t('yes', 'Yes') : t('no', 'No')),
    toIcon: (value: boolean) => (value ? '✓' : '✗'),
  };
}

/**
 * 格式化翻译数据
 */
export function formatTranslationData(data: Record<string, any>) {
  return Object.entries(data).map(([key, value]) => ({
    key,
    value: typeof value === 'object' ? JSON.stringify(value) : value,
  }));
}

/**
 * 获取所有可用的语言列表
 */
export function useAvailableLanguages() {
  const t = useTranslations('common');

  return [
    { code: 'en', name: t('language.en', 'English') },
    { code: 'de', name: t('language.de', 'German') },
    { code: 'nl', name: t('language.nl', 'Dutch') },
    { code: 'sv', name: t('language.sv', 'Swedish') },
    { code: 'pl', name: t('language.pl', 'Polish') },
    { code: 'es', name: t('language.es', 'Spanish') },
    { code: 'fr', name: t('language.fr', 'French') },
    { code: 'hu', name: t('language.hu', 'Hungarian') },
    { code: 'it', name: t('language.it', 'Italian') },
  ];
}
