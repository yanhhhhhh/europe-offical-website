import l16BannerImage from '@/assets/images/products/l16/pc/04-01.webp';
import l16MobileBannerImage from '@/assets/images/products/l16/mobile/04-01.webp';
import l16CycleLifeImage from '@/assets/images/products/l16/pc/04-04.webp';
import l16MobileCycleLifeImage from '@/assets/images/products/l16/mobile/04-04.webp';

import l16FlexibleCapacityImage from '@/assets/images/products/l16/pc/04-05.webp';
import l16MobileFlexibleCapacityImage from '@/assets/images/products/l16/mobile/04-05.webp';

import l16WeatherConditionsImage from '@/assets/images/products/l16/pc/04-06.webp';
import l16MobileWeatherConditionsImage from '@/assets/images/products/l16/mobile/04-06.webp';
import l16OperatingTemperatureRangeImage from '@/assets/images/products/l16/pc/04-07.webp';
import l16MobileOperatingTemperatureRangeImage from '@/assets/images/products/l16/mobile/04-07.webp';
import { ArkvoltF8s, ArkvoltL16, ArkvoltR30 } from '.';
import { defaultHeroEECommonSectionAnimation } from '../motionVariants';
export const l16Banner = {
  title: 'products.l16.bannerTitle',
  description: 'products.l16.bannerDescription',
  id: 'banner-L16',
  image: l16BannerImage, //图片地址
  mobileImage: l16MobileBannerImage, //移动端图片地址
  download: '/service/downloads/arkvolt-l16', //手册下载
  more: '/products/arkvolt-l16', //了解更多链接
};
export const l16CycleLife = {
  title: 'products.l16.cycleLifeTitle',
  description: 'products.l16.cycleLifeDescription',
  image: l16CycleLifeImage,
  mobileImage: l16MobileCycleLifeImage,

  mobileImageClassName: 'w-full !h-[654px] top-auto bottom-0 mx-auto ',
  imageClassName: '!w-[734px] !h-[654px] top-[80px] !left-[298px] !mx-0',
  contentClassName:
    'lg:top-[223px] lg:left-auto lg:right-[350px] lg:!justify-start lg:text-left lg:!items-start lg:!w-[500px] top-[69px] lg:px-0 items-center text-center px-[44px]',
  ...defaultHeroEECommonSectionAnimation,
};

export const l16FlexibleCapacity = {
  title: 'products.l16.flexibleCapacityTitle',
  description: 'products.l16.flexibleCapacityDescription',
  image: l16FlexibleCapacityImage,
  mobileImage: l16MobileFlexibleCapacityImage,

  contentClassName:
    'lg:px-[346px] lg:pt-[220px] lg:!justify-start lg:text-left items-start px-[40px] pt-[86px]',
  descriptionClassName: 'lg:w-[657px]',
  mobileImageClassName: '!size-[620px] left-[65px] top-[600px]',
  imageClassName: '',
  ...defaultHeroEECommonSectionAnimation,
};
export const l16WeatherConditions = {
  title: 'products.l16.weatherConditionsTitle',
  description: 'products.l16.weatherConditionsDescription',
  image: l16WeatherConditionsImage,
  mobileImage: l16MobileWeatherConditionsImage,
  contentClassName: 'px-[44px]  !items-center text-center',
  mobileImageClassName: 'w-full !h-[808px] top-auto bottom-0 mx-auto ',
  imageClassName: '!w-[1088px] !h-[542px] top-auto bottom-0 ',
  ...defaultHeroEECommonSectionAnimation,
};
export const l16OperatingTemperatureRange = {
  title: 'products.l16.operatingTemperatureRangeTitle',
  description: 'products.l16.operatingTemperatureRangeDescription',
  image: l16OperatingTemperatureRangeImage,
  mobileImage: l16MobileOperatingTemperatureRangeImage,
  contentClassName: 'lg:!pt-[50px] items-center text-center',
  descriptionClassName:
    'lg:pt-[600px] pt-[910px] text-white/60 !text-[12px] leading-[1.2]',
  mobileImageClassName: '',
  imageClassName: '',
  ...defaultHeroEECommonSectionAnimation,
};
export const l16RelatedProducts = [ArkvoltF8s, ArkvoltL16, ArkvoltR30];
