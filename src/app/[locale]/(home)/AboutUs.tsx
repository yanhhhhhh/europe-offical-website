import { HeroCard, HeroCardProps } from '@/components/HeroCard';
import { homeAboutUs } from '@/constants/home';
const homeAboutUsBannerProps: HeroCardProps = {
  ...homeAboutUs,
  backgroundImage: homeAboutUs.image,
  mobileBackgroundImage: homeAboutUs.mobileImage,
  cardContentClassName:
    'lg:w-[1332px] pt-[90px] lg:!text-center !text-left px-[40px] items-start lg:items-center',
  descriptionClassName: 'lg:!text-[20px] text-left lg:text-center',
};
export default function HomeAboutUs() {
  return <HeroCard {...homeAboutUsBannerProps}></HeroCard>;
}
