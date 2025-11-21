import type { Metadata } from 'next';
import './globals.css';

import { sfpro } from '@/utils/Fonts';

export const metadata: Metadata = {
  title: 'coding resources',
  description: 'Coding resources for everyone.',
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
