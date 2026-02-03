import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'stockCase' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
    keywords: ["港股IPO", "股票监控", "OpenClaw", "Clawdbot", "飞书机器人", "打新提醒", "A股监控", "HK IPO Monitor", "Stock Alert Bot"],
    openGraph: {
      title: t('meta_title'),
      description: t('meta_description'),
      url: "https://openclaw101.com/cases/stock",
      siteName: "OpenClaw 101",
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      type: "article",
    },
  };
}

export default function StockCaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
