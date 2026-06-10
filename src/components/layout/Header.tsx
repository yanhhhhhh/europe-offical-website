'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { headerNavigation, localeCodes } from '@/constants/navigation';
import Link from 'next/link';
import { useState, useRef } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo.webp';

interface NavDropdownProps {
  item: (typeof headerNavigation)[number];
}

/**
 * 导航下拉菜单组件
 */
function NavDropdown({ item }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t = useTranslations();

  const handleMouseEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setIsOpen(false), 100);
  };

  if (!item.children) {
    return (
      <Link href={item.href || '/'} className="text-[18px] px-2 py-4">
        {t(item.key)}
      </Link>
    );
  }

  return (
    <>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="hover:text-blue-600 flex items-center gap-1 px-2 h-16">
          {t(item.key)}
          <ChevronDownIcon
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed left-0 right-0 lg:top-[64px] w-screen bg-white shadow-lg z-40 text-black"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-6 py-8">
              {item.children.map((child) => (
                <Link
                  key={child.key}
                  href={child.href || '/'}
                  className="block py-3 px-4 hover:bg-gray-100 rounded-lg text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {t(child.key)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
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
    <header className="bg-black shadow sticky top-0 z-50 text-white">
      <nav className="container mx-auto px-4  flex justify-between items-center">
        {/* Logo */}
        <Image
          src={logo}
          className="lg:h-8 w-auto"
          alt="HiTHIUM Logo"
          height={32}
          priority
        />

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
            className=" border border-gray-300 rounded hover:bg-gray-100"
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

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
