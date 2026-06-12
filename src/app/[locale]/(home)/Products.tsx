import { getTranslations } from 'next-intl/server';
import { homeProducts } from '@/constants/home';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export default async function Products() {
  const t = await getTranslations();
  return (
    <div className="bg-[#F8F8F8] lg:py-[96px] lg:px-[178px] px-[20px] py-[40px]">
      <h1 className="text-[48px] font-bold lg:mb-[80px] text-center mb-[40px]">
        {t('home.products.title')}
      </h1>
      <div className="products grid grid-cols-2 lg:grid-cols-4 lg:gap-[30px] gap-[20px] ">
        {homeProducts.map((product, index) => (
          <Link href={product.href} key={index} className=" bg-white  relative">
            <Image
              src={product.image}
              alt={product.name}
              className="mx-auto mb-[20px] hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-full px-[10px]">
              <h2 className="text-[24px] font-bold  text-center">
                {t(product.name)}
              </h2>
              <p className="text-[18px] text-[#696969] text-center">
                {product.capacity}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
