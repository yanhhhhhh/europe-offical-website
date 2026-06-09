import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HiTHIUM ARKVOLT',
  description:
    'HiTHIUM ARKVOLT Commercial & Industrial Energy Storage System, 工商业储能系统 | HiTHIUM ARKVOLT Residential Energy Storage System, 自研长寿命电芯, 户用储能系统',
  keywords: [
    'Hithium',
    'Hithium ARKVOLT',
    'HiTHIUM',
    'ARKVOLT',
    'arkvolt',
    'heroEE',
    '平权',
    '平权英雄',
    '海辰平权',
    '深圳海辰',
    '安全',
    '耐用',
    '海辰电芯',
    '储能',
    'Residential ESS',
    '家庭储能系统',
    'C&I Energy Storage System',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
