'use client';

import { useTranslations } from 'next-intl';
import { headerNavigation } from '@/constants/navigation';
import { products } from '@/constants/products';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import logo from '@/assets/images/logo.webp';

/**
 * 移动端菜单组件 - 按 750 设计稿，尺寸除以 2
 */
export function HeaderMobile() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // 禁用 overscroll 行为
  useEffect(() => {
    if (isOpen && typeof document !== 'undefined') {
      document.documentElement.style.overscrollBehavior = 'none';
      return () => {
        document.documentElement.style.overscrollBehavior = 'auto';
      };
    }
  }, [isOpen]);

  const toggleItem = (key: string) => {
    setExpandedItems((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* 菜单按钮 */}
      {!isOpen && (
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <svg
            className="size-[38px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      {/* 菜单内容 */}
      {isOpen && typeof document !== 'undefined'
        ? createPortal(
            <div className="fixed inset-0 w-full h-screen bg-[#080a0e] z-100 lg:hidden overflow-y-auto overflow-x-hidden">
              {/* Header - 保持与主 header 一致的高度 h-16 (64px) */}
              <div className="flex justify-between items-center px-[36px] h-[80px] bg-black w-full">
                <Image
                  src={logo}
                  alt="HiTHIUM Logo"
                  height={38}
                  className="h-[38px] w-auto"
                />
                <button
                  onClick={handleClose}
                  className="text-white "
                  aria-label="Close menu"
                >
                  <svg
                    className="size-[38px]"
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
              <div className=" pb-8 w-full">
                {/* 添加 pb-8 确保底部有足够空间滚动 */}
                {headerNavigation.map((item) => {
                  const hasChildren = item.children || item.type === 'products';
                  const isExpanded = expandedItems.includes(item.key);

                  return (
                    <div key={item.key} className="w-full">
                      <div
                        className="bg-[#23262d] h-[100px] flex items-center justify-between px-[30px] cursor-pointer w-full"
                        onClick={() =>
                          hasChildren ? toggleItem(item.key) : handleClose()
                        }
                      >
                        {!hasChildren ? (
                          <Link
                            href={item.href || '/'}
                            className="flex-1"
                            onClick={handleClose}
                          >
                            <span className="text-white text-[40px] font-bold">
                              {t(item.key)}
                            </span>
                          </Link>
                        ) : (
                          <span className="text-white text-[40px] font-bold">
                            {t(item.key)}
                          </span>
                        )}
                        {hasChildren && (
                          <ChevronDownIcon
                            className={`size-[32px] text-white transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        )}
                      </div>

                      {/* Expanded Content */}
                      {isExpanded && hasChildren && (
                        <>
                          {item.type === 'products' ? (
                            // Products Grid - 20px → 10px
                            <div className="bg-[#080a0e] p-[32px] w-full">
                              <p className="text-white text-[40px] font-semibold mb-[12px] underline decoration-1 underline-offset-4">
                                {t('navigation.energyStorageSystem')}
                              </p>
                              <div className="grid grid-cols-2 gap-2 w-full">
                                {products.map((product) => (
                                  <Link
                                    key={product.productKey}
                                    href={product.href}
                                    onClick={handleClose}
                                    className="block w-full"
                                  >
                                    <div className="bg-[#1c1e21] relative rounded h-[430px] flex flex-col items-center justify-center  w-full">
                                      <Image
                                        src={product.image}
                                        alt={product.name}
                                        className="absolute object-contain h-[430px] w-auto mb-[8px]"
                                        height={430}
                                      />
                                      <div className="absolute z-10 bottom-[16px]">
                                        <p className="text-white text-[24px] font-semibold text-center ">
                                          {product.name}
                                        </p>
                                        <p className="text-white text-[22px] text-center ">
                                          {product.capacity}
                                        </p>
                                      </div>
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
                                  onClick={handleClose}
                                  className="block w-full"
                                >
                                  <div className="bg-[#23262d] opacity-50 h-[100px] flex items-center px-[36px] w-full">
                                    <span className="text-white text-[28px] font-light">
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
          )
        : null}
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
