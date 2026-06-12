'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { headerNavigation, localeCodes } from '@/constants/navigation';
import { products } from '@/constants/products';
import Link from 'next/link';
import { useState, useRef } from 'react';
import Image from 'next/image';

interface NavDropdownProps {
  item: (typeof headerNavigation)[number];
}

/**
 * 产品卡片下拉菜单
 */
function ProductsDropdown({
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onClose,
}: {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}) {
  const t = useTranslations('navigation');

  if (!isOpen) return null;

  return (
    <div
      className="fixed left-0 right-0 top-[64px] w-screen bg-white shadow-lg z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto p-[32px]">
        <p className="text-[#292929] font-semibold text-[20px] mb-[16px] underline decoration-2 underline-offset-8">
          {t('energyStorageSystem')}
        </p>
        <div className="flex gap-2 justify-center">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={product.href}
              onClick={onClose}
              className="w-[258px] h-[380px] group"
            >
              <div className="bg-[#f5f5f5] relative rounded-[10px] flex flex-col items-center justify-center h-full overflow-hidden mb-[12px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-contain absolute top-0 left-0 h-full w-auto group-hover:scale-105 transition-transform duration-200"
                  height={180}
                />
                <div className="absolute bottom-0 left-0 w-full py-[8px]">
                  <p className="text-[#292929] font-semibold text-[18px] text-center ">
                    {product.name}
                  </p>
                  <p className="text-[#292929] text-[18px] font-light text-center ">
                    {product.capacity}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
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

  // 普通链接
  if (!item.children && !item.type) {
    return (
      <Link href={item.href || '/'} className="text-[18px] px-[16px] py-[16px]">
        {t(item.key)}
      </Link>
    );
  }

  // 产品卡片下拉
  if (item.type === 'products') {
    return (
      <>
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:text-blue-400 flex items-center gap-[6px]  text-[18px] h-[64px]">
            {t(item.key)}
            <ChevronDownIcon
              className={`size-[16px] transition-transform  duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
        <ProductsDropdown
          isOpen={isOpen}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClose={() => setIsOpen(false)}
        />
      </>
    );
  }

  // 普通子菜单下拉
  return (
    <>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="hover:text-blue-400 flex text-[18px] items-center gap-[6px] px-[12px] h-[64px]">
          {t(item.key)}
          <ChevronDownIcon
            className={`size-[16px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed left-0 right-0 top-[64px] w-screen bg-white shadow-lg z-40 text-black"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto py-[12px] ">
            <div className="flex justify-center gap-2 ">
              {item.children!.map((child) => (
                <Link
                  key={child.key}
                  href={child.href || '/'}
                  className="block p-[20px] hover:bg-gray-100 rounded-[10px] text-[18px] font-medium"
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
 * 桌面端导航组件
 */
export function HeaderDesktop() {
  const locale = useLocale();
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-[20px]">
        {headerNavigation.map((item) => (
          <NavDropdown key={item.key} item={item} />
        ))}
      </div>

      {/* 语言切换 - 桌面端 */}
      <div className="relative hidden lg:block">
        <button
          onClick={() => setIsLangOpen(!isLangOpen)}
          className="text-white hover:text-gray-300 px-3 py-1"
        >
          {locale.toUpperCase()}
        </button>

        {isLangOpen && (
          <div className="absolute right-0  w-[120px] bg-white  shadow-lg z-10 text-black">
            {localeCodes.map((code) => (
              <Link
                key={code}
                href={`/${code}`}
                className="block px-[16px] py-[8px] hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
              >
                {code.toUpperCase()}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
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
