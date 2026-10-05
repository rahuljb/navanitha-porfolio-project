import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getEmbedVideoUrl } from '../utils/videoUtils';

export const VideoShowcase: React.FC = () => {
  const [iframeError, setIframeError] = useState(false);

  // // youtubeVideoUrl / celebrityinterview 
  // const youtubeVideoUrl = 'https://www.youtube.com/embed/JCll8ltoOLQ';
  
  // // Embed format for SharePoint Stream iframe
  // const sharePointEmbedUrl = 'https://asaskochi-my.sharepoint.com/personal/kh_ah_p2vmc25006_kh_students_amrita_edu/_layouts/15/embed.aspx?id=%2Fpersonal%2Fkh%5Fah%5Fp2vmc25006%5Fkh%5Fstudents%5Famrita%5Fedu%2FDocuments%2FPORTFOLIO%2FCelebrity%20Interview%2FINTERVIEW%20WITH%20RAGUL%20CHANDRAN%2Emp4';

  // const embedSource = getEmbedVideoUrl(sharePointEmbedUrl || youtubeVideoUrl);

  const youtubeVideoId = 'JCll8ltoOLQ';
  const embedSource = getEmbedVideoUrl(undefined, youtubeVideoId);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F4F1EB] pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-6">
          <RouterLink
            to="/#journey"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8A8A8A] hover:text-[#C96B5A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO JOURNEY</span>
          </RouterLink>

          <div className="flex items-center gap-3 text-xs font-mono text-[#8A8A8A]">
            <span className="text-[#C96B5A]">PHASE 02</span>
            <span className="text-[#333333]">/</span>
            <span>CELEBRITY INTERVIEW</span>
          </div>
        </div>

        {/* Header Title Block */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#C96B5A] uppercase">
            <span>CELEBRITY INTERVIEW</span>
            <span className="w-6 h-[1px] bg-[#333333]" />
            <span className="text-[#8A8A8A]">CINEMA PRESENTATION</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F4F1EB] tracking-tight">
            INTERVIEW WITH <span className="italic text-[#F4F1EB]/85 font-light">RAGUL CHANDRAN</span>
          </h1>
          <p className="text-base sm:text-lg text-[#8A8A8A] font-light max-w-3xl leading-relaxed">
            An intimate visual conversation capturing artistic reflection, screen craft, and creative discipline. Directed and conducted by Navanitha Vijayakumar.
          </p>
        </div>

        {/* Pure Cinema Video Player (Direct Stream via URL) */}
        {embedSource && !iframeError && (
          <div>
            <div className="relative aspect-video w-full max-w-6xl mx-auto bg-[#050505] rounded-lg overflow-hidden border border-[#222222] shadow-2xl">
              <iframe
                src={embedSource}
                title="Interview with Ragul Chandran"
                className="w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
                onError={() => setIframeError(true)}
              />
            </div>
          </div>
        )}

        {/* Project & Production Details */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-[#1C1C1C]">
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F1EB]">
              Creative Direction &amp; Narrative Approach
            </h3>
            <p className="text-base text-[#8A8A8A] font-light leading-relaxed">
              Conducted and directed by Navanitha Vijayakumar, this celebrity interview with actor Ragul Chandran focuses on genuine human reflection, behind-the-scenes craft, and the subtleties of performance. Captured with intimate multi-camera framing and naturalistic lighting, the conversation allows personal stories and spontaneous emotions to unfold with cinematic poise.
            </p>
          </div>

          {/* Credits */}
          <div className="lg:col-span-4 space-y-4 p-6 bg-[#0E0E0E] border border-[#1C1C1C] rounded-lg text-xs font-mono">
            <span className="text-[#C96B5A] uppercase tracking-widest block border-b border-[#1C1C1C] pb-3">
              CREDITS &amp; DETAILS
            </span>
            
            <div className="space-y-3 text-[#8A8A8A]">
              <div>
                <span className="text-[#555555] block">DIRECTOR &amp; INTERVIEWER</span>
                <span className="text-[#F4F1EB] text-sm font-serif">Navanitha Vijayakumar</span>
              </div>
              <div>
                <span className="text-[#555555] block">FEATURED GUEST</span>
                <span className="text-[#F4F1EB] text-sm font-serif">Ragul Chandran</span>
              </div>
              <div>
                <span className="text-[#555555] block">CATEGORY</span>
                <span className="text-[#DDDBD6]">Celebrity Interview / Film &amp; Digital</span>
              </div>
              <div>
                <span className="text-[#555555] block">FORMAT</span>
                <span className="text-[#DDDBD6]">16:9 Widescreen Cinema</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
