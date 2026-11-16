import React, { useState } from 'react';
import { Cpu, Code2, Activity, GitBranch, Copy, Check, MapPin, GraduationCap, Layers } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import type { Language } from '../types';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'ts' | 'py'>('ts');

  const tsCode = `import { SoftwareEngineer, Education, Competency } from '@fasta/core';

export const fastaBiqulHoirot: SoftwareEngineer = {
  name: '${personalData.name}',
  education: 'D4 Teknik Informatika - Politeknik Negeri Jember',
  certification: 'BNSP Certified Web Developer (2024)',
  
  coreExpertise: [
    'Aplikasi Web & Mobile End-to-End',
    'Manajemen & Keamanan Basis Data Server',
    'Pengolahan Data Skala Besar & Integrasi AI/ML',
    'Infrastruktur Server & High Availability (99.9%)'
  ],

  recentProjects: [
    'Belankon Kurir (Logistik & Pelacakan Real-Time)',
    'ISI-Piringku (Platform Pemantauan Gizi Harian)',
    'JDIH Kabupaten Jember (Pusat Arsip Hukum Resmi)',
    'Ekosistem Aplikasi Terintegrasi (88 Group)'
  ],

  solveProblem(requirement: BusinessRequirement): ScalableSolution {
    const system = this.designEndToEndArchitecture(requirement);
    return system.deployWithHighAvailability();
  }
};`;

  const pyCode = `# Fasta Biqul Hoirot - Software Engineer & Data Processing
from dataclasses import dataclass
from typing import List

@dataclass
class SoftwareEngineer:
    name: str = "${personalData.name}"
    degree: str = "D4 Teknik Informatika, Politeknik Negeri Jember"
    focus_areas: List[str] = (
        "Web & Mobile Applications",
        "Large-Scale Data Processing",
        "Machine Learning Model Integration",
        "Server Maintenance & Troubleshooting"
    )
    status: str = "Open for Software Engineer Opportunities"

    def optimize_system(self, server_load: float) -> str:
        # Ensuring database integrity and high server availability
        return "System running optimal with 99.9% uptime SLA"
`;

  const copyToClipboard = () => {
    const code = activeTab === 'ts' ? tsCode : pyCode;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
    Code2: <Code2 className="w-5 h-5 text-emerald-400" />,
    Activity: <Activity className="w-5 h-5 text-amber-400" />,
    GitBranch: <GitBranch className="w-5 h-5 text-purple-400" />,
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? '// 01. TENTANG SAYA' : '// 01. ABOUT ME'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'id' ? 'Profil & Filosofi Rekayasa' : 'Profile & Engineering Mindset'}
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            {lang === 'id' 
              ? 'Lulusan D4 Teknik Informatika dengan dedikasi tinggi dalam merancang arsitektur sistem end-to-end, pemeliharaan server, dan pengolahan data terukur.'
              : 'Informatics Engineering graduate dedicated to architecting end-to-end systems, server operations, and scalable data processing.'}
          </p>
        </div>

        {/* 2-Column: Bio & Interactive Code Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Bio Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>{lang === 'id' ? 'Latar Belakang & Pendekatan Teknis' : 'Background & Technical Approach'}</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  {personalData.bio[lang]}
                </p>
                <p className="text-slate-400 text-sm">
                  {lang === 'id'
                    ? 'Memiliki pengalaman langsung baik di lingkungan korporasi maupun freelance dalam mengembangkan aplikasi Belankon Kurir, platform kesehatan ISI-Piringku, web portal resmi JDIH Kabupaten Jember, hingga ekosistem sistem informasi terintegrasi lintas divisi di 88 Group.'
                    : 'Proven hands-on experience in corporate and freelance settings delivering Belankon Kurir, ISI-Piringku health tracker, the official JDIH Jember legal portal, and integrated enterprise systems at 88 Group.'}
                </p>
              </div>

              {/* Quick Info Badges */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">Jawa Timur, Indonesia</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">D4 Teknik Informatika</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Window */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden terminal-window">
              {/* Window Titlebar */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    {activeTab === 'ts' ? 'fasta_engineer.ts' : 'fasta_pipeline.py'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Language tabs */}
                  <div className="flex rounded-md bg-slate-950 p-0.5 border border-slate-800 text-xs font-mono">
                    <button
                      onClick={() => setActiveTab('ts')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeTab === 'ts' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      TypeScript
                    </button>
                    <button
                      onClick={() => setActiveTab('py')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeTab === 'py' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Python
                    </button>
                  </div>

                  {/* Copy button */}
                  <button
                    onClick={copyToClipboard}
                    className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy code"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300">
                <pre className="text-slate-200">
                  <code>{activeTab === 'ts' ? tsCode : pyCode}</code>
                </pre>
              </div>

              {/* Editor status footer */}
              <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400">NORMAL</span>
                  <span>UTF-8</span>
                </div>
                <span>LF · {activeTab === 'ts' ? 'TypeScript 5.7' : 'Python 3.12'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Engineering Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalData.philosophies.map((phil, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                {iconMap[phil.icon]}
              </div>
              <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {phil.title[lang]}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {phil.desc[lang]}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
