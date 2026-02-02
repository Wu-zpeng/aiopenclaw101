import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { getTranslations, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    title: {
      template: "%s | OpenClaw 101",
      default: "OpenClaw 101 - " + t('title'),
    },
    description: t('description'),
    keywords: ["OpenClaw", "Clawdbot", "AI Agent", "Local-First AI", "飞书机器人", "Moltbot", "Docker Deployment"],
    openGraph: {
      title: "OpenClaw 101 - " + t('title'),
      description: t('description'),
      url: "https://openclaw101.com",
      siteName: "OpenClaw 101",
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
