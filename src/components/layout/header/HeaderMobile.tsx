'use client';

import { useTranslations } from 'next-intl';
import { headerNavigation } from '@/constants/navigation';
import { products } from '@/constants/products';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import logo from '@/assets/images/logo.webp';

/**
 * 移动端菜单组件 - 按 750 设计稿，尺寸除以 2
 */
export function HeaderMobile({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const t = useTranslations();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleItem = (key: string) => {
    setExpandedItems((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 w-full bg-[#080a0e] z-100 lg:hidden overflow-y-auto overflow-x-hidden">
      {/* Header - 保持与主 header 一致的高度 h-16 (64px) */}
      <div className="flex justify-between items-center px-4 h-16 bg-black w-full">
        <Image
          src={logo}
          alt="HiTHIUM Logo"
          height={24}
          className="h-6 w-auto"
        />
        <button
          onClick={onClose}
          className="text-white p-2"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div className="py-1 pb-8 w-full">
        {/* 添加 pb-8 确保底部有足够空间滚动 */}
        {headerNavigation.map((item) => {
          const hasChildren = item.children || item.type === 'products';
          const isExpanded = expandedItems.includes(item.key);

          return (
            <div key={item.key} className="w-full">
              {/* Menu Item - 100px → 50px, 28px → 14px */}
              <div
                className="bg-[#23262d] h-12.5 flex items-center justify-between px-4 cursor-pointer w-full"
                onClick={() => (hasChildren ? toggleItem(item.key) : onClose())}
              >
                {!hasChildren ? (
                  <Link
                    href={item.href || '/'}
                    className="flex-1"
                    onClick={onClose}
                  >
                    <span className="text-white text-xl font-bold">
                      {t(item.key)}
                    </span>
                  </Link>
                ) : (
                  <span className="text-white text-xl font-bold">
                    {t(item.key)}
                  </span>
                )}
                {hasChildren && (
                  <ChevronDownIcon
                    className={`w-4 h-4 text-white transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  />
                )}
              </div>

              {/* Expanded Content */}
              {isExpanded && hasChildren && (
                <>
                  {item.type === 'products' ? (
                    // Products Grid - 20px → 10px
                    <div className="bg-[#080a0e] py-4 px-4 w-full">
                      <p className="text-white text-xl font-semibold mb-3 underline decoration-1 underline-offset-4">
                        {t('navigation.energyStorageSystem')}
                      </p>
                      <div className="grid grid-cols-2 gap-2 w-full">
                        {products.map((product) => (
                          <Link
                            key={product.slug}
                            href={product.href}
                            onClick={onClose}
                            className="block w-full"
                          >
                            {/* 430px → 215px, 24px → 12px, 22px → 11px, 34px → 17px */}
                            <div className="bg-[#1c1e21] rounded h-53.75 flex flex-col items-center justify-center p-2 w-full">
                              <Image
                                src={product.image}
                                alt={product.name}
                                className="object-contain h-37.5 w-auto mb-2"
                                height={150}
                              />
                              <p className="text-white text-sm font-semibold text-center leading-4.25">
                                {product.name}
                              </p>
                              <p className="text-white text-xs text-center leading-4.25">
                                {product.capacity}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="w-full">
                      {item.children?.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href || '/'}
                          onClick={onClose}
                          className="block w-full"
                        >
                          <div className="bg-[#23262d] opacity-50 h-12.5 flex items-center px-8 w-full">
                            <span className="text-white text-base font-light">
                              {t(child.key)}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>,
    document.body,
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
