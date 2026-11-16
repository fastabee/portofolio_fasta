import React, { useEffect } from 'react';
import { X, ExternalLink, Zap, CheckCircle2, Layers } from 'lucide-react';
import type { Project, Language } from '../types';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl z-10 p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          title="Tutup (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
          <span>{project.category}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-sm font-medium text-cyan-300 font-mono mb-6">
          {project.tagline[lang]}
        </p>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs font-bold text-slate-200 font-mono">{metric}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">
            {lang === 'id' ? '// DESKRIPSI SISTEM' : '// SYSTEM OVERVIEW'}
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description[lang]}
          </p>
        </div>

        {/* Architecture Highlight */}
        {project.architecture && (
          <div className="mb-6 p-4 rounded-xl bg-slate-950 border border-cyan-500/30">
            <h4 className="text-xs font-mono uppercase text-cyan-400 mb-1.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Arsitektur & Concurrency' : 'Architecture & Concurrency'}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed">
              {project.architecture[lang]}
            </p>
          </div>
        )}

        {/* Key Features Checklist */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase text-slate-400 mb-3">
            {lang === 'id' ? '// FITUR TEKNIS UTAMA' : '// KEY TECHNICAL HIGHLIGHTS'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures[lang].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">
            {lang === 'id' ? '// TEKNOLOGI YANG DIGUNAKAN' : '// TECHNOLOGIES UTILIZED'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Repository Code</span>
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
