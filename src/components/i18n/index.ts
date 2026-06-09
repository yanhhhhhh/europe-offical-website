// 导出所有国际化相关组件和Hook
export { LanguageSwitcher, LocalizedLink } from './LanguageSwitcher';
export type { LocalizedLinkProps } from './LanguageSwitcher';

export { LocalizedText, LocalizedHeading, LocalizedParagraph } from './LocalizedText';
export type { LocalizedTextProps, LocalizedHeadingProps, LocalizedParagraphProps } from './LocalizedText';

export {
  usePageTranslations,
  useBooleanTranslation,
  useAvailableLanguages,
  formatTranslationData,
} from './hooks';
