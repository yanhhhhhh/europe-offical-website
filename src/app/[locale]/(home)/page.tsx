import { locales } from '@/constants/navigation';
import { HomeBanner } from './banner';

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
    </>
  );
}
