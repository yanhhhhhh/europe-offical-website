import r30BannerImage from '@/assets/images/products/r30/pc/05-01.webp';
import r30MobileBannerImage from '@/assets/images/products/r30/mobile/05-01.webp';
import r30CycleLifeImage from '@/assets/images/products/r30/pc/05-03.webp';
import r30MobileCycleLifeImage from '@/assets/images/products/r30/mobile/05-03.webp';

import r30FlexibleCapacityImage from '@/assets/images/products/r30/pc/05-04.webp';
import r30MobileFlexibleCapacityImage from '@/assets/images/products/r30/mobile/05-04.webp';

import { ArkvoltF8s, ArkvoltL16, ArkvoltL16s } from '.';
import { defaultHeroEECommonSectionAnimation } from '../motionVariants';
export const r30Banner = {
  title: 'products.r30.bannerTitle',
  description: 'products.r30.bannerDescription',
  id: 'banner-r30',
  image: r30BannerImage, //图片地址
  mobileImage: r30MobileBannerImage, //移动端图片地址
  download: '/service/downloads/arkvolt-r30', //手册下载
  more: '/products/arkvolt-r30', //了解更多链接
};
export const r30CycleLife = {
  title: 'products.r30.cycleLifeTitle',
  description: 'products.r30.cycleLifeDescription',
  image: r30CycleLifeImage,
  mobileImage: r30MobileCycleLifeImage,

  mobileImageClassName: 'w-full !h-[654px] top-auto bottom-0 mx-auto ',
  imageClassName: '',
  contentClassName:
    'lg:top-[223px] lg:left-[346px] lg:!justify-start lg:text-left lg:!items-start lg:!w-[500px] top-[69px] px-[98px] lg:px-0 items-center text-center',
  ...defaultHeroEECommonSectionAnimation,
};

export const r30FlexibleCapacity = {
  title: 'products.r30.flexibleCapacityTitle',
  description: 'products.r30.flexibleCapacityDescription',
  image: r30FlexibleCapacityImage,
  mobileImage: r30MobileFlexibleCapacityImage,

  contentClassName:
    'lg:px-[346px] lg:pt-[220px] lg:!justify-start lg:text-left items-start px-[40px] pt-[86px]',
  descriptionClassName: 'lg:w-[657px]',
  mobileImageClassName: '!size-[620px] left-[65px] top-[600px]',
  imageClassName: '!size-[620px] top-[90px] left-auto !right-[216px]',
  ...defaultHeroEECommonSectionAnimation,
};

export const r30RelatedProducts = [ArkvoltL16s, ArkvoltL16, ArkvoltF8s];
