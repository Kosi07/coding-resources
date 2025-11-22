import type { Metadata } from 'next';
import './globals.css';

import { sfpro } from '@/utils/Fonts';

export const metadata: Metadata = {
  title: 'Coding Resources',
  description: 'Coding resources for everyone.',
  openGraph: {
    title: 'Coding Resources',
    description: 'Curated list of coding resources for everyone',
    url: 'https://coding-resources-pond.vercel.app',
    siteName: 'Coding Resources',
    images: [
      {
        url: 'https://coding-resources-pond.vercel.app/opengraph.jpeg',
        width: 1200,
        height: 630,
      },
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={` ${sfpro.className} antialiased flex flex-col gap-6 p-2`}
      >
        {children}
      </body>
    </html>
  );
}
