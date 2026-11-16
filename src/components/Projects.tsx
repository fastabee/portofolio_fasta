import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Zap, FolderGit2, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { Project, Language } from '../types';
import { GithubIcon } from './Icons';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  lang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { label: lang === 'id' ? 'Semua Proyek' : 'All Projects', value: 'All' },
    { label: 'Backend & Cloud', value: 'Backend & Cloud' },
    { label: 'Full-Stack', value: 'Full-Stack' },
    { label: 'Systems & DevOps', value: 'Systems & DevOps' },
    { label: 'AI & Tools', value: 'AI & Tools' },
  ];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? '// 03. ARSITEKTUR & PROYEK' : '// 03. PROJECTS & ARCHITECTURE'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'id' ? 'Proyek & Karya Rekayasa' : 'Featured Software Projects'}
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            {lang === 'id'
              ? 'Sistem skala produksi, alat developer, dan pipeline terdistribusi yang dirancang dengan pertimbangan arsitektur dan kinerja tinggi.'
              : 'Production-ready distributed systems, developer tools, and high-performance applications designed with scalability in mind.'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedFilter(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedFilter === cat.value
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1 relative"
            >
              <div>
                {/* Header: Category & Metrics */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-slate-700">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs text-slate-400 font-mono mb-4 line-clamp-2">
                  {project.tagline[lang]}
                </p>

                {/* Metrics Pill (Top benchmark) */}
                {project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.metrics.slice(0, 2).map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800 text-[11px] font-mono font-medium"
                      >
                        <Zap className="w-3 h-3 text-amber-400" />
                        <span>{metric}</span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Description snippet */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                  {project.description[lang]}
                </p>
              </div>

              {/* Bottom section: Tech Tags and Actions */}
              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-slate-800/80">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800/60"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>{lang === 'id' ? 'Detail Arsitektur' : 'Architecture'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="GitHub Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Architecture Deep Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        lang={lang}
      />
    </section>
  );
};
