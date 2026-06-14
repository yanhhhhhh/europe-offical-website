import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import { routing } from '@/i18n/routing';
import { Header, Footer } from '@/components';
import BackToTop from '@/components/backToTop';

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </NextIntlClientProvider>
  );
}
