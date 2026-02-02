import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Terminal, Download, Rocket, CheckCircle2, Code2, Container } from 'lucide-react';

export default function DeployGuide() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-green-500/30 font-sans">
      {/* Navbar */}
      <nav className="border-b border-slate-800/60 backdrop-blur-md fixed w-full z-50 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
            <Terminal className="w-6 h-6 text-green-400" />
            <span>OpenClaw<span className="text-green-400">101</span></span>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回首页</span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20 mb-6">
              <Container className="w-3 h-3" />
              <span>Docker Deployment · Docker 部署</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              OpenClaw <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Docker</span> 部署指南
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed">
              使用 Docker 快速部署 OpenClaw，让你的 AI Agent 在几分钟内运行起来。
              <br />
              <span className="text-slate-500 text-base">Deploy OpenClaw with Docker in minutes.</span>
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
                  安装 Docker
                </h2>
                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                  <p className="text-slate-300 mb-4">
                    如果你还没有安装 Docker，请先访问 Docker 官网下载并安装：
                  </p>
                  <a
                    href="https://www.docker.com/get-started"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-green-400 font-medium rounded-lg transition-all border border-slate-700 hover:border-green-500/50"
                  >
                    <Download className="w-4 h-4" />
                    下载 Docker Desktop
                  </a>
                  <div className="mt-4 flex items-start gap-2 text-sm text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>安装完成后，确保 Docker 服务正在运行</span>
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
                  拉取镜像
                </h2>
                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                  <p className="text-slate-300 mb-4">
                    克隆 OpenClaw 仓库到本地：
                  </p>
                  <div className="relative group/code">
                    <div className="absolute top-3 right-3 text-xs text-slate-500 font-mono">bash</div>
                    <pre className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto">
                      <code className="text-green-400 font-mono text-sm">git clone https://github.com/GrapeBaBa/OpenClaw.git</code>
                    </pre>
                  </div>
                  <div className="mt-4 flex items-start gap-2 text-sm text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>克隆完成后，进入项目目录：<code className="text-green-400 bg-slate-800 px-2 py-0.5 rounded">cd OpenClaw</code></span>
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
                  启动容器
                </h2>
                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                  <p className="text-slate-300 mb-4">
                    使用 Docker Compose 一键启动所有服务：
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
                      <span><code className="text-green-400 bg-slate-800 px-2 py-0.5 rounded">-d</code> 参数表示在后台运行容器</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>首次启动会自动下载所需的 Docker 镜像，请耐心等待</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>启动成功后，OpenClaw 将在后台持续运行</span>
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
                <h3 className="text-2xl font-bold text-white">部署完成！</h3>
              </div>
              <p className="text-slate-300 mb-6">
                恭喜！你已经成功部署了 OpenClaw。现在可以开始配置你的 AI Agent 并连接到各种平台了。
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/GrapeBaBa/OpenClaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-500 hover:bg-green-400 text-slate-950 font-bold rounded-lg transition-all"
                >
                  查看完整文档
                </a>
                <Link
                  href="/"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-all border border-slate-700"
                >
                  返回首页
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-12 text-center text-slate-500 text-sm">
        <p>© 2026 OpenClaw101. Built for the Global Community.</p>
        <p className="mt-2 text-slate-600">Unofficial navigation site. All trademarks belong to their respective owners.</p>
      </footer>
    </div>
  );
}
