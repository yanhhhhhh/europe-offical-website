import { HeroCardProps, HeroCard } from '@/components/HeroCard';
import {
  f8sBanner,
  f8sProductAdvantage,
  f8sRelatedProducts,
  f8sFlexibleCapacity,
  f8sWeatherConditions,
  f8sCycleLife,
} from '@/constants/products/f8s';
import { getTranslations } from 'next-intl/server';
import HeroEECommonRelatedProducts from '@/components/HeroEECommonRelatedProducts';

import { getRelatedProductsProps } from '../utils';

import HeroEECommonSection from '@/components/HeroEECommonSection';
import OperatingTemperatureRange from './OperatingTemperatureRange';
import ProductParameters from './ProductParameters';
import ProductFeatures from './Features';
const f8sBannerProps: HeroCardProps = {
  ...f8sBanner,
  backgroundImage: f8sBanner.image,
  mobileBackgroundImage: f8sBanner.mobileImage,
  cardClassName: 'lg:!justify-start ',
  cardContentClassName:
    'lg:!pt-[140px]  lg:!px-[346px] lg:!items-start lg:!text-left  !pt-[105px]  ',
  moreType: 'download',
};

const f8sProductAdvantageProps: HeroCardProps = {
  ...f8sProductAdvantage,
  backgroundImage: f8sProductAdvantage.image,
  mobileBackgroundImage: f8sProductAdvantage.mobileImage,
  cardClassName: 'lg:!justify-start ',
  cardContentClassName:
    'lg:!pt-[180px]  lg:!px-[346px] lg:!items-start lg:!text-left  !pt-[105px] ',
  descriptionClassName: 'lg:w-[510px] lg:text-left',
};

// 国际化metadata
export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: t(f8sBanner.title),
    description: t(f8sBanner.description),
  };
}

export default async function ArkvoltF8sPage() {
  const t = await getTranslations();
  const f8sRelatedProductsProps =
    await getRelatedProductsProps(f8sRelatedProducts);
  const f8sCycleLifeProps = {
    ...f8sCycleLife,
    title: t(f8sCycleLife.title),
    description: t(f8sCycleLife.description),
  };
  const f8sFlexibleCapacityProps = {
    ...f8sFlexibleCapacity,
    title: t(f8sFlexibleCapacity.title),
    description: t(f8sFlexibleCapacity.description),
  };
  const f8sWeatherConditionsProps = {
    ...f8sWeatherConditions,
    title: t(f8sWeatherConditions.title),
    description: t(f8sWeatherConditions.description),
  };
  return (
    <div className="arkvolt-f8s-page">
      <HeroCard {...f8sBannerProps} />
      <HeroCard {...f8sProductAdvantageProps} />
      {/* 产品特点 */}
      <ProductFeatures />
      {/* 产品参数 */}
      <ProductParameters />
      {/* Cycle Life */}
      <HeroEECommonSection {...f8sCycleLifeProps} />
      {/* FlexibleCapacity */}
      <HeroEECommonSection {...f8sFlexibleCapacityProps} />

      {/* 天气适应性 */}

      <HeroEECommonSection {...f8sWeatherConditionsProps} />
      {/* 工作温度范围 */}
      <OperatingTemperatureRange />
      {/* 相关产品 */}
      <HeroEECommonRelatedProducts {...f8sRelatedProductsProps} />
    </div>
  );
}
