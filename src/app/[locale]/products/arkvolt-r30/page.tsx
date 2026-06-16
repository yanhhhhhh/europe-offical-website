import {
  r30Banner,
  r30RelatedProducts,
  r30FlexibleCapacity,
  r30CycleLife,
} from '@/constants/products/r30';
import { getTranslations } from 'next-intl/server';
import HeroEECommonRelatedProducts from '@/components/HeroEECommonRelatedProducts';

import { getRelatedProductsProps } from '../utils';
import { HeroCardProps, HeroCard } from '@/components/HeroCard';
import HeroEECommonSection from '@/components/HeroEECommonSection';
import ProductParameters from './Parameters';
const r30BannerProps: HeroCardProps = {
  ...r30Banner,
  backgroundImage: r30Banner.image,
  mobileBackgroundImage: r30Banner.mobileImage,
  cardClassName: '!justify-start ',
  cardContentClassName:
    'lg:!pt-[140px]  lg:!px-[346px] !items-start !text-left  !pt-[105px]  ',
  descriptionClassName: 'text-left lg:w-[630px]',
  moreType: 'download',
};

export default async function Arkvoltr30Page() {
  const t = await getTranslations();
  const r30CycleLifeProps = {
    ...r30CycleLife,
    title: t(r30CycleLife.title),
    description: t(r30CycleLife.description),
  };
  const r30FlexibleCapacityProps = {
    ...r30FlexibleCapacity,
    title: t(r30FlexibleCapacity.title),
    description: t(r30FlexibleCapacity.description),
  };

  const r30RelatedProductsProps =
    await getRelatedProductsProps(r30RelatedProducts);
  return (
    <div className="arkvolt-r30-page">
      <HeroCard {...r30BannerProps} />
      {/* 产品参数 */}
      <ProductParameters />
      {/* Cycle Life */}
      <HeroEECommonSection {...r30CycleLifeProps} />
      {/* FlexibleCapacity */}
      <HeroEECommonSection {...r30FlexibleCapacityProps} />

      {/* 相关产品 */}
      <HeroEECommonRelatedProducts {...r30RelatedProductsProps} />
    </div>
  );
}
