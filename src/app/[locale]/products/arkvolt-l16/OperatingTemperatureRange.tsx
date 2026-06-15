import { l16OperatingTemperatureRange } from '@/constants/products/l16';
import HeroEECommonSection from '@/components/HeroEECommonSection';
import { getTranslations } from 'next-intl/server';
export default async function OperatingTemperatureRange() {
  const t = await getTranslations();
  const l16OperatingTemperatureRangeProps = {
    ...l16OperatingTemperatureRange,
    title: '',
    description: t(l16OperatingTemperatureRange.description),
  };

  return (
    <div className="relative">
      <HeroEECommonSection {...l16OperatingTemperatureRangeProps} />
      {/* <div className="absolute lg:left-[348px] left-[60px] lg:bottom-[150px] bottom-[80px] lg:text-[110px] text-white text-[80px]">
        -20℃
      </div>
      <div className="absolute lg:right-[348px] right-[60px] lg:bottom-[150px] bottom-[80px] lg:text-[110px] text-white text-[80px]">
        55℃
      </div> */}
    </div>
  );
}
