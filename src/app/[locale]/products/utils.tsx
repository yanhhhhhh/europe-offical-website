import { IProduct } from '@/constants/products';
import { getTranslations } from 'next-intl/server';

export async function getRelatedProductsProps(relatedProducts: IProduct[]) {
  const t = await getTranslations();

  return {
    title: t('products.relatedProducts'),
    products: relatedProducts.map((product) => ({
      modalName: product.name,
      image: product.image.src,
      specs: product.capacity,
      link: product.href,
    })),
  };
}
