import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { creatorProfile } from '../data/projects';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const menuItems = [
    { id: 'about', label: 'ABOUT ME' },
    { id: 'work', label: 'WORK' },
    { id: 'journey', label: 'MY JOURNEY' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleClick = (id: string) => {
    onClose();
    setTimeout(() => {
      onNavigate(id);
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#0A0A0A] text-[#F4F1EB] flex flex-col justify-between p-6 sm:p-10 select-none"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <span className="text-base font-serif tracking-widest uppercase text-[#F4F1EB]">
              NAVANITHA
            </span>

            <button
              onClick={onClose}
              className="p-2 text-[#8A8A8A] hover:text-[#F4F1EB] transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-7 h-7 stroke-[1.2]" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col space-y-7 sm:space-y-9 my-auto">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * (index + 1), duration: 0.4 }}
              >
                <button
                  onClick={() => handleClick(item.id)}
                  className="text-3xl sm:text-5xl font-serif tracking-tight text-left block text-[#F4F1EB] hover:text-[#C96B5A] transition-colors cursor-pointer group flex items-center justify-between w-full"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#C96B5A]" />
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Bottom Social Details */}
          <div className="pt-6 border-t border-[#1F1F1F] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#8A8A8A]">
            <div>{creatorProfile.name} · {creatorProfile.tagline}</div>
            <div className="flex items-center gap-6">
              <a
                href={creatorProfile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F4F1EB] transition-colors"
              >
                INSTAGRAM
              </a>
              <a
                href={creatorProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F4F1EB] transition-colors"
              >
                LINKEDIN
              </a>
              <a
                href={creatorProfile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F4F1EB] transition-colors"
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
