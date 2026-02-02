import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | OpenClaw 101",
    default: "OpenClaw 101 - The Ultimate AI Agent Navigation",
  },
  description: "OpenClaw (Clawdbot) 桌面管家完全指南。聚合 GitHub 核心资源、飞书/微信插件下载、Docker 一键部署教程。Your gateway to Local-First AI Agents.",
  keywords: ["OpenClaw", "Clawdbot", "AI Agent", "Local-First AI", "飞书机器人", "Moltbot", "Docker Deployment"],
  openGraph: {
    title: "OpenClaw 101 - The Ultimate AI Agent Navigation",
    description: "OpenClaw (Clawdbot) 桌面管家完全指南。聚合 GitHub 核心资源、飞书/微信插件下载、Docker 一键部署教程。Your gateway to Local-First AI Agents.",
    url: "https://openclaw101.com",
    siteName: "OpenClaw 101",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
