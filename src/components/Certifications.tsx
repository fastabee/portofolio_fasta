import React from 'react';
import { Award, ExternalLink, Quote, MessageSquareCode, GraduationCap, Calendar } from 'lucide-react';
import { certificationsData, testimonialsData, educationData } from '../data/portfolioData';
import type { Language } from '../types';

interface CertificationsProps {
  lang: Language;
}

export const Certifications: React.FC<CertificationsProps> = ({ lang }) => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? '// 06. PENDIDIKAN & SERTIFIKASI' : '// 06. EDUCATION & CREDENTIALS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'id' ? 'Pendidikan, Sertifikasi & Validasi' : 'Education, Certifications & Peer Reviews'}
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            {lang === 'id'
              ? 'Latar belakang akademik formal, lisensi kompetensi profesi terverifikasi, serta ulasan profesional.'
              : 'Formal academic background, verified professional competence licenses, and peer endorsements.'}
          </p>
        </div>

        {/* 3-Column / Grid: Education, Certifications & Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education & Certifications */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Education Section */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <span>{lang === 'id' ? 'Riwayat Pendidikan Formal' : 'Formal Education'}</span>
              </h3>

              <div className="space-y-4">
                {educationData.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {edu.major}
                      </h4>
                      <div className="flex items-center gap-1 text-xs font-mono text-emerald-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <p className="text-sm text-cyan-400 font-medium mb-2">
                      {edu.institution} {edu.location && `· ${edu.location}`}
                    </p>

                    {edu.description && (
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {edu.description[lang]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>{lang === 'id' ? 'Sertifikasi Profesi Terverifikasi' : 'Professional Certifications'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificationsData.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all flex flex-col justify-between gap-3 group"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                          {cert.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 font-medium">
                        {cert.issuer}
                      </p>
                      <p className="text-[11px] font-mono text-slate-500 mt-1">
                        Tahun: {cert.issueDate}
                      </p>
                    </div>

                    {cert.credentialUrl && (
                      <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-500">ID: {cert.credentialId}</span>
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                        >
                          <span>Verifikasi</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Recommendations */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <MessageSquareCode className="w-5 h-5 text-cyan-400" />
              <span>{lang === 'id' ? 'Rekomendasi Profesional' : 'Peer Endorsements'}</span>
            </h3>

            {testimonialsData.map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all relative group"
              >
                <Quote className="w-8 h-8 text-slate-700/50 absolute top-5 right-5 pointer-events-none group-hover:text-cyan-500/20 transition-colors" />
                
                <p className="text-sm text-slate-300 italic leading-relaxed mb-4">
                  "{test.content[lang]}"
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {test.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">
                      {test.role} · <span className="text-cyan-400">{test.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
