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
      <div className="absolute left-[348px] bottom-[150px] text-[110px] text-white">
        -20℃
      </div>
      <div className="absolute right-[348px] bottom-[150px] text-[110px] text-white">
        55℃
      </div>
    </div>
  );
}
