import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { personalData, projectsData, skillCategoriesData, experiencesData, educationData, certificationsData } from '../data/portfolioData';
import type { Language } from '../types';

interface TerminalProps {
  lang: Language;
  onClose?: () => void;
  isOpenModal?: boolean;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalComponent: React.FC<TerminalProps> = ({
  lang,
  onClose,
  isOpenModal = false,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">
            ⚡ Welcome to {personalData.name}'s Interactive CLI [v2.4.0]
          </p>
          <p className="text-slate-400 text-xs">
            Type <span className="text-emerald-400 font-semibold font-mono">help</span> to view available commands, or click the quick action chips below.
          </p>
        </div>
      ),
    },
  ]);

  const [cmdIndex, setCmdIndex] = useState<number>(-1);
  const [enteredCommands, setEnteredCommands] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    setEnteredCommands((prev) => [...prev, cmd]);
    setCmdIndex(-1);

    const parts = cmd.toLowerCase().split(' ');
    const mainCmd = parts[0];

    let response: React.ReactNode;

    switch (mainCmd) {
      case 'help':
        response = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-300 font-semibold">// AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
              <div><span className="text-emerald-400 font-mono font-bold">about</span> - Software engineer bio & background</div>
              <div><span className="text-emerald-400 font-mono font-bold">skills</span> - Technical capabilities & proficiencies</div>
              <div><span className="text-emerald-400 font-mono font-bold">projects</span> - Production projects (Kacamatamu, Belankon, JDIH)</div>
              <div><span className="text-emerald-400 font-mono font-bold">experience</span> - Career timeline (88 Group, Alluvia, ESOLUSINDO)</div>
              <div><span className="text-emerald-400 font-mono font-bold">education</span> - Formal degree & alma mater</div>
              <div><span className="text-emerald-400 font-mono font-bold">contact</span> - Email, phone, WA & LinkedIn</div>
              <div><span className="text-emerald-400 font-mono font-bold">cat resume.txt</span> - CV summary preview</div>
              <div><span className="text-emerald-400 font-mono font-bold">sudo hire</span> - Direct candidate offer pipeline 😉</div>
              <div><span className="text-emerald-400 font-mono font-bold">clear</span> - Clear terminal buffer</div>
            </div>
          </div>
        );
        break;

      case 'about':
        response = (
          <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
            <p className="text-cyan-400 font-bold">{personalData.name} - {personalData.title}</p>
            <p>{personalData.bio[lang]}</p>
            <p className="text-slate-400">Location: {personalData.location}</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-3 text-xs">
            {skillCategoriesData.map((cat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-cyan-300 font-mono font-bold">{cat.title[lang]}:</span>
                <p className="text-slate-300 pl-3">
                  {cat.skills.map((s) => s.name).join(' · ')}
                </p>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-3 text-xs">
            <p className="text-cyan-300 font-mono font-bold">// FEATURED PORTFOLIO PROJECTS:</p>
            {projectsData.map((proj) => (
              <div key={proj.id} className="pl-3 border-l-2 border-slate-700 space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">{proj.title}</span>
                  <span className="text-[10px] text-cyan-400 font-mono">[{proj.category}]</span>
                </div>
                <p className="text-slate-400">{proj.tagline[lang]}</p>
                <p className="text-emerald-400 font-mono text-[11px]">Tags: {proj.tags.slice(0, 4).join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
      case 'exp':
        response = (
          <div className="space-y-3 text-xs">
            <p className="text-cyan-300 font-mono font-bold">// CAREER TIMELINE:</p>
            {experiencesData.map((exp) => (
              <div key={exp.id} className="pl-3 border-l-2 border-slate-700">
                <p className="text-white font-bold">{exp.role} <span className="text-cyan-400 font-normal">@ {exp.company}</span></p>
                <p className="text-slate-500 font-mono text-[11px]">{exp.period} · {exp.location}</p>
                <p className="text-slate-300 mt-1">{exp.description[lang]}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
      case 'edu':
        response = (
          <div className="space-y-3 text-xs">
            <p className="text-cyan-300 font-mono font-bold">// FORMAL EDUCATION & CERTIFICATES:</p>
            {educationData.map((edu) => (
              <div key={edu.id} className="pl-3 border-l-2 border-emerald-500/50">
                <p className="text-white font-bold">{edu.major}</p>
                <p className="text-cyan-400 font-mono text-[11px]">{edu.institution} ({edu.period})</p>
              </div>
            ))}
            <div className="pt-2 pl-3 border-l-2 border-amber-500/50">
              <p className="text-white font-bold">Certifications:</p>
              {certificationsData.map((c) => (
                <p key={c.id} className="text-slate-300 text-[11px]">• {c.title} - {c.issuer} ({c.issueDate})</p>
              ))}
            </div>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p className="text-cyan-300 font-bold">// GET IN TOUCH:</p>
            <p>Email: <a href={personalData.socials.email} className="text-emerald-400 underline">{personalData.email}</a></p>
            <p>Phone/WA: <span className="text-white">{personalData.phone}</span></p>
            <p>LinkedIn: <a href={personalData.socials.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{personalData.socials.linkedin}</a></p>
            <p>Location: <span className="text-slate-400">{personalData.location}</span></p>
          </div>
        );
        break;

      case 'cat':
        if (parts[1] === 'resume.txt' || parts[1] === 'resume') {
          response = (
            <div className="space-y-2 text-xs font-mono text-slate-300 p-3 bg-slate-900/80 rounded border border-slate-800">
              <p className="text-cyan-400 font-bold">RESUME_SUMMARY - {personalData.name.toUpperCase()}</p>
              <p>Degree: D4 Teknik Informatika, Politeknik Negeri Jember (2020-2024)</p>
              <p>Certification: BNSP Certified Web Developer (2024)</p>
              <p>Experience: 88 Group (IT Programmer), Alluvia (Remote Maintenance), ESOLUSINDO (Full-stack)</p>
              <p>Key Projects: Kacamatamu Jember, Belankon Kurir, ISI-Piringku, JDIH Kab. Jember</p>
              <p>Email: {personalData.email} | Phone: {personalData.phone}</p>
            </div>
          );
        } else {
          response = <p className="text-rose-400 text-xs">cat: {parts[1] || 'file'}: No such file or directory. Try 'cat resume.txt'</p>;
        }
        break;

      case 'sudo':
        if (parts[1] === 'hire') {
          response = (
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs space-y-1">
              <p className="font-bold">🚀 ACCESS GRANTED: High Priority Candidate Selected!</p>
              <p>Terima kasih atas ketertarikan Anda untuk merekrut Fasta Biqul Hoirot!</p>
              <p>Silakan hubungi langsung melalui email: <a href={personalData.socials.email} className="underline text-white font-bold">{personalData.email}</a> atau WhatsApp: <a href={personalData.socials.whatsapp} target="_blank" rel="noreferrer" className="underline text-emerald-300 font-bold">{personalData.phone}</a></p>
            </div>
          );
        } else {
          response = <p className="text-amber-400 text-xs font-mono">Password for visitor: Permission denied. Try 'sudo hire' 😉</p>;
        }
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'date':
        response = <p className="text-slate-300 text-xs font-mono">{new Date().toString()}</p>;
        break;

      case 'whoami':
        response = <p className="text-cyan-300 text-xs font-mono">visitor: A recruiter / tech explorer discovering Fasta Biqul Hoirot's portfolio.</p>;
        break;

      default:
        response = (
          <p className="text-rose-400 text-xs font-mono">
            zsh: command not found: {cmd}. Type <span className="text-cyan-300 underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for list of commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: cmd,
        output: response,
      },
    ]);

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      if (enteredCommands.length > 0) {
        const nextIndex = cmdIndex === -1 ? enteredCommands.length - 1 : Math.max(0, cmdIndex - 1);
        setCmdIndex(nextIndex);
        setInputVal(enteredCommands[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      if (enteredCommands.length > 0 && cmdIndex !== -1) {
        const nextIndex = cmdIndex + 1;
        if (nextIndex < enteredCommands.length) {
          setCmdIndex(nextIndex);
          setInputVal(enteredCommands[nextIndex]);
        } else {
          setCmdIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  const quickCommands = ['help', 'about', 'skills', 'projects', 'exp', 'edu', 'cat resume.txt', 'sudo hire', 'clear'];

  const content = (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-950/95 shadow-2xl overflow-hidden terminal-window flex flex-col h-[520px]">
      {/* Window Titlebar */}
      <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <div className="ml-2 flex items-center gap-1.5 text-xs font-mono text-slate-300">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>visitor@fasta-machine:~ (zsh)</span>
          </div>
        </div>

        {isOpenModal && onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Quick Command Chips */}
      <div className="px-4 py-2 bg-slate-900/50 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
        <span className="text-slate-500 shrink-0">Quick run:</span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded bg-slate-800/80 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 border border-slate-700/60 transition-colors shrink-0"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Area */}
      <div
        className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-4"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-emerald-400">visitor@fasta:~$</span>
              <span className="text-white font-semibold">{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}

        {/* Current Active Input Prompt */}
        <div className="flex items-center gap-2 text-slate-400 pt-1">
          <span className="text-emerald-400 font-mono">visitor@fasta:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="flex-1 bg-transparent text-white font-mono focus:outline-none caret-cyan-400 text-xs"
            placeholder="Type a command (try 'help')..."
          />
        </div>
        <div ref={bottomRef} />
      </div>

      {/* Terminal Footer Info */}
      <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span>Press Enter to execute</span>
        <span>UTF-8 · Interactive Shell</span>
      </div>
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
        <div className="absolute inset-0" onClick={onClose} />
        <div className="relative w-full max-w-3xl z-10">{content}</div>
      </div>
    );
  }

  return (
    <section id="terminal" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? '// 04. TERMINAL INTERAKTIF' : '// 04. INTERACTIVE CLI'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'id' ? 'Dev Terminal & Sandbox' : 'Interactive Developer Terminal'}
          </h2>
          <p className="mt-2 text-slate-400 text-sm">
            {lang === 'id'
              ? 'Jelajahi keahlian, pengalaman, dan sistem saya melalui antarmuka baris perintah langsung.'
              : 'Explore my skills, experience, and background directly via this interactive command line interface.'}
          </p>
        </div>
        {content}
      </div>
    </section>
  );
};
