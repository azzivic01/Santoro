import React from 'react';

interface FooterProps {
  onOpenVisitModal: () => void;
  onOpenJournalModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVisitModal, onOpenJournalModal }) => {
  return (
    <footer className="relative bg-[#0E0C0A] border-t border-[#26201B] py-16 text-[#A69C90]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#1F1914]">
          {/* Brand Colophon */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="text-2xl lg:text-3xl font-serif tracking-[0.2em] uppercase text-[#F6F3EC] block"
            >
              SANTORO
            </a>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#8E7044]">
              GELATERIA ROMANA · DAL 1958
            </div>
            <p className="text-xs text-[#8E8377] font-sans leading-relaxed max-w-sm pt-2">
              Una casa di ospitalità a Rione Ponte dove il gelato nasce dal latte crudo, dalle materie d’origine protetta e dal tempo concesso a ogni singolo gesto.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C29B38]">
              INDICE DELLA CASA
            </div>
            <ul className="space-y-2 text-xs font-sans text-[#C7BEB3]">
              <li>
                <a href="#casa" className="hover:text-[#F6F3EC] transition-colors">
                  La Casa & Il Portale
                </a>
              </li>
              <li>
                <a href="#banco" className="hover:text-[#F6F3EC] transition-colors">
                  Il Banco & I Gusti
                </a>
              </li>
              <li>
                <a href="#laboratorio" className="hover:text-[#F6F3EC] transition-colors">
                  Il Laboratorio a Mano
                </a>
              </li>
              <li>
                <a href="#ingredienti" className="hover:text-[#F6F3EC] transition-colors">
                  Monografie degli Ingredienti
                </a>
              </li>
              <li>
                <a href="#ospite" className="hover:text-[#F6F3EC] transition-colors">
                  L’Ospite & Il Cucchiaino
                </a>
              </li>
              <li>
                <a href="#sera" className="hover:text-[#F6F3EC] transition-colors">
                  La Sera a Rione Ponte
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Quick Actions */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C29B38]">
              INDIRIZZO & ORARI
            </div>
            <p className="text-xs text-[#C7BEB3] font-mono">
              Via dei Coronari, 44<br />
              00186 Roma (Rione Ponte)<br />
              Martedì – Domenica: 11:30 — 00:30
            </p>
            <div className="pt-3 flex flex-wrap gap-2">
              <button
                onClick={onOpenVisitModal}
                className="px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-wider bg-[#1B1612] text-[#E8E2D9] border border-[#2F261E] rounded hover:border-[#C29B38] transition-colors"
              >
                Orari Dettagliati
              </button>
              <button
                onClick={onOpenJournalModal}
                className="px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-wider bg-[#1B1612] text-[#E8E2D9] border border-[#2F261E] rounded hover:border-[#C29B38] transition-colors"
              >
                Taccuino dei Sapori
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#6A6055] gap-4">
          <div>
            © 1958–{new Date().getFullYear()} Santoro Gelateria Romana. Tutti i diritti riservati.
          </div>
          <div className="flex items-center gap-4 text-[#8E7044]">
            <span>ROMA CAPUT MUNDI</span>
            <span>·</span>
            <span>IL GELATO, FATTO LENTO.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
