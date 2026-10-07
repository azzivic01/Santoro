import React from 'react';

export const IlLaboratorioSection: React.FC = () => {
  return (
    <section id="laboratorio" className="relative py-28 bg-[#12100E] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#26201B] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#8E7044] mb-3">
              <span>MESTIERE 03</span>
              <span>·</span>
              <span>MANI, MATERIA & ATTREZZI</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#F6F3EC] tracking-tight uppercase">
              Il Laboratorio
            </h2>
            <div className="mt-2 text-xs font-mono tracking-[0.3em] uppercase text-[#C29B38]">
              MADE BY HAND
            </div>
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.16em] text-[#A69C90] max-w-sm md:text-right">
            Nessun preparato industriale. Solo rame, acciaio, latte vivo e il tempo necessario alla trasformazione.
          </p>
        </div>

        {/* 80% Image / 20% Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Visual Asset: Dedicated photograph of artisan hands working freshly churned gelato */}
          <div className="lg:col-span-8 group relative overflow-hidden rounded border border-[#2B241E] bg-[#181411]">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="/src/assets/images/santoro_laboratorio_1791339842270.jpg"
                alt="Mani dell'artigiano che lavorano pistacchio tostato e crema su piano di marmo nel laboratorio storico di Santoro con attrezzi d'epoca in rame e acciaio"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-4 bg-[#16120F] flex items-center justify-between text-[11px] font-mono text-[#8E8377] border-t border-[#26201B]">
              <span>FIG. 03 — LABORATORIO INTERNO · CORTE DEL PALAZZO</span>
              <span className="text-[#C29B38]">LOTTO 014 / ORE 07:45</span>
            </div>
          </div>

          {/* Documentary Principles */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
                I TRE CANONI DI SANTORO
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#F6F3EC] leading-snug">
                Nessun compromesso con la velocità.
              </h3>
              <p className="text-sm text-[#BDB2A4] leading-relaxed font-sans">
                Non usiamo pastorizzatori continui veloci né paste industriali premiscelate. Ogni ingrediente entra grezzo nel laboratorio e viene macinato o infuso la mattina stessa del servizio.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#26201B]">
              <div className="p-4 bg-[#171310] rounded border border-[#241E19]">
                <div className="text-xs font-serif font-medium text-[#F6F3EC]">
                  01. Mantecazione Verticale Lenta
                </div>
                <p className="text-xs text-[#9E9385] mt-1 font-sans leading-relaxed">
                  I cilindri verticali d’epoca mantecano a 48 giri al minuto. Il gelato incorpora solo l’aria naturale che gli spetta (overrun 24%), senza forzature pneumatiche.
                </p>
              </div>

              <div className="p-4 bg-[#171310] rounded border border-[#241E19]">
                <div className="text-xs font-serif font-medium text-[#F6F3EC]">
                  02. Zero Emulsionanti Sintetici
                </div>
                <p className="text-xs text-[#9E9385] mt-1 font-sans leading-relaxed">
                  Unico legante naturale è la farina di semi di carrube siciliana macinata a freddo, che non copre l’aroma del latte crudo e non lascia film grassi sulla lingua.
                </p>
              </div>

              <div className="p-4 bg-[#171310] rounded border border-[#241E19]">
                <div className="text-xs font-serif font-medium text-[#F6F3EC]">
                  03. Servizio a Paletta
                </div>
                <p className="text-xs text-[#9E9385] mt-1 font-sans leading-relaxed">
                  Rifiutiamo il dosatore a pallina che comprime e strappa la struttura. La paletta piatta distende la crema con delicatezza sul cono o nella coppa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
