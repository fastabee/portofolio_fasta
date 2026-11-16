import React, { useState, useEffect } from 'react';
import { ArrowDown, Terminal, FileText, Mail } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import type { Language } from '../types';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  lang: Language;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenTerminal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = personalData.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < currentRole.length) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === currentRole.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personalData.roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const techBadges = [
    { name: "Go / Golang", color: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300" },
    { name: "TypeScript", color: "border-blue-500/30 bg-blue-500/10 text-blue-300" },
    { name: "React 19", color: "border-sky-500/30 bg-sky-500/10 text-sky-300" },
    { name: "Node.js", color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" },
    { name: "Docker", color: "border-blue-400/30 bg-blue-400/10 text-blue-300" },
    { name: "Kubernetes", color: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300" },
    { name: "PostgreSQL", color: "border-cyan-600/30 bg-cyan-600/10 text-cyan-200" },
    { name: "Kafka & Redis", color: "border-rose-500/30 bg-rose-500/10 text-rose-300" },
    { name: "AWS Cloud", color: "border-amber-500/30 bg-amber-500/10 text-amber-300" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/15 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/10 blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 blur-[120px] -z-10 pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 shadow-inner mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-slate-300">
              {personalData.status[lang]}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            {lang === 'id' ? 'Membangun Sistem' : 'Engineering Scalable'}{' '}
            <span className="gradient-text">
              {lang === 'id' ? 'Andal & Berkinerja Tinggi' : 'High-Impact Systems'}
            </span>
          </h1>

          {/* Dynamic Role Subheading */}
          <div className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl font-mono text-slate-300 mb-6 min-h-[38px]">
            <span className="text-cyan-400">&gt;</span>
            <span className="text-white font-semibold">{displayText}</span>
            <span className="w-2.5 h-6 bg-cyan-400 animate-pulse inline-block" />
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl font-normal">
            {personalData.bio[lang]}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>{lang === 'id' ? 'Eksplorasi Proyek' : 'View Projects'}</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-mono font-medium text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800 transition-all transform hover:-translate-y-0.5"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'id' ? 'Jalankan Terminal CLI' : 'Open Terminal CLI'}</span>
            </button>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-300 bg-slate-900/50 border border-slate-800 hover:bg-slate-800/80 hover:text-white transition-all"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>{lang === 'id' ? 'Filosofi Kode' : 'Code Philosophy'}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400 mb-14">
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:text-blue-400 hover:border-blue-500/40 transition-all hover:scale-110"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={personalData.socials.email}
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:text-emerald-400 hover:border-emerald-500/40 transition-all hover:scale-110"
              title="Send Direct Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Tech Badges Chips */}
          <div className="w-full pt-8 border-t border-slate-800/60">
            <p className="text-xs uppercase tracking-wider font-mono text-slate-500 mb-4">
              // CORE ENGINEERING STACK
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {techBadges.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border ${tech.color} transition-transform hover:scale-105 cursor-default`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personalData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-cyan-500/30 transition-all group"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-cyan-400 transition-colors font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200">
                {stat.label[lang]}
              </div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">
                {stat.sublabel[lang]}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
