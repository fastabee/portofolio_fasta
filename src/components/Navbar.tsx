import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Globe, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import type { Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  isDark,
  setIsDark,
  onOpenTerminal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: lang === 'id' ? 'Tentang' : 'About', href: '#about' },
    { label: lang === 'id' ? 'Keahlian' : 'Skills', href: '#skills' },
    { label: lang === 'id' ? 'Proyek' : 'Projects', href: '#projects' },
    { label: lang === 'id' ? 'Pengalaman' : 'Experience', href: '#experience' },
    { label: lang === 'id' ? 'Kontak' : 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Prompt */}
          <a
            href="#"
            className="flex items-center gap-2 group font-mono text-sm sm:text-base font-semibold tracking-tight text-white hover:text-cyan-400 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex items-center">
              <span className="text-cyan-400 font-bold">~</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-100 group-hover:text-cyan-300">{personalData.name.toLowerCase().replace(' ', '-')}</span>
              <span className="animate-pulse text-cyan-400 ml-0.5">_</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenTerminal}
              className="ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all"
              title="Buka Terminal CLI"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI Mode</span>
            </button>
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switch */}
            <button
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              title="Ganti Bahasa / Switch Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase font-mono">{lang}</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-slate-700 transition-colors"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all"
            >
              <span>{lang === 'id' ? 'Hubungi' : 'Hire Me'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="px-2 py-1 rounded text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 shadow-xl space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  onOpenTerminal();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30"
              >
                <Terminal className="w-4 h-4" />
                <span>Buka CLI Terminal</span>
              </button>

              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-500 text-slate-950 font-medium"
              >
                {lang === 'id' ? 'Hubungi' : 'Hire Me'}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
