import React from 'react';

export const LaTexturaSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#12100E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#26201B] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#8E7044] mb-3">
              <span>FISICA DEL FREDDO 05</span>
              <span>·</span>
              <span>MACROGRAFIA DEL CUCCHIAINO</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#F6F3EC] tracking-tight uppercase">
              Textura
            </h2>
            <div className="mt-2 text-xs font-mono tracking-[0.3em] uppercase text-[#C29B38]">
              COLD / SOFT / DENSE
            </div>
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.16em] text-[#A69C90] max-w-sm md:text-right">
            Il gelato non deve gelare la bocca. A meno dieci gradi, la lingua percepisce ogni molecola aromatica.
          </p>
        </div>

        {/* 80% Image / 20% Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Visual Asset: Dedicated extreme macro food editorial photograph */}
          <div className="lg:col-span-8 group relative overflow-hidden rounded border border-[#2B241E] bg-[#181411]">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="/src/assets/images/santoro_textura_spoon_1791339853230.jpg"
                alt="Macrofotografia tattile del cucchiaino d'argento antico che entra nel gelato al pistacchio e crema denso e vellutato"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-4 bg-[#16120F] flex items-center justify-between text-[11px] font-mono text-[#8E8377] border-t border-[#26201B]">
              <span>FIG. 05 — MACROGRAFIA · CUCCHIAINO D’ALPACCA ARGENTATO</span>
              <span className="text-[#C29B38]">TEMPERATURA DI SERVIZIO: -10.5°C</span>
            </div>
          </div>

          {/* Physical tactile data points */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
                IL PARADOSSO DEL FREDDO ROMANO
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#F6F3EC] leading-snug">
                La densità che si scioglie senza fretta.
              </h3>
              <p className="text-sm text-[#BDB2A4] leading-relaxed font-sans">
                I gelati commerciali vengono serviti a -18°C per compensare l’eccesso d’aria e conservarli per mesi. A Santoro il gelato è vivo: prodotto al mattino, consumato prima di sera, servito a temperatura di riposo per esaltare i grassi nobili del latte.
              </p>
            </div>

            <div className="pt-6 border-t border-[#26201B] space-y-4">
              <div className="p-4 bg-[#171310] rounded border border-[#241E19] flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#8E7044] tracking-wider">
                    Overrun Naturale (Aria)
                  </div>
                  <div className="text-lg font-serif text-[#F6F3EC] mt-0.5">24%</div>
                </div>
                <div className="text-[11px] font-mono text-[#7A6E63] text-right">
                  Industriale: <span className="line-through text-[#8F3E29]">80–100%</span>
                </div>
              </div>

              <div className="p-4 bg-[#171310] rounded border border-[#241E19] flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#8E7044] tracking-wider">
                    Punto di Servizio
                  </div>
                  <div className="text-lg font-serif text-[#F6F3EC] mt-0.5">-10.5°C</div>
                </div>
                <div className="text-[11px] font-mono text-[#7A6E63] text-right">
                  Percezione aromatica immediata
                </div>
              </div>

              <div className="p-4 bg-[#171310] rounded border border-[#241E19] flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#8E7044] tracking-wider">
                    Tempo di Consumo Consigliato
                  </div>
                  <div className="text-lg font-serif text-[#F6F3EC] mt-0.5">8 – 12 minuti</div>
                </div>
                <div className="text-[11px] font-mono text-[#7A6E63] text-right">
                  Seduti al tavolo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
