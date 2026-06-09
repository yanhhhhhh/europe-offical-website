'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { localeCodes } from '@/constants/navigation';

/**
 * 语言切换器组件
 * 用于在页面中显示语言选择下拉菜单
 */
export function LanguageSwitcher() {
  const locale = useLocale();

  return (
    <div className="inline-block">
      <select
        value={locale}
        onChange={(e) => {
          window.location.href = `/${e.target.value}`;
        }}
        className="px-3 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50 cursor-pointer"
      >
        {localeCodes.map((code) => (
          <option key={code} value={code}>
            {code.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

/**
 * 本地化链接组件
 * 自动添加当前语言前缀
 */
export interface LocalizedLinkProps extends React.ComponentProps<typeof Link> {
  href: string;
}

export function LocalizedLink({ href, children, ...props }: LocalizedLinkProps) {
  const locale = useLocale();

  // 如果href以斜杠开头，添加locale前缀
  const localizedHref = href.startsWith('/') ? `/${locale}${href}` : href;

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
}
