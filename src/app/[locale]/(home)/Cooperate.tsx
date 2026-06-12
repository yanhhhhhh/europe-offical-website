import { HeroCard, HeroCardProps } from '@/components/HeroCard';
import { homeCooperate } from '@/constants/home';
const homeCooperateBannerProps: HeroCardProps = {
  ...homeCooperate,
  backgroundImage: homeCooperate.image,
  mobileBackgroundImage: homeCooperate.mobileImage,
  cardContentClassName:
    'lg:w-[820px] pt-[90px] lg:!text-center !text-left px-[40px] items-start lg:items-center',
  descriptionClassName: 'lg:!text-[20px] text-left lg:text-center',
};
export default function HomeCooperate() {
  return <HeroCard {...homeCooperateBannerProps}></HeroCard>;
}
