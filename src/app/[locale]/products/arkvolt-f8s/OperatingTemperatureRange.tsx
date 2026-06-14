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
      <div className="absolute left-[348px] bottom-[150px] text-[110px] text-white">
        -20℃
      </div>
      <div className="absolute right-[348px] bottom-[150px] text-[110px] text-white">
        55℃
      </div>
    </div>
  );
}
