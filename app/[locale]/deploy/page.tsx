'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { ArrowLeft, Terminal, Download, Rocket, CheckCircle2, Code2, Container } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function DeployGuide() {
  const t = useTranslations('deploy');
  const tNav = useTranslations('nav');
  const tHome = useTranslations('home');

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
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium hover:text-green-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{tNav('backToHome')}</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20 mb-6">
              <Container className="w-3 h-3" />
              <span>{t('badge')}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              {t('title')}
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Step 1: Install Docker */}
          <div className="mb-12 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-green-400 font-bold text-lg group-hover:scale-110 transition-transform">
                1
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <Download className="w-6 h-6 text-green-400" />
                  {t('step1Title')}
                </h2>
                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                  <p className="text-slate-300 mb-4">
                    {t('step1Description')}
                  </p>
                  <a
                    href="https://www.docker.com/get-started"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-green-400 font-medium rounded-lg transition-all border border-slate-700 hover:border-green-500/50"
                  >
                    <Download className="w-4 h-4" />
                    {t('step1Button')}
                  </a>
                  <div className="mt-4 flex items-start gap-2 text-sm text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{t('step1Check')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Clone Repository */}
          <div className="mb-12 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-green-400 font-bold text-lg group-hover:scale-110 transition-transform">
                2
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-green-400" />
                  {t('step2Title')}
                </h2>
                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                  <p className="text-slate-300 mb-4">
                    {t('step2Description')}
                  </p>
                  <div className="relative group/code">
                    <div className="absolute top-3 right-3 text-xs text-slate-500 font-mono">bash</div>
                    <pre className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto">
                      <code className="text-green-400 font-mono text-sm">git clone https://github.com/openclaw/openclaw.git</code>
                    </pre>
                  </div>
                  <div className="mt-4 flex items-start gap-2 text-sm text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{t('step2Check')} <code className="text-green-400 bg-slate-800 px-2 py-0.5 rounded">cd OpenClaw</code></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Start Container */}
          <div className="mb-12 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-green-400 font-bold text-lg group-hover:scale-110 transition-transform">
                3
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-green-400" />
                  {t('step3Title')}
                </h2>
                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                  <p className="text-slate-300 mb-4">
                    {t('step3Description')}
                  </p>
                  <div className="relative group/code">
                    <div className="absolute top-3 right-3 text-xs text-slate-500 font-mono">bash</div>
                    <pre className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto">
                      <code className="text-green-400 font-mono text-sm">docker-compose up -d</code>
                    </pre>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span><code className="text-green-400 bg-slate-800 px-2 py-0.5 rounded">-d</code> {t('step3Check1')}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{t('step3Check2')}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{t('step3Check3')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Banner */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Rocket className="w-32 h-32 text-green-400" />
            </div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">{t('successTitle')}</h3>
              </div>
              <p className="text-slate-300 mb-6">
                {t('successDescription')}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/openclaw/openclaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-500 hover:bg-green-400 text-slate-950 font-bold rounded-lg transition-all"
                >
                  {t('successButton1')}
                </a>
                <Link
                  href="/"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-all border border-slate-700"
                >
                  {t('successButton2')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-12 text-center text-slate-500 text-sm">
        <p>{tHome('footerCopyright')}</p>
        <p className="mt-2 text-slate-600">{tHome('footerDisclaimer')}</p>
      </footer>
    </div>
  );
}
