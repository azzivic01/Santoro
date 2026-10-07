import React from 'react';

export const IlTavoloSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#12100E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#26201B] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#8E7044] mb-3">
              <span>RALLENTARE 07</span>
              <span>·</span>
              <span>LA PAUSA ROMANA</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#F6F3EC] tracking-tight uppercase">
              Il Tavolo
            </h2>
            <div className="mt-2 text-xs font-mono tracking-[0.3em] uppercase text-[#C29B38]">
              NO RUSH.
            </div>
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.16em] text-[#A69C90] max-w-sm md:text-right">
            Il gelato non è uno snack frettoloso. Diventa un’occasione di colloquio e silenzio.
          </p>
        </div>

        {/* 80% Image / 20% Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Visual Asset: Dedicated photograph of the marble table */}
          <div className="lg:col-span-8 group relative overflow-hidden rounded border border-[#2B241E] bg-[#181411]">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="/src/assets/images/santoro_il_tavolo_1791339867545.jpg"
                alt="Tavolino in marmo crema nel palazzo con due coppe d'alpacca argentate, cucchiaini, bicchiere d'acqua di cristallo e luce pomeridiana romana"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-4 bg-[#16120F] flex items-center justify-between text-[11px] font-mono text-[#8E8377] border-t border-[#26201B]">
              <span>FIG. 07 — SALA DEL MERIGGIO · TAVOLINO IN MARMO E CRISTALLO</span>
              <span className="text-[#C29B38]">LUCE DELLE ORE 16:30</span>
            </div>
          </div>

          {/* Table Narrative */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
                IL VALORE DEL TEMPO
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#F6F3EC] leading-snug">
                Due coppe, due cucchiaini, nessuna premura.
              </h3>
              <p className="text-sm text-[#BDB2A4] leading-relaxed font-sans">
                A Palazzo Santoro non ci sono orologi sui muri. Chi si siede al tavolo di marmo accanto alla finestra dai tendaggi di lino ha diritto a tutto il tempo necessario: per parlare con un amico, per finire un capitolo di un libro o semplicemente per guardare la luce che scivola sui cornicioni di Rione Ponte.
              </p>
            </div>

            <div className="p-5 bg-[#171310] rounded border border-[#241E19] space-y-3">
              <div className="text-xs font-serif italic text-[#E8E2D9]">
                «A Roma si impara presto che le cose migliori non accadono mentre si corre, ma nel momento esatto in cui ci si siede.»
              </div>
              <div className="text-[10px] font-mono text-[#8E7044] tracking-wider uppercase pt-2 border-t border-[#26201B]">
                Aurelio Santoro, Diario di Bottega, 1962
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
