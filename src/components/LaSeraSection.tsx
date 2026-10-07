import React from 'react';

interface LaSeraSectionProps {
  onOpenVisitModal: () => void;
}

export const LaSeraSection: React.FC<LaSeraSectionProps> = ({ onOpenVisitModal }) => {
  return (
    <section id="sera" className="relative py-28 bg-[#12100E] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#26201B] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#8E7044] mb-3">
              <span>CREPUSCOLO 09</span>
              <span>·</span>
              <span>LA CHIUSURA DEL PALAZZO</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#F6F3EC] tracking-tight uppercase">
              La Sera
            </h2>
            <div className="mt-2 text-xs font-mono tracking-[0.3em] uppercase text-[#C29B38]">
              ROMA DOES NOT HURRY.
            </div>
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.16em] text-[#A69C90] max-w-sm md:text-right">
            Quando il sole scende oltre il colle Vaticano, il palazzo si accende di luce ambrata per gli ultimi viandanti.
          </p>
        </div>

        {/* Master Evening Visual Asset: Dedicated photograph of the exterior facade at dusk */}
        <div className="relative group overflow-hidden rounded border border-[#2B241E] bg-[#181411] mb-16">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img
              src="/src/assets/images/santoro_la_sera_1791339877758.jpg"
              alt="Facciata di Palazzo Santoro a Roma all'imbrunire con luce dorata che filtra dai portali in legno sulla strada lastricata di sanpietrini"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </div>
          <div className="p-4 bg-[#16120F] flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] font-mono text-[#8E8377] border-t border-[#26201B] gap-2">
            <span>FIG. 09 — LA FACCIATA ALL’IMBRUNIRE · ORE 22:30</span>
            <span className="text-[#C29B38]">ULTIMA MANTECATURA DELLA NOTTE</span>
          </div>
        </div>

        {/* Emotional Closing Monograph */}
        <div className="max-w-3xl mx-auto text-center space-y-8 py-8">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C29B38]">
              L’ULTIMO CUCCHIAINO
            </span>
            <h3 className="text-3xl md:text-5xl font-serif text-[#F6F3EC] leading-tight">
              Una luce accesa a Rione Ponte fino a mezzanotte e mezza.
            </h3>
            <p className="text-base md:text-lg text-[#BDB2A4] font-serif italic max-w-2xl mx-auto leading-relaxed">
              «Quando la città tace, il marmo del banco rimane fresco. Gli ultimi clienti scambiano due parole a voce bassa. Poi le carapine vengono coperte, e il palazzo riposa fino all’alba del nuovo latte.»
            </p>
          </div>

          <div className="pt-8 border-t border-[#26201B] flex flex-col items-center">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#8E7044] mb-2">
              GELATERIA ROMANA
            </div>
            <div className="text-3xl sm:text-4xl font-serif uppercase tracking-[0.2em] text-[#F6F3EC]">
              SANTORO
            </div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#A69C90] mt-1">
              DAL 1958 · ROMA
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenVisitModal}
                className="px-6 py-3 text-xs uppercase tracking-[0.2em] font-sans bg-[#E8E2D9] text-[#141210] hover:bg-[#F6F3EC] transition-all duration-300 font-medium rounded"
              >
                Vieni a Trovarci al Palazzo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
