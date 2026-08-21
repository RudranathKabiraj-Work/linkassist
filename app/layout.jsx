import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Link Assist — Your LinkedIn Team. Inside One Software.',
  description:
    'Link Assist replaces the work of a LinkedIn strategist, content researcher, writer, editor and engagement manager with one intelligent platform — so founders build authority, stay consistent and attract inbound clients.',
  keywords: 'LinkedIn growth, personal brand, LinkedIn content, founders, B2B, LinkedIn tool',
  openGraph: {
    title: 'Link Assist — Your LinkedIn Team. Inside One Software.',
    description:
      'Turn LinkedIn into your most profitable client acquisition channel. Built for founders of service businesses.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
