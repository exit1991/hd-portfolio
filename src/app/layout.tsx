import * as GoogleFonts from '../styles/ts/fonts';
import type { Metadata } from 'next';
import 'ress';
import '../styles/sass/style.scss';

export const metadata: Metadata = {
  title: 'hdeg works',
  description: 'hdeg の制作物紹介サイト',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${GoogleFonts.poiretOne.variable} ${GoogleFonts.notojp.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
