'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { ArrowLeft, Terminal, Bell, Search, Send, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function StockIPOCase() {
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
              <span>返回首页</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20 mb-6">
              <Sparkles className="w-3 h-3" />
              <span>实战案例</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              3分钟搭建港股 IPO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">自动提醒机器人</span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed">
              总是错过港股打新？不想天天刷交易所网页？<br />
              <span className="text-green-400 font-medium">让 AI 帮你 24 小时盯着。</span>
            </p>
          </div>

          {/* Pain Points */}
          <div className="mb-12 p-6 rounded-xl bg-slate-900/50 border border-slate-800">
            <div className="flex items-start gap-4">
              <Bell className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">你是否遇到过这些问题？</h3>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>每天要手动打开港交所网站查看新 IPO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>错过了心仪公司的打新时间</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>想要第一时间获取 IPO 信息，但没时间盯盘</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Steps */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              只需三步，让 OpenClaw 帮你监控
            </h2>

            {/* Step 1 */}
            <div className="mb-8 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                    <ExternalLink className="w-6 h-6 text-green-400" />
                    告诉 OpenClaw 目标网站
                  </h3>
                  <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-green-500/30 transition-all">
                    <p className="text-slate-300 mb-4">
                      只需要用自然语言告诉 OpenClaw 你想监控的网站和时间：
                    </p>
                    <div className="relative group/code">
                      <div className="absolute top-3 right-3 text-xs text-slate-500 font-mono">指令示例</div>
                      <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto">
                        <p className="text-green-400 font-mono text-sm leading-relaxed">
                          "每天早上 9:00 打开 https://www.hkexnews.hk/，<br />
                          检查是否有新的 IPO 公告。"
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-start gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>OpenClaw 会自动理解你的意图，定时访问目标网站</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-8 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                    <Search className="w-6 h-6 text-blue-400" />
                    设定筛选条件
                  </h3>
                  <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all">
                    <p className="text-slate-300 mb-4">
                      告诉 OpenClaw 你关心的关键词和需要提取的信息：
                    </p>
                    <div className="relative group/code">
                      <div className="absolute top-3 right-3 text-xs text-slate-500 font-mono">指令示例</div>
                      <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto">
                        <p className="text-blue-400 font-mono text-sm leading-relaxed">
                          "如果有包含 '招股' 关键词的新闻，<br />
                          提取标题和链接。"
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-start gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>AI 会智能识别页面内容，精准提取你需要的信息</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-8 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                    <Send className="w-6 h-6 text-purple-400" />
                    推送到飞书
                  </h3>
                  <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-all">
                    <p className="text-slate-300 mb-4">
                      最后一步，让 OpenClaw 把信息发送给你：
                    </p>
                    <div className="relative group/code">
                      <div className="absolute top-3 right-3 text-xs text-slate-500 font-mono">指令示例</div>
                      <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto">
                        <p className="text-purple-400 font-mono text-sm leading-relaxed">
                          "通过飞书插件，把提取到的标题和链接发给我。"
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-start gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>支持飞书、Telegram、Discord 等多种推送方式</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Effect Demo */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              效果展示
            </h2>
            <div className="p-8 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M22.37 12.75a6.04 6.04 0 0 0 .39-2.52c-.17-1.7-.93-3.16-2.16-4.25-1.63-1.45-3.8-1.92-5.9-1.55a.86.86 0 0 1-.78-.28 5.48 5.48 0 0 0-4.42-1.73c-1.75.1-3.32.96-4.43 2.3A6.16 6.16 0 0 0 4.1 9.5a.84.84 0 0 1-.36.68 5.58 5.58 0 0 0-2.3 4.14c-.2 1.63.26 3.25 1.3 4.54a5.8 5.8 0 0 0 4.6 2.06c.44 0 .88-.04 1.3-.12a.85.85 0 0 1 .86.27 5.76 5.76 0 0 0 4.43 1.96c1.8 0 3.48-.8 4.6-2.15a5.9 5.9 0 0 0 1.25-4.45.86.86 0 0 1 .37-.73c.8-.57 1.44-1.38 1.83-2.3.18-.42.3-.87.4-1.33v-.32z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-white">OpenClaw 机器人</div>
                  <div className="text-xs text-slate-500">上午 9:05</div>
                </div>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Bell className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-white mb-2">🔔 港股 IPO 新公告</div>
                    <div className="text-slate-300 mb-3">
                      检测到 1 条新的招股信息：
                    </div>
                  </div>
                </div>
                <div className="pl-8 space-y-3">
                  <div className="p-4 rounded-lg bg-slate-900 border border-slate-700">
                    <div className="font-medium text-green-400 mb-2">
                      【招股书】某科技有限公司首次公开发行股票招股意向书
                    </div>
                    <a
                      href="#"
                      className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      查看详情 <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-slate-500">
                💡 这是一个模拟的飞书消息效果
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Terminal className="w-32 h-32 text-green-400" />
            </div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">还没安装？</h3>
              </div>
              <p className="text-slate-300 mb-6">
                立即部署 OpenClaw，开始打造你的专属 AI 助手。<br />
                <span className="text-sm text-slate-400">支持 Docker 一键部署，5 分钟即可上手。</span>
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/deploy"
                  className="px-6 py-3 bg-green-500 hover:bg-green-400 text-slate-950 font-bold rounded-lg transition-all flex items-center gap-2"
                >
                  去部署 OpenClaw
                  <Terminal className="w-4 h-4" />
                </Link>
                <a
                  href="https://github.com/openclaw/openclaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-all border border-slate-700"
                >
                  查看源码
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-12 text-center text-slate-500 text-sm">
        <p>© 2024 OpenClaw101. All rights reserved.</p>
        <p className="mt-2 text-slate-600">本项目仅供学习交流使用</p>
      </footer>
    </div>
  );
}
