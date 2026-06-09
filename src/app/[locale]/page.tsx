import { getTranslations } from 'next-intl/server';
import { locales, type Locale } from '@/constants/navigation';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map(({ code }) => ({ locale: code }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleHome({ params }: PageProps) {
  const { locale: localeParam } = await params;

  const locale = localeParam as Locale;
  const t = await getTranslations('Home');
  const nav = await getTranslations('Navigation');

  return <main className="site-shell">home page - {locale}</main>;
}
