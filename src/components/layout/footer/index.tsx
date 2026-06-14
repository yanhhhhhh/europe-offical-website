import Image from 'next/image';
import { Link } from '@/i18n/navigation';

import FooterMedia from './FooterMedia';
import Logo from '@/assets/images/logo.webp';
import { products } from '@/constants/products';
import { headerNavigation } from '@/constants/navigation';

import { getTranslations } from 'next-intl/server';
import FooterContactEmail from './FooterContactEmail';
const companyName = 'Shenzhen Hithium Hero Energy Equity Technology Co, Ltd.';

async function NavigationSection({
  item,
  className = '',
}: {
  item: (typeof headerNavigation)[number];
  className?: string;
}) {
  const t = await getTranslations();

  if (item.type === 'products') {
    return (
      <div className={className}>
        <p className="mb-[16px] text-[20px] font-bold leading-[24px] text-white">
          {t(item.key)}
        </p>
        <div className="space-y-[12px] text-[16px] leading-[24px] text-white/70">
          {products.map((product) => (
            <Link
              key={product.productKey}
              href={product.href}
              className="block transition-colors hover:text-white"
            >
              {product.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (!item.children?.length) {
    return (
      <Link
        href={item.href || '/'}
        className={`${className} inline-block text-[20px] font-bold leading-[24px] transition-colors hover:text-white`}
      >
        {t(item.key)}
      </Link>
    );
  }

  return (
    <div className={className}>
      <p className="mb-[16px] text-[20px] font-bold leading-[24px] text-white">
        {t(item.key)}
      </p>
      <div className="space-y-[12px] text-[16px] leading-[24px] text-white/70">
        {item.children.map((child) => (
          <Link
            key={child.key}
            href={child.href || '/'}
            className="block transition-colors hover:text-white"
          >
            {t(child.key)}
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * 页脚组件
 */
export default async function Footer() {
  const t = await getTranslations();
  return (
    <div>
      <footer className="hidden lg:block  lg:bg-[url(/images/footer-bg.webp)]  lg:bg-cover  text-white  px-[300px] py-[36px]">
        <FooterContactEmail />
        <div className="py-[40px] flex border-y border-white/20 ">
          <div className="flex flex-col items-center gap-[40px] mr-[150px] ">
            <Image
              src={Logo}
              alt={companyName}
              height={50}
              className="h-[50px] w-auto"
            />
            <FooterMedia />
          </div>
          <div className="flex gap-[120px]">
            {headerNavigation.map((item) => (
              <NavigationSection key={item.key} item={item} />
            ))}
          </div>
        </div>
        <div className="text-[20px]  pt-[28px]">
          <span>
            {t('footer.copyright')} © {companyName}
          </span>
        </div>
        {/* 国际化选择todo */}
      </footer>
      <footer className="lg:hidden block bg-black text-white py-[36px] px-[32px]">
        <FooterContactEmail />
        <div className="py-[36px] border-y border-white/20 flex flex-col items-center gap-[40px] ">
          <div className="flex justify-between items-center w-full">
            <Image
              src={Logo}
              alt={companyName}
              height={66}
              className="h-[66px] w-auto"
            />
            {/* todo */}
            <div>国际化</div>
          </div>
          <FooterMedia />
        </div>

        {/* copyright */}
        <div className="text-[20px]  pt-[28px] text-center">
          <span>
            {t('footer.copyright')} © {companyName}
          </span>
        </div>
      </footer>
    </div>
  );
}
