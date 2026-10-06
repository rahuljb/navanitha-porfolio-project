import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { creatorProfile } from '../data/projects';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1E1E1E] py-4'
            : 'bg-transparent py-7 sm:py-9'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          
          {/* Left: Brand Name (Full on desktop, NAVANITHA on mobile) */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-base sm:text-lg font-serif tracking-widest text-[#F4F1EB] hover:text-[#C96B5A] transition-colors uppercase whitespace-nowrap"
            aria-label="Navanitha Vijayakumar Home"
          >
            <span className="hidden sm:inline">{creatorProfile.name.toUpperCase()}</span>
            <span className="sm:hidden">NAVANITHA</span>
          </Link>

          {/* Right: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-xs font-mono tracking-widest uppercase text-[#8A8A8A]">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[#F4F1EB] transition-colors cursor-pointer"
            >
              ABOUT ME
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="hover:text-[#F4F1EB] transition-colors cursor-pointer"
            >
              WORK
            </button>
            <button
              onClick={() => scrollToSection('production')}
              className="hover:text-[#F4F1EB] transition-colors cursor-pointer"
            >
              PRODUCTION
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#C96B5A] transition-colors cursor-pointer"
            >
              CONTACT
            </button>
          </nav>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-[#F4F1EB] hover:text-[#C96B5A] transition-colors cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6 stroke-[1.2]" />
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={scrollToSection}
      />
    </>
  );
};
