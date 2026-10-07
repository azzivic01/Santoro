import React from 'react';

export const RomaSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#14110E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#29221B] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#8E7044] mb-3">
              <span>ATMOSFERA 08</span>
              <span>·</span>
              <span>RIONE PONTE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#F6F3EC] tracking-tight uppercase">
              Roma
            </h2>
            <div className="mt-2 text-xs font-mono tracking-[0.3em] uppercase text-[#C29B38]">
              SHADOWS & TRAVERTINE
            </div>
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.16em] text-[#A69C90] max-w-sm md:text-right">
            Non cartoline monumentali né turismo affrettato. Solo la materia viva dei vicoli di pietra e la luce dorata del pomeriggio.
          </p>
        </div>

        {/* 80% Image / 20% Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Visual Asset: Dedicated photograph of quiet Roman stone alley in Rione Ponte */}
          <div className="lg:col-span-8 group relative overflow-hidden rounded border border-[#2B241E] bg-[#181411]">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="/src/assets/images/santoro_roma_street_1791339994934.jpg"
                alt="Vicolo acciottolato silenzioso in Rione Ponte a Roma con facciate di palazzi in intonaco ocra, ombre profonde e luce calda pomeridiana"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-4 bg-[#16120F] flex items-center justify-between text-[11px] font-mono text-[#8E8377] border-t border-[#26201B]">
              <span>FIG. 08 — VICOLO DEI CORONARI · SANPIETRINI E TRAVERTINO</span>
              <span className="text-[#C29B38]">A POCHI PASSI DAL PALAZZO</span>
            </div>
          </div>

          {/* Roman Atmospheric Narrative */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
                L’ARIA DELLA CITTÀ ETERNA
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#F6F3EC] leading-snug">
                La pietra trattiene il calore di tre millenni.
              </h3>
              <p className="text-sm text-[#BDB2A4] leading-relaxed font-sans">
                Il gelato di Santoro non potrebbe esistere altrove. È figlio dell’aria secca che scende dal colle Quirinale al Tevere, dell’ombra fresca delle alte corti nobiliari e della pietra che rifiuta la fretta.
              </p>
            </div>

            <div className="p-5 bg-[#171310] rounded border border-[#241E19] space-y-3">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E7044]">
                Coordinate del Luogo
              </div>
              <div className="text-xs text-[#C7BEB3] space-y-1 font-mono">
                <div>Lat: 41°54'01" N · Lon: 12°28'10" E</div>
                <div>Altitudine: 18m s.l.m.</div>
                <div>Umidità media di servizio: 42%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
