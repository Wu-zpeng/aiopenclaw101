'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-slate-400" />
      <button
        onClick={() => switchLanguage('en')}
        className={`text-sm font-medium transition-colors ${
          currentLocale === 'en'
            ? 'text-green-400'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        EN
      </button>
      <span className="text-slate-600">/</span>
      <button
        onClick={() => switchLanguage('zh')}
        className={`text-sm font-medium transition-colors ${
          currentLocale === 'zh'
            ? 'text-green-400'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        中文
      </button>
    </div>
  );
}
