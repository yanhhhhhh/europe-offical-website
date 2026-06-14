import { f8sBanner } from './products/f8s';
import { l16Banner } from './products/l16';
import homeSolutionsHomeESSImage from '@/assets/images/home/01-02-01-m.webp';
import homeSolutionsCommercialESSImage from '@/assets/images/home/01-02-02-m.webp';

import homeAboutUsImage from '@/assets/images/home/01-05.webp';
import homeAboutUsMobileImage from '@/assets/images/home/01-05-m.webp';
import homeCooperateImage from '@/assets/images/home/01-07.webp';
import homeCooperateMobileImage from '@/assets/images/home/01-07-m.webp';
import { ArkvoltF8s, ArkvoltL16, ArkvoltL16s, ArkvoltR30 } from './products';

export const homeBannerList = [f8sBanner, l16Banner];
export const homeSolutions = {
  title: 'home.solutions.title',
  description: 'home.solutions.description',
  solutions: [
    {
      title: 'home.solutions.homeTitle',
      description: 'home.solutions.homeText',
      image: homeSolutionsHomeESSImage,
      mobileImage: homeSolutionsHomeESSImage,
    },
    {
      title: 'home.solutions.commercialTitle',
      description: 'home.solutions.commercialText',
      image: homeSolutionsCommercialESSImage,
      mobileImage: homeSolutionsCommercialESSImage,
    },
  ],
};
export const homeProducts = [ArkvoltL16s, ArkvoltF8s, ArkvoltL16, ArkvoltR30];
export const homeAboutUs = {
  title: 'home.aboutUs.title',
  description: 'home.aboutUs.description',
  image: homeAboutUsImage,
  mobileImage: homeAboutUsMobileImage,
};
export const homeCooperate = {
  title: 'home.cooperate.title',
  description: 'home.cooperate.description',
  image: homeCooperateImage,
  mobileImage: homeCooperateMobileImage,
  moreType: 'contactUs' as const,
  more: '/about-us/contact',
};
