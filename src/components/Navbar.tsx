import React, { useState, useEffect } from 'react';
import { palazzoAmbience } from '../utils/audioAmbience';
import { Volume2, VolumeX, Menu, X, Clock } from 'lucide-react';

interface NavbarProps {
  onOpenVisitModal: () => void;
  onOpenJournalModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVisitModal, onOpenJournalModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const newState = palazzoAmbience.toggle();
    setIsAudioActive(newState);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#141210]/92 backdrop-blur-md border-b border-[#2D2620]'
            : 'bg-gradient-to-b from-[#12100E]/80 via-[#12100E]/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Zone 1: Single text wordmark in Roman serif display */}
          <a
            href="#"
            className="text-2xl lg:text-3xl font-serif tracking-[0.2em] uppercase text-[#F6F3EC] hover:text-[#C29B38] transition-colors shrink-0"
            aria-label="SANTORO — Ritorna all'inizio"
          >
            SANTORO
          </a>

          {/* Zone 2: 4-6 text links with subtle hover styling */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs tracking-[0.16em] uppercase font-sans text-[#C7BEB3]">
            <a href="#casa" className="hover:text-[#F6F3EC] transition-colors py-1 relative group">
              La Casa
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C29B38] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#banco" className="hover:text-[#F6F3EC] transition-colors py-1 relative group">
              Il Banco
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C29B38] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#laboratorio" className="hover:text-[#F6F3EC] transition-colors py-1 relative group">
              Il Laboratorio
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C29B38] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#ingredienti" className="hover:text-[#F6F3EC] transition-colors py-1 relative group">
              Ingredienti
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C29B38] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#ospite" className="hover:text-[#F6F3EC] transition-colors py-1 relative group">
              L’Ospite
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C29B38] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#sera" className="hover:text-[#F6F3EC] transition-colors py-1 relative group">
              La Sera
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C29B38] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Ambient sound toggle */}
            <button
              onClick={handleAudioToggle}
              className={`p-2 rounded-full border transition-all duration-300 flex items-center justify-center text-xs ${
                isAudioActive
                  ? 'border-[#C29B38] text-[#C29B38] bg-[#C29B38]/10 shadow-[0_0_12px_rgba(194,155,56,0.25)]'
                  : 'border-[#3D332A] text-[#9E9385] hover:text-[#E8E2D9] hover:border-[#5C4F42]'
              }`}
              title={isAudioActive ? 'Disattiva atmosfera sonora del palazzo' : 'Attiva atmosfera sonora del palazzo'}
              aria-label="Atmosfera sonora"
            >
              {isAudioActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Tasting Journal / Flavours button */}
            <button
              onClick={onOpenJournalModal}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs uppercase tracking-[0.14em] font-sans text-[#E2DACF] border border-[#3D332A] rounded hover:border-[#C29B38] hover:text-[#F6F3EC] transition-colors whitespace-nowrap"
            >
              Taccuino
            </button>

            {/* Visit Modal primary action */}
            <button
              onClick={onOpenVisitModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.14em] font-sans text-[#141210] bg-[#E8E2D9] hover:bg-[#F6F3EC] transition-all duration-300 rounded whitespace-nowrap font-medium"
            >
              <Clock className="w-3 h-3 text-[#141210]" />
              <span>Orari & Visita</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#C7BEB3] hover:text-[#F6F3EC] transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#12100E]/98 flex flex-col justify-center px-8 md:hidden animate-in fade-in duration-200">
          <div className="text-xs uppercase tracking-[0.25em] text-[#8E7044] mb-8 font-mono">
            SANTORO · ROMA DAL 1958
          </div>
          <nav className="flex flex-col gap-6 text-xl font-serif text-[#F6F3EC]">
            <a
              href="#casa"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#C29B38] transition-colors"
            >
              La Casa
            </a>
            <a
              href="#banco"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#C29B38] transition-colors"
            >
              Il Banco
            </a>
            <a
              href="#laboratorio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#C29B38] transition-colors"
            >
              Il Laboratorio
            </a>
            <a
              href="#ingredienti"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#C29B38] transition-colors"
            >
              Gli Ingredienti
            </a>
            <a
              href="#ospite"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#C29B38] transition-colors"
            >
              L’Ospite
            </a>
            <a
              href="#sera"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#C29B38] transition-colors"
            >
              La Sera
            </a>
          </nav>

          <div className="mt-10 pt-6 border-t border-[#2D2620] flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenJournalModal();
              }}
              className="w-full py-3 text-xs uppercase tracking-[0.18em] border border-[#3D332A] text-[#E8E2D9] text-center"
            >
              Componi la tua Coppa (Taccuino)
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenVisitModal();
              }}
              className="w-full py-3 text-xs uppercase tracking-[0.18em] bg-[#E8E2D9] text-[#141210] font-medium text-center"
            >
              Orari del Palazzo & Posizione
            </button>
          </div>
        </div>
      )}
    </>
  );
};
