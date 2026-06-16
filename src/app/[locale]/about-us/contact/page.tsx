'use client';
import { contactUsBanner } from '@/constants/contact';
import { HeroCard } from '@/components/HeroCard';
import Offices from './components/offices';
const bannerProps = {
  ...contactUsBanner,
  backgroundImage: contactUsBanner.image,
  mobileBackgroundImage: contactUsBanner.mobileImage,
  cardClassName: 'justify-start lg:!h-[600px]',

  cardContentClassName:
    'lg:!pt-[140px]  lg:!px-[346px] !items-start !text-left  !pt-[105px] pl-[44px]',
  descriptionClassName: 'lg:w-[604px] text-left w-[458px]',
};
const ContactUs = () => {
  return (
    <div className="bg-white">
      <HeroCard {...bannerProps}></HeroCard>
      <Offices />
    </div>
  );
};

export default ContactUs;
