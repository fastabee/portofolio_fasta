import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MessageSquare, MapPin, ArrowUpRight, Phone, MessageCircle } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import type { Language } from '../types';
import { LinkedinIcon } from './Icons';

interface ContactProps {
  lang: Language;
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ lang, onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Peluang Software Engineer',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    onShowToast(lang === 'id' ? 'Email berhasil disalin ke clipboard!' : 'Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    if (!personalData.phone) return;
    navigator.clipboard.writeText(personalData.phone);
    setCopiedPhone(true);
    onShowToast(lang === 'id' ? 'Nomor telepon berhasil disalin!' : 'Phone number copied to clipboard!');
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast(
        lang === 'id'
          ? 'Pesan Anda berhasil dikirim! Fasta akan segera merespons.'
          : 'Your message has been sent successfully! Fasta will reply promptly.'
      );
      setFormState({ name: '', email: '', subject: 'Peluang Software Engineer', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/10 blur-[140px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? '// 07. HUBUNGI SAYA' : '// 07. GET IN TOUCH'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'id' ? 'Mari Terhubung & Berkolaborasi' : "Let's Connect & Collaborate"}
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base">
            {lang === 'id'
              ? 'Terbuka untuk posisi Software Engineer, Full-stack Developer, pengelolaan sistem & basis data, atau kolaborasi proyek baru.'
              : 'Open for Software Engineer roles, Full-stack Developer positions, database/server administration, or new project collaborations.'}
          </p>
        </div>

        {/* 2-Column: Direct Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                {lang === 'id' ? 'Email Langsung' : 'Direct Email'}
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={personalData.socials.email}
                  className="text-base sm:text-lg font-bold text-white font-mono truncate hover:text-cyan-400 transition-colors"
                >
                  {personalData.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Salin Email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{lang === 'id' ? 'Tersalin' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === 'id' ? 'Salin' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            {personalData.phone && (
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-2">
                  {lang === 'id' ? 'Telepon & WhatsApp' : 'Phone & WhatsApp'}
                </span>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-base sm:text-lg font-bold text-white font-mono">
                      {personalData.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {personalData.socials.whatsapp && (
                      <a
                        href={personalData.socials.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold transition-colors"
                        title="Chat WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat WA</span>
                      </a>
                    )}
                    <button
                      onClick={handleCopyPhone}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="Salin Nomor"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Professional Profiles */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                {lang === 'id' ? 'Jejaring Profesional' : 'Professional Profile'}
              </span>

              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-slate-400 group-hover:text-blue-400" />
                  <div>
                    <span className="text-xs font-semibold block">LinkedIn</span>
                    <span className="text-[11px] font-mono text-slate-500">fasta-biqul-hoirot</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>

            {/* Location & Timezone Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm flex items-start gap-3">
              <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white mb-1">
                  {lang === 'id' ? 'Domisili & Ketersediaan' : 'Location & Availability'}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {personalData.location}. Terbuka untuk posisi Full-time On-site (Jawa Timur & sekitarnya), Hybrid, maupun Remote secara nasional dan internasional.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>{lang === 'id' ? 'Kirim Pesan Langsung' : 'Send a Direct Message'}</span>
              </h3>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>
                    {lang === 'id'
                      ? 'Terima kasih! Pesan Anda telah diterima. Fasta akan segera merespons.'
                      : 'Thank you! Your message has been received. Fasta will reply promptly.'}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      {lang === 'id' ? 'Nama Anda / Perusahaan' : 'Your Name / Company'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Nama Lengkap / Rekruter"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      {lang === 'id' ? 'Alamat Email' : 'Email Address'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="email@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    {lang === 'id' ? 'Keperluan / Topik' : 'Purpose / Topic'}
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="Peluang Software Engineer">
                      {lang === 'id' ? 'Peluang Kerja Software Engineer / Full-stack' : 'Software Engineer Job Opportunity'}
                    </option>
                    <option value="Proyek Web / Mobile">
                      {lang === 'id' ? 'Pengembangan Proyek Web / Mobile' : 'Web / Mobile Development Project'}
                    </option>
                    <option value="Pemeliharaan Server & Database">
                      {lang === 'id' ? 'Pemeliharaan Server & Basis Data' : 'Server & Database Maintenance'}
                    </option>
                    <option value="Diskusi Umum">
                      {lang === 'id' ? 'Diskusi Teknis / Terhubung' : 'General Tech Chat / Connect'}
                    </option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    {lang === 'id' ? 'Pesan Anda' : 'Your Message'} *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={
                      lang === 'id'
                        ? 'Sampaikan kebutuhan sistem, posisi lowongan, atau tawaran kerja sama...'
                        : 'Explain the role requirements, system project, or collaboration details...'
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="font-mono text-xs">{lang === 'id' ? 'Mengirim...' : 'Sending...'}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{lang === 'id' ? 'Kirim Pesan Sekarang' : 'Send Message Now'}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
