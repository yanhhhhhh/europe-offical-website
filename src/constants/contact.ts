import cantactBannerImage from '@/assets/images/contact/06-01.webp';
import cantactBannerMobileImage from '@/assets/images/contact/06-01-m.webp';

export const contactUsBanner = {
  title: 'contact.title',
  description: 'contact.description',
  image: cantactBannerImage,
  mobileImage: cantactBannerMobileImage,
};
export const offices = [
  {
    country: 'Germany',
    name: 'Hithium Energy Storage Technology Deutschland GmbH',
    address: 'Landsbergerstr.155, Munich, Germany',
    email: 'ress@hithium.com',
  },
  {
    country: 'Netherland',
    name: 'Hithium NL B.V.',
    address: 'Weena 505, 3013 AL, Rotterdam, the Netherlands',
    email: 'ress@hithium.com',
  },
  {
    country: 'China',
    name: 'Shenzhen Hithium Hero Energy Equity Technology Co., Ltd',
    address:
      'Room 1101, No. 500 Yunjin Road, Minhang District, Shanghai, China',
    email: 'ress@hithium.com',
  },
] as const;
