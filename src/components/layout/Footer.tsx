'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { routes } from '@/constants/navigation';

/**
 * 页脚组件
 */
export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-[16px] py-[48px]">
        {/* 页脚内容网格 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mb-[32px]">
          {/* 公司信息 */}
          <div>
            <h3 className="text-[28px] font-bold mb-[16px]">
              Shenzhen Hithium Hero Energy Equity Technology Co., Ltd.
            </h3>
            <ul className=" text-gray-400">
              <li>
                <Link href={routes.about} className="hover:text-white">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href={routes.contact} className="hover:text-white">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* 解决方案 */}
          <div>
            <h3 className="text-[28px] font-bold mb-[16px]">
              {t('cooperation')}
            </h3>
            <ul className=" text-gray-400">
              <li className="hover:text-white cursor-pointer">
                {t('residential')}
              </li>
              <li className="hover:text-white cursor-pointer">
                {t('commercial')}
              </li>
            </ul>
          </div>

          {/* 服务 */}
          <div>
            <h3 className="text-[28px] font-bold mb-[16px]">
              {t('cooperation')}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href={routes.downloads} className="hover:text-white">
                  {t('manual')}
                </Link>
              </li>
              <li className="hover:text-white cursor-pointer">
                {t('afterSales')}
              </li>
            </ul>
          </div>

          {/* 法律 */}
          <div>
            <h3 className="text-[28px] font-bold mb-[16px]">{t('legal')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">
                {t('privacy')}
              </li>
              <li className="hover:text-white cursor-pointer">{t('terms')}</li>
            </ul>
          </div>
        </div>

        {/* 分隔线 */}
        <hr className="border-gray-700 my-[32px]" />

        {/* 底部文案和版权 */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-[14px] text-gray-400">
          <p>&copy; {t('legal')}</p>
          <div className="flex gap-4 mt-[16px] lg:mt-0">
            <Link href="#" className="hover:text-white">
              {t('privacy')}
            </Link>
            <Link href="#" className="hover:text-white">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
