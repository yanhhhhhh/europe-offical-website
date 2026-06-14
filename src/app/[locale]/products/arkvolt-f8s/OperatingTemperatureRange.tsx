import { f8sOperatingTemperatureRange } from '@/constants/products/f8s';
import HeroEECommonSection from '@/components/HeroEECommonSection';
import { getTranslations } from 'next-intl/server';
export default async function OperatingTemperatureRange() {
  const t = await getTranslations();
  const f8sOperatingTemperatureRangeProps = {
    ...f8sOperatingTemperatureRange,
    title: t(f8sOperatingTemperatureRange.title),
    description: t(f8sOperatingTemperatureRange.description),
  };

  return (
    <div className="relative">
      <HeroEECommonSection {...f8sOperatingTemperatureRangeProps} />
      <div className="absolute lg:left-[348px] left-[60px] lg:bottom-[150px] bottom-[80px] lg:text-[110px] text-white text-[80px]">
        -20℃
      </div>
      <div className="absolute lg:right-[348px] right-[60px] lg:bottom-[150px] bottom-[80px] lg:text-[110px] text-white text-[80px]">
        55℃
      </div>
    </div>
  );
}
