'use client';

import React from 'react';
import { Github, Terminal, ArrowRight, Zap, BookOpen, Globe, Command, Cpu, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const t = useTranslations('home');
  const tNav = useTranslations('nav');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-green-500/30 font-sans">
      {/* Navbar */}
      <nav className="border-b border-slate-800/60 backdrop-blur-md fixed w-full z-50 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
            <Terminal className="w-6 h-6 text-green-400" />
            <span>OpenClaw<span className="text-green-400">101</span></span>
          </div>
          <div className="flex items-center gap-6">
            <LanguageSwitcher />
            <a
              href="https://github.com/openclaw/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-green-400 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">{tNav('github')}</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-24 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
              <Globe className="w-3 h-3" />
              <span>{t('badge')}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              {t('title').split(' ').slice(0, -2).join(' ')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">{t('title').split(' ').slice(-2, -1).join(' ')}</span>
              <br />{t('title').split(' ').slice(-1).join(' ')}
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {t('subtitle')} <br />
              <span className="text-slate-500 text-base">{t('description')}</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4 relative z-10">
              <a href="#deploy" className="px-8 py-3 bg-green-500 hover:bg-green-400 text-slate-950 font-bold rounded-full transition-all flex items-center gap-2 cursor-pointer">
                {t('startBuilding')} <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://github.com/openclaw/openclaw" target="_blank" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-full transition-all border border-slate-700 cursor-pointer">
                {t('viewOnGitHub')}
              </a>
            </div>
          </div>

          {/* Supported Platforms (Logo Wall) */}
          <div className="mb-24">
            <h3 className="text-center text-slate-500 text-sm font-semibold uppercase tracking-wider mb-8">
              {t('platformsTitle')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <PlatformCard name="Discord" icon={<DiscordIcon />} />
              <PlatformCard name="Telegram" icon={<TelegramIcon />} />
              <PlatformCard name="WhatsApp" icon={<WhatsAppIcon />} />
              <PlatformCard name="Slack" icon={<SlackIcon />} />
              <PlatformCard name="iMessage" icon={<AppleIcon />} />
              <PlatformCard name="Feishu" icon={<FeishuIcon />} />
            </div>
          </div>

          {/* Featured Use Cases */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {t('featuredTitle')}
              </h2>
              <p className="text-slate-400">
                {t('featuredSubtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
              <Link
                href="/cases/stock"
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300 relative overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                  <TrendingUp className="w-24 h-24 text-blue-500" />
                </div>
                <div className="flex items-start gap-6 relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform flex-shrink-0">
                    📈
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {t('caseStockTitle')}
                    </h3>
                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {t('caseStockDescription')}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-blue-400">
                      {t('caseStockLink')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Core Resources Grid */}
          <div className="grid md:grid-cols-2 gap-6" id="resources">
            {/* Card 1: Core */}
            <a
              href="https://github.com/openclaw/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-green-500/50 hover:bg-slate-900/80 transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Cpu className="w-24 h-24" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform relative z-10">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors relative z-10">{t('coreTitle')}</h2>
              <p className="text-slate-400 mb-6 relative z-10">
                {t('coreDescription')}
                <br /><span className="text-sm opacity-70">{t('coreSubDescription')}</span>
              </p>
              <div className="flex items-center text-sm font-semibold text-green-400 relative z-10">
                {t('coreLink')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 2: Plugins */}
            <a
              href="https://github.com/m1heng/clawdbot-feishu"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Command className="w-24 h-24 text-blue-500" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform relative z-10">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors relative z-10">{t('pluginsTitle')}</h2>
              <p className="text-slate-400 mb-6 relative z-10">
                {t('pluginsDescription')}
                <br /><span className="text-sm opacity-70">{t('pluginsSubDescription')}</span>
              </p>
              <div className="flex items-center text-sm font-semibold text-blue-400 relative z-10">
                {t('pluginsLink')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 3: Tutorial (Full Width) */}
            <div id="deploy" className="md:col-span-2 group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <BookOpen className="w-32 h-32" />
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center mb-4 text-purple-400">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">{t('deployTitle')}</h2>
                  <p className="text-slate-400 max-w-lg">
                    {t('deployDescription')}
                    <br /><span className="text-sm opacity-70">{t('deploySubDescription')}</span>
                  </p>
                </div>
                <Link href="/deploy" className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-400 text-slate-950 font-bold transition-all flex items-center gap-2 relative z-10">
                  {t('deployLink')} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-12 text-center text-slate-500 text-sm">
        <p>{t('footerCopyright')}</p>
        <p className="mt-2 text-slate-600">{t('footerDisclaimer')}</p>
      </footer>
    </div>
  );
}

// --- Icons & Components ---

function PlatformCard({ name, icon }: { name: string, icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 transition-all group cursor-default">
      <div className="text-slate-400 group-hover:text-white group-hover:scale-110 transition-all mb-3">
        {icon}
      </div>
      <span className="text-xs font-medium text-slate-500 group-hover:text-slate-300">{name}</span>
    </div>
  );
}

// Custom SVGs for Brands to avoid external heavy libraries
const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const SlackIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.52v-6.315zm8.834-5.042a2.528 2.528 0 0 1 2.521-2.521A2.528 2.528 0 0 1 20.19 10.123a2.528 2.528 0 0 1-2.521 2.521h-2.521v-2.521zm-1.26 0a2.528 2.528 0 0 1-2.521 2.521 2.527 2.527 0 0 1-2.52-2.521V3.81A2.528 2.528 0 0 1 11.388 1.29 2.528 2.528 0 0 1 13.887 3.81v6.313zm-3.78 7.562a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521 2.527 2.527 0 0 1 2.521-2.52h2.521v2.52zm0-1.26a2.528 2.528 0 0 1 2.521-2.521 2.527 2.527 0 0 1 2.521 2.521v6.313A2.528 2.528 0 0 1 11.388 22.71a2.528 2.528 0 0 1-2.52-2.52v-6.314zM2.52 8.834a2.528 2.528 0 0 1 2.522-2.521 2.528 2.528 0 0 1 2.52 2.521 2.528 2.528 0 0 1-2.52 2.521h-2.522V8.834zm3.792 1.26a2.528 2.528 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v-6.314A2.528 2.528 0 0 1 8.834 1.26a2.528 2.528 0 0 1-2.521 2.52v6.314z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

const FeishuIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-400">
    <path d="M22.37 12.75a6.04 6.04 0 0 0 .39-2.52c-.17-1.7-.93-3.16-2.16-4.25-1.63-1.45-3.8-1.92-5.9-1.55a.86.86 0 0 1-.78-.28 5.48 5.48 0 0 0-4.42-1.73c-1.75.1-3.32.96-4.43 2.3A6.16 6.16 0 0 0 4.1 9.5a.84.84 0 0 1-.36.68 5.58 5.58 0 0 0-2.3 4.14c-.2 1.63.26 3.25 1.3 4.54a5.8 5.8 0 0 0 4.6 2.06c.44 0 .88-.04 1.3-.12a.85.85 0 0 1 .86.27 5.76 5.76 0 0 0 4.43 1.96c1.8 0 3.48-.8 4.6-2.15a5.9 5.9 0 0 0 1.25-4.45.86.86 0 0 1 .37-.73c.8-.57 1.44-1.38 1.83-2.3.18-.42.3-.87.4-1.33v-.32zM8.33 13.43l3.6-5.87a.5.5 0 0 1 .91.13l.87 6.43a.5.5 0 0 1-.6.54l-2.07-.63a.5.5 0 0 0-.29 0l-2.13.62a.5.5 0 0 1-.61-.53l.32-6.43z" />
  </svg>
);
