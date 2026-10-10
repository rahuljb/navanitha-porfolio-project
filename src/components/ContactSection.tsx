import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, ExternalLink, Check } from 'lucide-react';
import { creatorProfile } from '../data/projects';
import { CinematicLightCanvas } from './CinematicLightCanvas';

interface ContactSectionProps {
  standalone?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ standalone = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validate = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please complete all fields to send your message.');
      return false;
    }
    if (!formData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSendEmail = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Navanitha,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n— Sent via navanithavijayakumar.web.app`
    );

    window.open(`mailto:${creatorProfile.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full pt-16 pb-28 sm:pt-20 sm:pb-44 px-6 sm:px-10 lg:px-12 bg-transparent z-10 border-b border-[#1A1A1A]">
      {/* If standalone on /contact, render own canvas; otherwise shares unified canvas from CreativeStatement */}
      {standalone && (
        <>
          <CinematicLightCanvas intensity={1.0} moteCount={30} showRibbons={true} showHorizon={false} />
          <div className="absolute inset-0 film-grain opacity-20 pointer-events-none z-0" />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#1E1E1E]">
          <span className="text-xs font-mono tracking-widest text-[#8A8A8A] uppercase">
            07 — INQUIRIES &amp; COLLABORATION
          </span>
          <span className="text-xs font-mono tracking-widest text-[#C96B5A] uppercase">
            CONNECT
          </span>
        </div>

        {/* Big Bold Call to Action */}
        <div className="space-y-4 max-w-4xl">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-normal text-[#F4F1EB] leading-[0.93] tracking-tight">
            LET'S CREATE<br />
            SOMETHING<br />
            <span className="italic text-[#C96B5A]">MEANINGFUL.</span>
          </h2>
          <p className="text-base sm:text-xl text-[#8A8A8A] font-light max-w-xl pt-2">
            Have a story, project or creative idea? Let's talk.
          </p>
        </div>

        {/* Contact Panel & Clean Minimal Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-8 border-t border-[#1C1C1C]">
          
          {/* Left: Minimal Contact Panel */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#8A8A8A] uppercase block mb-2">
                DIRECT CONTACT
              </span>
              <h3 className="text-2xl font-serif text-[#F4F1EB]">
                {creatorProfile.name}
              </h3>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono tracking-widest text-[#8A8A8A] uppercase block">
                GMAIL
              </span>
              <a
                href={`mailto:${creatorProfile.email}`}
                className="text-base sm:text-lg font-mono text-[#F4F1EB] hover:text-[#C96B5A] transition-colors break-all"
              >
                {creatorProfile.email}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono tracking-widest text-[#8A8A8A] uppercase block">
                WHATSAPP
              </span>
              <a
                href={creatorProfile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-mono text-[#F4F1EB] hover:text-[#C96B5A] transition-colors"
              >
                {creatorProfile.whatsapp}
              </a>
            </div>

            {/* Social Channels */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] font-mono tracking-widest text-[#8A8A8A] uppercase block mb-1">
                SOCIAL &amp; NETWORK
              </span>
              <div className="flex flex-col space-y-2 text-xs font-mono uppercase tracking-widest">
                <a
                  href={creatorProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2 border-b border-[#1C1C1C] text-[#F4F1EB] hover:text-[#C96B5A] transition-colors"
                >
                  <span>LINKEDIN</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href={creatorProfile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-2 border-b border-[#1C1C1C] text-[#F4F1EB] hover:text-[#C96B5A] transition-colors"
                >
                  <span>INSTAGRAM</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Minimal Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 sm:p-12 bg-[#0E0E0E] border border-[#1F1F1F] text-center space-y-5">
                <div className="w-12 h-12 rounded-full bg-[#181818] border border-[#333333] flex items-center justify-center mx-auto text-[#C96B5A]">
                  <Check className="w-6 h-6 stroke-[2]" />
                </div>
                <h4 className="text-2xl font-serif text-[#F4F1EB]">
                  Message Dispatched
                </h4>
                <p className="text-sm text-[#8A8A8A] font-light max-w-md mx-auto leading-relaxed">
                  Your inquiry has been routed to Navanitha's direct channels (Gmail &amp; WhatsApp). She will get back to you promptly.
                </p>
                <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`mailto:${creatorProfile.email}`}
                    className="px-4 py-2 border border-[#333333] text-xs font-mono uppercase tracking-wider text-[#F4F1EB] hover:border-[#C96B5A] transition-colors"
                  >
                    Open in Gmail
                  </a>
                  <a
                    href={creatorProfile.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#25D366]/20 border border-[#25D366]/40 text-xs font-mono uppercase tracking-wider text-[#25D366] hover:bg-[#25D366]/30 transition-colors"
                  >
                    Open WhatsApp
                  </a>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="pt-4 text-xs font-mono uppercase tracking-widest text-[#C96B5A] hover:underline cursor-pointer block mx-auto"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-[#8A8A8A] mb-2">
                    YOUR NAME
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Maya Sundaram"
                    className="w-full bg-transparent border-b border-[#2B2B2B] pb-3 text-base text-[#F4F1EB] focus:outline-none focus:border-[#C96B5A] transition-colors placeholder:text-[#3A3A3A]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-[#8A8A8A] mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maya@studio.com"
                    className="w-full bg-transparent border-b border-[#2B2B2B] pb-3 text-base text-[#F4F1EB] focus:outline-none focus:border-[#C96B5A] transition-colors placeholder:text-[#3A3A3A]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-[#8A8A8A] mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the story, timeline, and vision..."
                    className="w-full bg-transparent border-b border-[#2B2B2B] pb-3 text-base text-[#F4F1EB] focus:outline-none focus:border-[#C96B5A] transition-colors placeholder:text-[#3A3A3A] resize-none"
                  />
                </div>

                {error && (
                  <p className="text-xs text-[#C96B5A] font-mono">{error}</p>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#F4F1EB] text-[#111111] hover:bg-white transition-all text-xs font-mono uppercase tracking-widest cursor-pointer shadow-lg"
                  >
                    <span>SEND MESSAGE</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C96B5A]" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
