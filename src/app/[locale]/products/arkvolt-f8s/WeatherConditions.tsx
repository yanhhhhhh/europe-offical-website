import HeroEECommonSection from '@/components/HeroEECommonSection';
import { f8sWeatherConditions } from '@/constants/products/f8s';
import { getTranslations } from 'next-intl/server';

export default async function OperatingTemperatureRange() {
  const t = await getTranslations();
  const f8sWeatherConditionsProps = {
    ...f8sWeatherConditions,
    title: t(f8sWeatherConditions.title),
    description: t(f8sWeatherConditions.description),
  };
  return <HeroEECommonSection {...f8sWeatherConditionsProps} />;
}
