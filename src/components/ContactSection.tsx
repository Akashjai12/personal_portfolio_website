import React, { useState } from 'react';
import { Check, Copy, ExternalLink, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { DIRECT_CHANNELS, PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon, GmailIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedChannel, setCopiedChannel] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your message.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  const handleCopyChannel = (e: React.MouseEvent, channelName: string) => {
    e.preventDefault();
    e.stopPropagation();

    let copyText = '';
    if (channelName === 'Email') copyText = PERSONAL_INFO.email;
    else if (channelName === 'LinkedIn') copyText = 'https://www.linkedin.com/in/akashjaiswal1190';
    else if (channelName === 'GitHub') copyText = 'https://github.com/aakashjaiswal1190';
    else copyText = 'https://instagram.com';

    navigator.clipboard?.writeText(copyText);
    setCopiedChannel(channelName);
    setTimeout(() => setCopiedChannel(null), 2500);
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
                <span className="text-xs font-mono tracking-widest text-indigo-700 font-semibold uppercase block">
                  06 / COMMUNICATION
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Let's Connect
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-3 max-w-sm">
                Have an inquiry, project discussion, or collaboration idea? Connect directly via LinkedIn, GitHub, or Gmail, or leave a message below.
              </p>
            </div>

            {/* DIRECT CHANNELS - LOGO BUTTONS */}
            <div className="mt-10 pt-6 border-t border-slate-200/80">
              <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-indigo-900/80 block mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
                DIRECT SOCIAL & CONTACT
              </span>

              {/* Logo Action Icons */}
              <div className="flex items-center gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/Akashjai12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 group relative"
                  title="Akash Jaiswal's GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon className="w-5 h-5 text-white transition-transform group-hover:rotate-6" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-slate-900 text-white text-[10px] font-mono py-0.5 px-2 rounded whitespace-nowrap shadow z-20">
                    GitHub
                  </span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/aakash-jaiswal-531262308?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 group relative"
                  title="Akash Jaiswal's LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-slate-900 text-white text-[10px] font-mono py-0.5 px-2 rounded whitespace-nowrap shadow z-20">
                    LinkedIn
                  </span>
                </a>

                {/* Gmail */}
                <a
                  href="mailto:aakashjaiswal1190@gmail.com"
                  className="w-12 h-12 rounded-xl bg-[#EA4335] text-white flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 group relative"
                  title="Send Email to aakashjaiswal1190@gmail.com"
                  aria-label="Gmail Direct"
                >
                  <GmailIcon className="w-5 h-5 text-white transition-transform group-hover:-translate-y-0.5" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-slate-900 text-white text-[10px] font-mono py-0.5 px-2 rounded whitespace-nowrap shadow z-20">
                    Gmail
                  </span>
                </a>
              </div>

              <p className="text-[11px] font-mono text-slate-400 mt-5">
                Click any logo to open my profile directly.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/95 backdrop-blur-xs p-6 sm:p-7 border border-indigo-100/90 shadow-md shadow-indigo-100/20 rounded-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[10px] font-mono tracking-wider uppercase font-semibold text-slate-600 mb-1.5"
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-3.5 py-3 bg-[#f8fafc] border border-slate-200/90 rounded-xs text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[10px] font-mono tracking-wider uppercase font-semibold text-slate-600 mb-1.5"
                  >
                    EMAIL / CONTACT FIELD
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-3 bg-[#f8fafc] border border-slate-200/90 rounded-xs text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-mono tracking-wider uppercase font-semibold text-slate-600 mb-1.5"
                  >
                    SHORT MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full px-3.5 py-3 bg-[#f8fafc] border border-slate-200/90 rounded-xs text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all resize-y min-h-[120px]"
                  />
                </div>

                {/* Status Messages */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs animate-in fade-in rounded-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>Thank you for reaching out! Your message has been received by Akash.</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-auto px-6 py-3 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 hover:from-indigo-900 hover:to-indigo-950 disabled:opacity-70 text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-indigo-500/10 rounded-xs"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <span>SUBMIT MESSAGE</span>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
