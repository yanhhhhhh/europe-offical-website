import { l16OperatingTemperatureRange } from '@/constants/products/l16';
import HeroEECommonSection from '@/components/HeroEECommonSection';
import { getTranslations } from 'next-intl/server';
export default async function OperatingTemperatureRange() {
  const t = await getTranslations();
  const l16OperatingTemperatureRangeProps = {
    ...l16OperatingTemperatureRange,
    title: t(l16OperatingTemperatureRange.title),
    description: t(l16OperatingTemperatureRange.description),
  };

  return (
    <div className="relative text-white">
      <HeroEECommonSection {...l16OperatingTemperatureRangeProps} />
      <div className="hidden lg:absolute lg:top-[106px] lg:left-[184px] lg:w-[420px] lg:text-[48px] font-bold">
        {t('products.l16.operatingTemperatureRangeTipFirst')}
      </div>
      <div className="hidden lg:absolute lg:top-[106px] lg:right-[174px] text-right lg:w-[349px] lg:text-[48px] font-bold">
        {t('products.l16.operatingTemperatureRangeTipSecond')}
      </div>

      <div className="absolute lg:left-[256px] left-[60px] lg:bottom-[210px] bottom-[80px]  ">
        <div className="lg:text-[60px] text-[80px]  text-white leading-[1.2]">
          -20℃
        </div>

        <div className=" lg:block hidden lg:text-[20px] text-white">
          {t('products.l16.minOperatingTemperature')}
        </div>
      </div>
      <div className="absolute lg:right-[239px] right-[60px] lg:bottom-[210px] bottom-[84px]  text-right">
        <div className="lg:text-[60px] text-[80px] text-[#FFBD81] leading-[1.2]">
          55℃
        </div>
        <div className="lg:block hidden lg:text-[20px]  text-white">
          {t('products.l16.maxOperatingTemperature')}
        </div>
      </div>
    </div>
  );
}
