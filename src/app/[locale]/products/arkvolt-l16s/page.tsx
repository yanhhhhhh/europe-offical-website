import {
  l16sBanner,
  l16sRelatedProducts,
  l16sFlexibleCapacity,
  l16sWeatherConditions,
  l16sCycleLife,
} from '@/constants/products/l16s';
import { getTranslations } from 'next-intl/server';
import HeroEECommonRelatedProducts from '@/components/HeroEECommonRelatedProducts';

import { getRelatedProductsProps } from '../utils';
import { HeroCardProps, HeroCard } from '@/components/HeroCard';
import HeroEECommonSection from '@/components/HeroEECommonSection';

import OperatingTemperatureRange from './OperatingTemperatureRange';
import ProductParameters from './Parameters';
const l16sBannerProps: HeroCardProps = {
  ...l16sBanner,
  backgroundImage: l16sBanner.image,
  mobileBackgroundImage: l16sBanner.mobileImage,
  cardClassName: 'lg:!justify-start ',
  cardContentClassName:
    'lg:!pt-[140px]  lg:!px-[346px] lg:!items-start lg:!text-left  !pt-[105px]  ',
  moreType: 'download',
};

export default async function ArkvoltL16sPage() {
  const t = await getTranslations();
  const l16sCycleLifeProps = {
    ...l16sCycleLife,
    title: t(l16sCycleLife.title),
    description: t(l16sCycleLife.description),
  };
  const l16sFlexibleCapacityProps = {
    ...l16sFlexibleCapacity,
    title: t(l16sFlexibleCapacity.title),
    description: t(l16sFlexibleCapacity.description),
  };
  const l16sWeatherConditionsProps = {
    ...l16sWeatherConditions,
    title: t(l16sWeatherConditions.title),
    description: t(l16sWeatherConditions.description),
  };
  const l16sRelatedProductsProps =
    await getRelatedProductsProps(l16sRelatedProducts);
  return (
    <div className="arkvolt-l16s-page">
      <HeroCard {...l16sBannerProps} />

      {/* 产品参数 */}
      <ProductParameters />
      {/* Cycle Life */}
      <HeroEECommonSection {...l16sCycleLifeProps} />
      {/* FlexibleCapacity */}
      <HeroEECommonSection {...l16sFlexibleCapacityProps} />

      {/* 天气适应性 */}

      <HeroEECommonSection {...l16sWeatherConditionsProps} />
      {/* 工作温度范围 */}
      <OperatingTemperatureRange />
      {/* 相关产品 */}
      <HeroEECommonRelatedProducts {...l16sRelatedProductsProps} />
    </div>
  );
}
