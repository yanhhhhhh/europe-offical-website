import { downloadsBanner } from '@/constants/service/download';

import {
  HeroServerCard,
  HeroServerCardProps,
} from '@/components/HeroServerCard';

// import UserManual from './userManual';

const Download = () => {
  const downloadManualBannerProps: HeroServerCardProps = {
    ...downloadsBanner,
    backgroundImage: downloadsBanner.image.src,
    backgroundMobileImage: downloadsBanner.mobileImage.src,

    contentClassName:
      'lg:!mt-[116px] !mt-[200px] lg:!items-start !items-center lg:w-[620px] w-full',
    cardClassName:
      'lg:pl-[376px] pl-0 lg:!justify-start !justify-center lg:!h-[600px]',
    titleClassName: 'mb-[20px]',
  };

  return (
    <div className="download-manual">
      <HeroServerCard {...downloadManualBannerProps}></HeroServerCard>
      {/* <div id="HeroEEDownload_manual">{<UserManual />}</div> */}
    </div>
  );
};

export default Download;
