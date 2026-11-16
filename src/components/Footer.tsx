import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, Clock } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import type { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('id-ID', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' WIB (UTC+7)'
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-slate-800/80 bg-slate-950 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-slate-900">
          {/* Brand / Name */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="text-white font-bold text-sm">
              {personalData.name}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">{personalData.title}</span>
          </div>

          {/* Real-time Clock */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Jakarta: {currentTime}</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
          >
            <span>{lang === 'id' ? 'Kembali ke Atas' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Built with React 19, TypeScript & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
