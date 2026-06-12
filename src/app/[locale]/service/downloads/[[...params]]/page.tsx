import { downloadsBanner } from '@/constants/service/download';

import {
  HeroServerCard,
  HeroServerCardProps,
} from '@/components/HeroServerCard';

import UserManual from './userManual';

const Download = () => {
  const downloadManualBannerProps: HeroServerCardProps = {
    ...downloadsBanner,
    backgroundImage: downloadsBanner.image.src,
    backgroundMobileImage: downloadsBanner.mobileImage.src,
    contentClassName: 'lg:!mt-[96px] !mt-[105px]   w-full',
    titleClassName: 'mb-[20px]',
  };

  return (
    <div className="download-manual">
      <HeroServerCard {...downloadManualBannerProps}></HeroServerCard>
      <div id="HeroEEDownload_manual">{<UserManual />}</div>
    </div>
  );
};

export default Download;
