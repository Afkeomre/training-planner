import { M_PLUS_Rounded_1c } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Container from '@/components/ui/Container';

const mPlus = M_PLUS_Rounded_1c({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Дневник тренировок',
  description: 'Планируй тренировки, отслеживай прогресс',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16' },
      { url: '/favicon-32x32.png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Дневник тренировок',
    description:
      'Создавай планы тренировок, отмечай выполнение и смотри статистику',
    url: 'https://example.vercel.app', // будет домен после деплоя
    siteName: 'Дневник тренировок',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru" className={`${mPlus.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main className="flex-1">
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  );
}
