'use client';

import { useTranslations } from 'next-intl';

/**
 * 本地化文本组件
 * 用于获取和显示翻译的文本
 */
export interface LocalizedTextProps {
  namespace: string;
  key: string;
  defaultValue?: string;
  className?: string;
}

export function LocalizedText({
  namespace,
  key,
  defaultValue = '',
  className = '',
}: LocalizedTextProps) {
  const t = useTranslations(namespace);

  return <span className={className}>{t(key, defaultValue)}</span>;
}

/**
 * 本地化标题组件
 * 专用于显示页面标题
 */
export interface LocalizedHeadingProps extends LocalizedTextProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function LocalizedHeading({
  namespace,
  key,
  defaultValue = '',
  className = '',
  level = 1,
}: LocalizedHeadingProps) {
  const t = useTranslations(namespace);
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  const headingClasses = {
    1: 'text-4xl font-bold',
    2: 'text-3xl font-bold',
    3: 'text-2xl font-bold',
    4: 'text-xl font-bold',
    5: 'text-lg font-bold',
    6: 'text-base font-bold',
  };

  const combinedClasses = `${headingClasses[level]} ${className}`;

  return (
    <HeadingTag className={combinedClasses}>{t(key, defaultValue)}</HeadingTag>
  );
}

/**
 * 本地化段落组件
 * 专用于显示段落文本
 */
export interface LocalizedParagraphProps extends LocalizedTextProps {
  html?: boolean;
}

export function LocalizedParagraph({
  namespace,
  key,
  defaultValue = '',
  className = '',
  html = false,
}: LocalizedParagraphProps) {
  const t = useTranslations(namespace);
  const text = t(key, defaultValue);

  if (html) {
    return (
      <p
        className={`text-gray-700 ${className}`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  }

  return <p className={`text-gray-700 ${className}`}>{text}</p>;
}
