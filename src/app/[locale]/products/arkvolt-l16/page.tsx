import {
  l16Banner,
  l16RelatedProducts,
  l16FlexibleCapacity,
  l16WeatherConditions,
  l16CycleLife,
} from '@/constants/products/l16';
import { getTranslations } from 'next-intl/server';
import HeroEECommonRelatedProducts from '@/components/HeroEECommonRelatedProducts';

import { getRelatedProductsProps } from '../utils';
import { HeroCardProps, HeroCard } from '@/components/HeroCard';
import HeroEECommonSection from '@/components/HeroEECommonSection';

import OperatingTemperatureRange from './OperatingTemperatureRange';

const l16BannerProps: HeroCardProps = {
  ...l16Banner,
  backgroundImage: l16Banner.image,
  mobileBackgroundImage: l16Banner.mobileImage,
  cardClassName: 'lg:!justify-start ',
  cardContentClassName:
    'lg:!pt-[140px]  lg:!px-[346px] lg:!items-start lg:!text-left  !pt-[105px]  ',
};

export default async function ArkvoltL16Page() {
  const t = await getTranslations();
  const l16CycleLifeProps = {
    ...l16CycleLife,
    title: t(l16CycleLife.title),
    description: t(l16CycleLife.description),
  };
  const l16FlexibleCapacityProps = {
    ...l16FlexibleCapacity,
    title: t(l16FlexibleCapacity.title),
    description: t(l16FlexibleCapacity.description),
  };
  const l16WeatherConditionsProps = {
    ...l16WeatherConditions,
    title: t(l16WeatherConditions.title),
    description: t(l16WeatherConditions.description),
  };
  const l16RelatedProductsProps =
    await getRelatedProductsProps(l16RelatedProducts);
  return (
    <div className="arkvolt-l16-page">
      <HeroCard {...l16BannerProps} />
      {/* Cycle Life */}
      <HeroEECommonSection {...l16CycleLifeProps} />
      {/* FlexibleCapacity */}
      <HeroEECommonSection {...l16FlexibleCapacityProps} />
      {/* 天气适应性 */}

      <HeroEECommonSection {...l16WeatherConditionsProps} />
      {/* 工作温度范围 */}
      <OperatingTemperatureRange />
      {/* 相关产品 */}
      <HeroEECommonRelatedProducts {...l16RelatedProductsProps} />
    </div>
  );
}
