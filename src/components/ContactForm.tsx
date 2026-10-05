import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
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
          Your project inquiry has been received. I review briefs carefully and will respond to your email within 24–48 hours.
        </p>
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
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#777777] mb-2">
          Name *
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: '' });
          }}
          placeholder="Your name or production house"
          className="w-full bg-[#FFFFFF] border border-[#DDDBD6] px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#111111] placeholder:text-[#AAAAAA] transition-colors"
        />
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#777777] mb-2">
          Email *
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: '' });
          }}
          placeholder="your.email@company.com"
          className="w-full bg-[#FFFFFF] border border-[#DDDBD6] px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#111111] placeholder:text-[#AAAAAA] transition-colors"
        />
        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider text-[#777777] mb-2">
          Project Type
        </label>
        <select
          id="projectType"
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          className="w-full bg-[#FFFFFF] border border-[#DDDBD6] px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#111111] transition-colors cursor-pointer"
        >
          <option value="Film / Video Production">Film / Video Production</option>
          <option value="Commercial / Ad Photoshoot">Commercial / Ad Photoshoot</option>
          <option value="Documentary / Interview">Documentary / Interview</option>
          <option value="Photography Campaign">Photography Campaign</option>
          <option value="Creative Direction & Consulting">Creative Direction & Consulting</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#777777] mb-2">
          Message *
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

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-[#F5F3EF] hover:bg-black transition-all cursor-pointer disabled:opacity-50 text-xs font-mono uppercase tracking-widest"
        >
          <span>{isSubmitting ? 'Sending...' : 'SEND MESSAGE'}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
};
