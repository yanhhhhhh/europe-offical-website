'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { headerNavigation, routes, localeCodes } from '@/constants/navigation';
import Link from 'next/link';
import { useState } from 'react';

interface NavDropdownProps {
  item: (typeof headerNavigation)[number];
}

/**
 * 导航下拉菜单组件
 */
function NavDropdown({ item }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  if (!item.children) {
    return (
      <Link href={item.href || '/'} className="px-3 py-2 hover:text-blue-600">
        {t(item.key)}
      </Link>
    );
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="px-3 py-2 hover:text-blue-600 flex items-center gap-1">
        {t(item.key)}
        <span className="text-xs">▼</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg z-10">
          {item.children.map((child) => (
            <Link
              key={child.key}
              href={child.href || '/'}
              className="block px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
            >
              {t(child.key)}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * 头部/导航栏组件
 */
export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={routes.home} className="text-2xl font-bold text-blue-600">
          HiTHIUM
        </Link>

        {/* 导航菜单 */}
        <div className="hidden md:flex items-center gap-8">
          {headerNavigation.map((item) => (
            <NavDropdown key={item.key} item={item} />
          ))}
        </div>

        {/* 语言切换 */}
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            {locale.toUpperCase()}
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10">
              {localeCodes.map((code) => (
                <Link
                  key={code}
                  href={`/${code}`}
                  className="block px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                >
                  {code.toUpperCase()}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
