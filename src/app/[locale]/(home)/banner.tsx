import { homeBannerList } from '@/constants/home';

import { HeroCardProps } from '@/components/HeroCard';
import MySwiper from '@/components/swiper';

const bannerListProps: HeroCardProps[] = homeBannerList.map((item) => {
  return {
    ...item,
    backgroundImage: item.image,
    mobileBackgroundImage: item.mobileImage,
    cardContentClassName: 'lg:!pt-[60px] !pt-[130px]',
    // 仅首张为 LCP 优先
    isPriority: true,
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
