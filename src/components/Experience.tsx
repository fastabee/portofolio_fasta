import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2, TrendingUp } from 'lucide-react';
import { experiencesData } from '../data/portfolioData';
import type { Language } from '../types';

interface ExperienceProps {
  lang: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-20 md:py-28 relative bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? '// 05. RIWAYAT KARIER' : '// 05. CAREER TIMELINE'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'id' ? 'Pengalaman Kerja & Kepemimpinan' : 'Work Experience & Leadership'}
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            {lang === 'id'
              ? 'Rekam jejak kepemimpinan teknik, optimasi arsitektur sistem, dan pengiriman software bernilai tinggi di lingkungan produksi.'
              : 'Track record of engineering leadership, systems architecture optimization, and delivering mission-critical software.'}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiencesData.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-md shadow-cyan-400/20" />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 group-hover:border-cyan-500/30 backdrop-blur-sm transition-all">
                
                {/* Header: Role & Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-cyan-400 font-semibold text-sm">
                        {exp.company}
                      </span>
                      {exp.companyUrl && (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Period & Location Badge */}
                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {exp.description[lang]}
                </p>

                {/* Key Impact Achievements */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'id' ? 'Dampak & Pencapaian Utama' : 'Key Impact & Achievements'}</span>
                  </h4>
                  {exp.achievements[lang].map((achieve, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{achieve}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
