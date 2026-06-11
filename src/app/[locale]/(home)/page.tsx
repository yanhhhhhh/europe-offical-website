import { locales, type Locale } from '@/constants/navigation';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map(({ code }) => ({ locale: code }));
}

export default async function LocaleHome({ params }: PageProps) {
  const { locale: localeParam } = await params;

  const locale = localeParam as Locale;

  return <main className="site-shell">home page - {locale}</main>;
}
