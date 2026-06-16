import { homeBannerList } from '@/constants/home';

import { HeroCardProps } from '@/components/HeroCard';
import MySwiper from '@/components/swiper';

const bannerListProps: HeroCardProps[] = homeBannerList.map((item) => {
  return {
    ...item,
    backgroundImage: item.image,
    mobileBackgroundImage: item.mobileImage,
    cardClassName: 'lg:!justify-start ',
    cardContentClassName:
      'lg:!pt-[140px]  lg:!px-[346px] lg:!items-start lg:!text-left  !pt-[105px]  ',
    // 仅首张为 LCP 优先
    isPriority: true,
    descriptionClassName: 'lg:text-left lg:w-[540px]',
    fetchPriority: 'high',
    imageSizes: '(max-width: 1024px) 100vw, 100vw',
  };
});
export const HomeBanner = () => {
  return (
    <div className="home-banner">
      <MySwiper list={bannerListProps} />
    </div>
  );
};
