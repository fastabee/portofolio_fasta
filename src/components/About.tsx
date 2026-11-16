import React, { useState } from 'react';
import { Cpu, Code2, Activity, GitBranch, Copy, Check, MapPin, Coffee, Layers } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import type { Language } from '../types';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'go' | 'ts'>('go');

  const goCode = `package main

import (
    "context"
    "fmt"
    "time"
)

type SoftwareEngineer struct {
    Name        string
    Focus       []string
    Values      []string
    Status      string
}

func NewEngineer() *SoftwareEngineer {
    return &SoftwareEngineer{
        Name:   "${personalData.name}",
        Focus:  []string{"Distributed Systems", "Cloud-Native", "Microservices"},
        Values: []string{"High Uptime", "Clean Architecture", "Zero Bug Tolerance"},
        Status: "Open for High-Impact Projects",
    }
}

func (e *SoftwareEngineer) BuildScalableSystem(ctx context.Context) error {
    // Ensuring high concurrency and sub-10ms latency
    return nil
}`;

  const tsCode = `import { Engineer, Problem, Solution } from '@rian/core';

export const rianPratama: Engineer = {
  name: '${personalData.name}',
  yearsExperience: 5,
  coreStack: ['Go', 'TypeScript', 'Docker', 'PostgreSQL', 'React 19'],
  
  designPhilosophy: {
    scalability: 'Graceful degradation under heavy peak traffic',
    codeQuality: '100% type-safe with high integration test coverage',
    devExperience: 'Automated CI/CD pipelines & reproducible environments',
  },

  async deliverValue(challenge: Problem): Promise<Solution> {
    const architecture = await this.designRobustSystem(challenge);
    return architecture.deployWithZeroDowntime();
  }
};`;

  const copyToClipboard = () => {
    const code = activeTab === 'go' ? goCode : tsCode;
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
            {lang === 'id' ? 'Engineering Mindset & Filosofi' : 'Engineering Mindset & Philosophy'}
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            {lang === 'id' 
              ? 'Bukan sekadar menulis sintaks, tetapi merancang solusi komputasi yang tangguh, terukur, dan mempermudah pertumbuhan bisnis.'
              : 'Not just writing syntax, but architecting resilient, measurable computing solutions that empower businesses to scale.'}
          </p>
        </div>

        {/* 2-Column: Bio & Interactive Code Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Bio Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>{lang === 'id' ? 'Pendekatan Rekayasa Perangkat Lunak' : 'Software Engineering Approach'}</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  {lang === 'id' 
                    ? 'Saya berfokus pada arsitektur perangkat lunak modern: memecah sistem monolitik yang rumit menjadi layanan modular (microservices) yang mudah dirawat, andal, dan siap menangani jutaan permintaan per detik.'
                    : 'I specialize in modern software architecture: transforming monoliths into decoupled, resilient microservices prepared to handle millions of requests with ease.'}
                </p>
                <p>
                  {lang === 'id'
                    ? 'Dengan latar belakang mendalam pada ekosistem Golang, TypeScript, Node.js, dan Cloud Native (Docker, Kubernetes, AWS), saya menjembatani kecepatan iterasi frontend dengan stabilitas kokoh backend.'
                    : 'With deep experience across Go, TypeScript, Node.js, and Cloud Native tools (Docker, Kubernetes, AWS), I bridge rapid frontend iteration with rock-solid backend stability.'}
                </p>
              </div>

              {/* Quick Info Badges */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{personalData.location.split('(')[0]}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <Coffee className="w-4 h-4 text-amber-400" />
                  <span>5+ Years in Production</span>
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
                    {activeTab === 'go' ? 'engineer.go' : 'engineer.ts'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Language tabs */}
                  <div className="flex rounded-md bg-slate-950 p-0.5 border border-slate-800 text-xs font-mono">
                    <button
                      onClick={() => setActiveTab('go')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeTab === 'go' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Go
                    </button>
                    <button
                      onClick={() => setActiveTab('ts')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeTab === 'ts' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      TypeScript
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
                  <code>{activeTab === 'go' ? goCode : tsCode}</code>
                </pre>
              </div>

              {/* Editor status footer */}
              <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400">NORMAL</span>
                  <span>UTF-8</span>
                </div>
                <span>LF · {activeTab === 'go' ? 'Go 1.23' : 'TS 5.7'}</span>
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
