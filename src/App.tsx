import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Work } from './pages/Work';
import { Production } from './pages/Production';
import { FilmInterview } from './pages/FilmInterview';
import { AdPhotoshoot } from './pages/AdPhotoshoot';
import { Photography } from './pages/Photography';
import { ProjectDetails } from './pages/ProjectDetails';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#F4F1EB] selection:bg-[#C96B5A] selection:text-[#0A0A0A]">
        {/* Sticky Desktop & Mobile Navigation */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/production" element={<Production />} />
            <Route path="/work/film-interview" element={<FilmInterview />} />
            <Route path="/work/ad-photoshoot" element={<AdPhotoshoot />} />
            <Route path="/work/photography" element={<Photography />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Minimal Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
