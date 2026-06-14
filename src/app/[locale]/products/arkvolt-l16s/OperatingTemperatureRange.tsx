import { l16sOperatingTemperatureRange } from '@/constants/products/l16s';
import HeroEECommonSection from '@/components/HeroEECommonSection';
import { getTranslations } from 'next-intl/server';
export default async function OperatingTemperatureRange() {
  const t = await getTranslations();
  const l16sOperatingTemperatureRangeProps = {
    ...l16sOperatingTemperatureRange,
    title: t(l16sOperatingTemperatureRange.title),
    description: t(l16sOperatingTemperatureRange.description),
  };

  return (
    <div className="relative">
      <HeroEECommonSection {...l16sOperatingTemperatureRangeProps} />
      <div className="absolute lg:left-[348px] left-[60px] lg:bottom-[150px] bottom-[80px] lg:text-[110px] text-white text-[80px]">
        -20℃
      </div>
      <div className="absolute lg:right-[348px] right-[60px] lg:bottom-[150px] bottom-[80px] lg:text-[110px] text-white text-[80px]">
        55℃
      </div>
    </div>
  );
}
