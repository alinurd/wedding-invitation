// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { AudioProvider } from '@/lib/context/AudioContext';
import {COUPLES, WEDDING_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Ali & Ia - Wedding Invitation',
  description: `Undangan Pernikahan ${COUPLES.groom.name} & ${COUPLES.bride.name} | ${WEDDING_INFO.formattedDate} | Lokasi: ${WEDDING_INFO.location.resepsi}`,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AudioProvider>
          {children}
        </AudioProvider>
      </body>
    </html>
  );
}
