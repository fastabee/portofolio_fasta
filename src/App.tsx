import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { TerminalComponent } from './components/Terminal';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import type { Language } from './types';

export function App() {
  const [lang, setLang] = useState<Language>('id');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleOpenTerminal = () => {
    // Scroll smoothly to terminal section or open modal
    const terminalEl = document.getElementById('terminal');
    if (terminalEl) {
      terminalEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsTerminalModalOpen(true);
    }
  };

  return (
    <div className={`min-h-screen text-slate-100 ${isDark ? 'bg-slate-950' : 'bg-slate-900'} selection:bg-cyan-500 selection:text-slate-950`}>
      {/* Navigation Header */}
      <Navbar
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenTerminal={handleOpenTerminal}
      />

      {/* Main Content Sections */}
      <main>
        <Hero lang={lang} onOpenTerminal={handleOpenTerminal} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <TerminalComponent lang={lang} />
        <Certifications lang={lang} />
        <Contact lang={lang} onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Interactive Modal (if opened separately) */}
      {isTerminalModalOpen && (
        <TerminalComponent
          lang={lang}
          isOpenModal={true}
          onClose={() => setIsTerminalModalOpen(false)}
        />
      )}

      {/* Interactive Toast Notifications */}
      <Toast message={toastMessage} />
    </div>
  );
}

export default App;
