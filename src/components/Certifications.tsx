import React from 'react';
import { Award, ExternalLink, Quote, MessageSquareCode } from 'lucide-react';
import { certificationsData, testimonialsData } from '../data/portfolioData';
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
            <span>{lang === 'id' ? '// 06. SERTIFIKASI & REKOMENDASI' : '// 06. CREDENTIALS & ENDORSEMENTS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'id' ? 'Sertifikasi Cloud & Validasi' : 'Cloud Credentials & Peer Reviews'}
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            {lang === 'id'
              ? 'Sertifikasi industri cloud & infrastruktur resmi serta testimoni dari rekan kerja dan pimpinan teknik.'
              : 'Official industry cloud certifications and peer reviews from engineering leaders.'}
          </p>
        </div>

        {/* 2-Part Grid: Certifications & Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>{lang === 'id' ? 'Sertifikasi Industri Resmi' : 'Verified Industry Credentials'}</span>
            </h3>

            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all flex items-start justify-between gap-4 group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {cert.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">
                    {cert.issuer} · <span className="text-slate-500 font-mono">{cert.issueDate}</span>
                  </p>
                  {cert.credentialId && (
                    <p className="text-[11px] font-mono text-slate-500">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
                    title="Verify Credential"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Recommendations */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquareCode className="w-5 h-5 text-cyan-400" />
              <span>{lang === 'id' ? 'Rekomendasi Rekan Tim' : 'Peer Recommendations'}</span>
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
