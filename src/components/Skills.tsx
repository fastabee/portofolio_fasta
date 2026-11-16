import React, { useState, useMemo } from 'react';
import { Search, Server, Layout, Cloud, FileCode2, Cpu } from 'lucide-react';
import { skillCategoriesData } from '../data/portfolioData';
import type { Language } from '../types';

interface SkillsProps {
  lang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    FileCode2: <FileCode2 className="w-4 h-4" />,
    Server: <Server className="w-4 h-4" />,
    Layout: <Layout className="w-4 h-4" />,
    Cloud: <Cloud className="w-4 h-4" />,
  };

  const filteredCategories = useMemo(() => {
    return skillCategoriesData
      .map((cat) => {
        // filter by category if not 'all'
        if (selectedCategory !== 'all' && cat.title.en !== selectedCategory && cat.title.id !== selectedCategory) {
          return null;
        }

        // filter by search query
        const matchingSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (skill.highlight && skill.highlight.toLowerCase().includes(searchQuery.toLowerCase()))
        );

        if (matchingSkills.length === 0) return null;

        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter(Boolean);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? '// 02. KEAHLIAN TEKNIS' : '// 02. TECHNICAL SKILLS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'id' ? 'Tech Stack & Spesialisasi' : 'Tech Stack & Engineering Skills'}
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            {lang === 'id'
              ? 'Kombinasi bahasa pemrograman, sistem terdistribusi, dan ekosistem cloud yang saya gunakan dalam membangun sistem produksi.'
              : 'The battle-tested technologies, languages, and cloud systems I leverage in production environments.'}
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {lang === 'id' ? 'Semua Kategori' : 'All Domains'}
            </button>
            {skillCategoriesData.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat.title.en)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.title.en
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {categoryIcons[cat.iconName]}
                <span>{cat.title[lang]}</span>
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'id' ? 'Cari teknologi (mis. Go, Docker)...' : 'Search skills (e.g. Go, Docker)...'}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 font-mono transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-mono"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat, catIdx) => {
            if (!cat) return null;
            return (
              <div
                key={catIdx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700/80 transition-all"
              >
                {/* Category Title */}
                <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    {categoryIcons[cat.iconName]}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {cat.title[lang]}
                  </h3>
                  <span className="ml-auto text-xs font-mono text-slate-500">
                    {cat.skills.length} {lang === 'id' ? 'alat' : 'tools'}
                  </span>
                </div>

                {/* Skill Items List */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="group">
                      <div className="flex items-center justify-between mb-1 text-xs">
                        <span className="font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2 font-mono">
                          <span className="text-[11px] text-slate-500">{skill.experience}</span>
                          <span className="text-cyan-400 font-bold">{skill.level}%</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-700 ease-out group-hover:from-cyan-400 group-hover:to-emerald-400"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {/* Highlight Note */}
                      {skill.highlight && (
                        <p className="mt-1 text-[11px] text-slate-400 font-mono">
                          ↳ {skill.highlight}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
