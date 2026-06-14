import l16sBannerImage from '@/assets/images/products/l16s/pc/03-01.webp';
import l16sMobileBannerImage from '@/assets/images/products/l16s/mobile/03-01.webp';
import l16sCycleLifeImage from '@/assets/images/products/l16s/pc/03-04.webp';
import l16sMobileCycleLifeImage from '@/assets/images/products/l16s/mobile/03-04.webp';

import l16sFlexibleCapacityImage from '@/assets/images/products/l16s/pc/03-05.webp';
import l16sMobileFlexibleCapacityImage from '@/assets/images/products/l16s/mobile/03-05.webp';

import l16sWeatherConditionsImage from '@/assets/images/products/l16s/pc/03-06.webp';
import l16sMobileWeatherConditionsImage from '@/assets/images/products/l16s/mobile/03-06.webp';
import l16sOperatingTemperatureRangeImage from '@/assets/images/products/l16s/pc/03-07.webp';
import l16sMobileOperatingTemperatureRangeImage from '@/assets/images/products/l16s/mobile/03-07.webp';
import { ArkvoltF8s, ArkvoltL16, ArkvoltR30 } from '.';
import { defaultHeroEECommonSectionAnimation } from '../motionVariants';
export const l16sBanner = {
  title: 'products.l16s.bannerTitle',
  description: 'products.l16s.bannerDescription',
  id: 'banner-L16S',
  image: l16sBannerImage, //图片地址
  mobileImage: l16sMobileBannerImage, //移动端图片地址
  download: 'service/download/l16s', //手册下载
  more: 'products/arkvolt-l16s', //了解更多链接
};
export const l16sCycleLife = {
  title: 'products.l16s.cycleLifeTitle',
  description: 'products.l16s.cycleLifeDescription',
  image: l16sCycleLifeImage,
  mobileImage: l16sMobileCycleLifeImage,

  mobileImageClassName: 'w-full !h-[654px] top-auto bottom-0 mx-auto ',
  imageClassName: '!w-[734px] !h-[654px] top-[80px] !left-[298px] !mx-0',
  contentClassName:
    'lg:top-[223px] left-auto lg:right-[350px] lg:!justify-start lg:text-left lg:!items-start lg:!w-[500px] top-[69px] px-[98px] lg:px-0 items-center text-center',
  ...defaultHeroEECommonSectionAnimation,
};

export const l16sFlexibleCapacity = {
  title: 'products.l16s.flexibleCapacityTitle',
  description: 'products.l16s.flexibleCapacityDescription',
  image: l16sFlexibleCapacityImage,
  mobileImage: l16sMobileFlexibleCapacityImage,

  contentClassName:
    'lg:px-[346px] lg:pt-[220px] lg:!justify-start lg:text-left items-start px-[40px] pt-[86px]',
  descriptionClassName: 'lg:w-[657px]',
  mobileImageClassName: '!size-[620px] left-[65px] top-[600px]',
  imageClassName: '!size-[620px] top-[90px] left-auto !right-[216px]',
  ...defaultHeroEECommonSectionAnimation,
};
export const l16sWeatherConditions = {
  title: 'products.l16s.weatherConditionsTitle',
  description: 'products.l16s.weatherConditionsDescription',
  image: l16sWeatherConditionsImage,
  mobileImage: l16sMobileWeatherConditionsImage,
  contentClassName: 'px-[44px]  !items-center text-center',
  mobileImageClassName: 'w-full !h-[808px] top-auto bottom-0 mx-auto ',
  imageClassName: '!w-[1088px] !h-[542px] top-auto bottom-0 ',
  ...defaultHeroEECommonSectionAnimation,
};
export const l16sOperatingTemperatureRange = {
  title: 'products.l16s.operatingTemperatureRangeTitle',
  description: 'products.l16s.operatingTemperatureRangeDescription',
  image: l16sOperatingTemperatureRangeImage,
  mobileImage: l16sMobileOperatingTemperatureRangeImage,
  contentClassName: 'lg:!pt-[50px] items-center text-center',
  descriptionClassName: 'lg:pt-[590px] pt-[950px] !text-[12px]  text-white/60',
  mobileImageClassName: '',
  imageClassName: '',
  ...defaultHeroEECommonSectionAnimation,
};
export const l16sRelatedProducts = [ArkvoltF8s, ArkvoltL16, ArkvoltR30];
