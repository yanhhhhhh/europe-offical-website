import fsBannerImage from '@/assets/images/products/f8s/02-01.webp';
import fsMobileBannerImage from '@/assets/images/products/f8s/02-01-m.webp';

import f8sProductAdvantageImage from '@/assets/images/products/f8s/02-02.webp';
import f8sMobileProductAdvantageImage from '@/assets/images/products/f8s/02-02-m.webp';

import f8sCycleLifeImage from '@/assets/images/products/f8s/02-05.webp';
import f8sMobileCycleLifeImage from '@/assets/images/products/f8s/02-05-m.webp';
import f8sFlexibleCapacityImage from '@/assets/images/products/f8s/02-06.webp';
import f8sMobileFlexibleCapacityImage from '@/assets/images/products/f8s/02-06-m.webp';

import f8sWeatherConditionsImage from '@/assets/images/products/f8s/02-07.webp';
import f8sMobileWeatherConditionsImage from '@/assets/images/products/f8s/02-07-m.webp';
import f8sOperatingTemperatureRangeImage from '@/assets/images/products/f8s/02-08.webp';
import f8sMobileOperatingTemperatureRangeImage from '@/assets/images/products/f8s/02-08-m.webp';
import { ArkvoltL16s, ArkvoltL16, ArkvoltR30 } from './index';
import { defaultHeroEECommonSectionAnimation } from '../motionVariants';

export const f8sBanner = {
  title: 'products.f8s.bannerTitle',
  description: 'products.f8s.bannerDescription',
  id: 'banner-F8S',
  image: fsBannerImage,
  mobileImage: fsMobileBannerImage,
  download: '/service/downloads/arkvolt-f8s', //手册下载
  more: '/products/arkvolt-f8s', //了解更多链接
};
export const f8sProductAdvantage = {
  title: 'products.f8s.advantageTitle',
  description: 'products.f8s.advantageDescription',
  image: f8sProductAdvantageImage,
  mobileImage: f8sMobileProductAdvantageImage,
};
export const f8sFeatures = [];

export const f8sCycleLife = {
  title: 'products.f8s.cycleLifeTitle',
  description: 'products.f8s.cycleLifeDescription',
  image: f8sCycleLifeImage,
  mobileImage: f8sMobileCycleLifeImage,

  mobileImageClassName: 'w-full !h-[654px] top-auto bottom-0 mx-auto ',
  imageClassName: '!w-[734px] !h-[654px] top-[80px] !left-[298px] !mx-0',
  contentClassName:
    'lg:top-[223px] left-auto lg:right-[350px] lg:!justify-start lg:text-left lg:!items-start lg:!w-[500px] top-[69px] px-[98px] lg:px-0 items-center text-center',
  ...defaultHeroEECommonSectionAnimation,
};

export const f8sFlexibleCapacity = {
  title: 'products.f8s.flexibleCapacityTitle',
  description: 'products.f8s.flexibleCapacityDescription',
  image: f8sFlexibleCapacityImage,
  mobileImage: f8sMobileFlexibleCapacityImage,

  contentClassName:
    'lg:px-[346px] lg:pt-[220px] lg:!justify-start lg:text-left items-start px-[40px] pt-[86px]',
  descriptionClassName: 'lg:w-[657px]',
  mobileImageClassName: '!size-[620px] left-[65px] top-[600px]',
  imageClassName: '!size-[620px] top-[90px] left-auto !right-[216px]',
  ...defaultHeroEECommonSectionAnimation,
};
export const f8sWeatherConditions = {
  title: 'products.f8s.weatherConditionsTitle',
  description: 'products.f8s.weatherConditionsDescription',
  image: f8sWeatherConditionsImage,
  mobileImage: f8sMobileWeatherConditionsImage,
  contentClassName: 'px-[44px]  !items-center text-center',
  mobileImageClassName: 'w-full !h-[808px] top-auto bottom-0 mx-auto ',
  imageClassName: '!w-[1088px] !h-[542px] top-auto bottom-0 ',
  ...defaultHeroEECommonSectionAnimation,
};
export const f8sOperatingTemperatureRange = {
  title: 'products.f8s.operatingTemperatureRangeTitle',
  description: 'products.f8s.operatingTemperatureRangeDescription',
  image: f8sOperatingTemperatureRangeImage,
  mobileImage: f8sMobileOperatingTemperatureRangeImage,
  contentClassName: 'items-center text-center',
  descriptionClassName: 'lg:pt-[540px] !text-[12px]  text-white/60',
  mobileImageClassName: '',
  imageClassName: '',
  ...defaultHeroEECommonSectionAnimation,
};

export const f8sRelatedProducts = [ArkvoltL16s, ArkvoltL16, ArkvoltR30];
