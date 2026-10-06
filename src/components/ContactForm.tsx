import React, { useState } from 'react';
import { ArrowRight, Check, MessageSquare } from 'lucide-react';
import { creatorProfile } from '../data/projects';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Film / Video Production',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please include a brief message or project outline';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const subject = encodeURIComponent(`Project Inquiry [${formData.projectType}] from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Navanitha,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}\n\n— Sent from navanithavijayakumar.web.app`
    );

    window.open(`mailto:${creatorProfile.email}?subject=${subject}&body=${body}`, '_blank');
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    if (!validate()) return;

    const text = encodeURIComponent(
      `Hi Navanitha! My name is ${formData.name} (${formData.email}).\nProject Type: ${formData.projectType}\n\n${formData.message}`
    );

    window.open(`https://wa.me/917356837413?text=${text}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-12 px-6 sm:px-10 bg-[#FFFFFF] border border-[#DDDBD6] text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-[#F5F3EF] border border-[#DDDBD6] flex items-center justify-center mx-auto text-[#111111]">
          <Check className="w-6 h-6 stroke-[2]" />
        </div>
        <h3 className="text-2xl font-serif text-[#111111]">
          Thank you for reaching out.
        </h3>
        <p className="text-sm text-[#777777] font-light max-w-md mx-auto leading-relaxed">
          Your project inquiry has been formatted and routed to Navanitha's direct channels ({creatorProfile.email}). She will respond within 24–48 hours.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${creatorProfile.email}`}
            className="px-4 py-2 border border-[#111111] text-xs font-mono uppercase tracking-wider text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
          >
            Open in Gmail
          </a>
          <a
            href={creatorProfile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#25D366]/20 border border-[#25D366]/40 text-xs font-mono uppercase tracking-wider text-[#1b7e3f] hover:bg-[#25D366]/30 transition-colors"
          >
            Open WhatsApp
          </a>
        </div>
        <div className="pt-4">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', projectType: 'Film / Video Production', message: '' });
            }}
            className="text-xs font-mono text-[#111111] hover:underline uppercase tracking-wider cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSendEmail} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-[#777777] mb-2">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: '' });
          }}
          placeholder="Maya Sundaram"
          className="w-full bg-[#FFFFFF] border border-[#DDDBD6] p-4 text-sm text-[#111111] focus:outline-none focus:border-[#111111] placeholder:text-[#AAAAAA] transition-colors"
        />
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-[#777777] mb-2">
          Your Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: '' });
          }}
          placeholder="maya@studio.com"
          className="w-full bg-[#FFFFFF] border border-[#DDDBD6] p-4 text-sm text-[#111111] focus:outline-none focus:border-[#111111] placeholder:text-[#AAAAAA] transition-colors"
        />
        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-widest text-[#777777] mb-2">
          Project Type
        </label>
        <select
          id="projectType"
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          className="w-full bg-[#FFFFFF] border border-[#DDDBD6] p-4 text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors cursor-pointer"
        >
          <option value="Film / Video Production">Film / Video Production</option>
          <option value="Commercial / Ad Film">Commercial / Ad Film</option>
          <option value="Celebrity / Creator Interview">Celebrity / Creator Interview</option>
          <option value="Photography Campaign">Photography Campaign</option>
          <option value="Graphic Design / Poster Art">Graphic Design / Poster Art</option>
          <option value="Creative Direction / Other">Creative Direction / Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-[#777777] mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: '' });
          }}
          placeholder="Tell me about the story, timeline, and scope of your project..."
          className="w-full bg-[#FFFFFF] border border-[#DDDBD6] p-4 text-sm text-[#111111] focus:outline-none focus:border-[#111111] placeholder:text-[#AAAAAA] transition-colors resize-none"
        />
        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
      </div>

      <div className="pt-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-[#F5F3EF] hover:bg-black transition-all cursor-pointer disabled:opacity-50 text-xs font-mono uppercase tracking-widest"
        >
          <span>SEND VIA GMAIL</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        <button
          type="button"
          onClick={handleSendWhatsApp}
          className="inline-flex items-center gap-2.5 px-6 py-4 bg-white hover:bg-gray-50 border border-[#DDDBD6] hover:border-[#25D366] text-xs font-mono uppercase tracking-widest text-[#111111] hover:text-[#1b7e3f] transition-all cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366]" />
          <span>SEND VIA WHATSAPP</span>
        </button>
      </div>
    </form>
  );
};
