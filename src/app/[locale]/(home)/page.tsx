import { locales } from '@/constants/navigation';
import { HomeBanner } from './banner';
import HomeCooperate from './Cooperate';
import HomeAboutUs from './AboutUs';
import ProductsAdvantages from './ProductsAdvantages';
import EnergySolutions from './EngerySolutions';
import HomeProducts from './Products';
type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map(({ code }) => ({ locale: code }));
}

export default async function LocaleHome({ params }: PageProps) {
  await params;

  return (
    <>
      <HomeBanner />
      <EnergySolutions />
      <HomeProducts />
      <ProductsAdvantages />
      <HomeAboutUs />
      <HomeCooperate />
    </>
  );
}
