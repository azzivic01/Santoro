import React from 'react';
import { ARCHITECTURAL_MATERIALS } from '../data/santoroData';

export const LaCasaSection: React.FC = () => {
  return (
    <section id="casa" className="relative py-28 bg-[#12100E] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header with quiet editorial restraint */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#26201B] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#8E7044] mb-3">
              <span>ARCHITETTURA 01</span>
              <span>·</span>
              <span>ROMA / DAL 1958</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#F6F3EC] tracking-tight uppercase">
              La Casa
            </h2>
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.16em] text-[#A69C90] max-w-sm md:text-right">
            L’architettura introduce la casa prima che il gelato tocchi il palato.
          </p>
        </div>

        {/* Cinematic Grid: 80% Image / 20% Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Visual Asset: Dedicated photograph of the palazzo entrance */}
          <div className="lg:col-span-8 group relative overflow-hidden rounded border border-[#2B241E] bg-[#181411]">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="/src/assets/images/santoro_la_casa_1791339967503.jpg"
                alt="Portale d’ingresso in travertino romano di Palazzo Santoro in Via dei Coronari, con porte in noce e targa del 1958"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
            {/* Subtle caption */}
            <div className="p-4 bg-[#16120F] flex items-center justify-between text-[11px] font-mono text-[#8E8377] border-t border-[#26201B]">
              <span>FIG. 01 — PORTALE D’ACCESSO IN VIA DEI CORONARI</span>
              <span className="text-[#C29B38]">44 · RIONE PONTE</span>
            </div>
          </div>

          {/* Editorial Side Narrative */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
                IL PALAZZO & LA SOGLIA
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#F6F3EC] leading-snug">
                Varcare una porta che accoglie da settant’anni.
              </h3>
              <p className="text-sm text-[#BDB2A4] leading-relaxed font-sans">
                Non c’è tornello, non c’è display fluorescente. A Palazzo Santoro si accede attraverso un portone di noce aperto sulla strada di sanpietrini, dove il profumo di cialda calda incontra la pietra antica.
              </p>
            </div>

            {/* Architectural materials list */}
            <div className="pt-6 border-t border-[#26201B] space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8E7044] block">
                MATERIE PRIMARIE DEL PALAZZO
              </span>
              <div className="space-y-3">
                {ARCHITECTURAL_MATERIALS.map((mat) => (
                  <div key={mat.name} className="p-3 bg-[#171310] rounded border border-[#241E19]">
                    <div className="flex items-center justify-between text-xs font-serif text-[#E8E2D9]">
                      <span className="font-medium text-[#F6F3EC]">{mat.name}</span>
                      <span className="text-[10px] font-mono text-[#8E7044]">{mat.romanSource}</span>
                    </div>
                    <p className="text-[11px] text-[#A69C90] mt-1 leading-snug font-sans">
                      {mat.tactileDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
