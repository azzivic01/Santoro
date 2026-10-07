import React from 'react';

export const LOspiteSection: React.FC = () => {
  return (
    <section id="ospite" className="relative py-28 bg-[#14110E] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#29221B] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#8E7044] mb-3">
              <span>OSPITALITÀ 06</span>
              <span>·</span>
              <span>IL CUORE UMANO</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#F6F3EC] tracking-tight uppercase">
              L’Ospite
            </h2>
            <p className="mt-2 text-xl md:text-2xl font-serif italic text-[#C29B38]">
              Stay a while.
            </p>
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.16em] text-[#A69C90] max-w-sm md:text-right">
            Il gelato è il prodotto. L’ospitalità è l’esperienza. Non vendiamo cibo da passeggio: accogliamo persone.
          </p>
        </div>

        {/* 80% Image / 20% Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Visual Asset: Dedicated photograph of artisan handing tasting spoon to guest */}
          <div className="lg:col-span-8 group relative overflow-hidden rounded border border-[#2B241E] bg-[#181411]">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="/src/assets/images/santoro_ospite_1791339977647.jpg"
                alt="Momento intimo e umano al banco in marmo: l'artigiano con grembiule di lino offre un cucchiaino d'argento con gelato a un ospite"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-4 bg-[#16120F] flex items-center justify-between text-[11px] font-mono text-[#8E8377] border-t border-[#26201B]">
              <span>FIG. 06 — IL RITO DEL CUCCHIAINO D’ARGENTO AL BANCO</span>
              <span className="text-[#C29B38]">DIALOGO SENZA FRETTA</span>
            </div>
          </div>

          {/* Hospitality Narrative */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
                IL RITO DELL’ASSAGGIO
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#F6F3EC] leading-snug">
                Prima di ordinare, c’è sempre un assaggio.
              </h3>
              <p className="text-sm text-[#BDB2A4] leading-relaxed font-sans">
                A Roma chi entra in una casa non viene interrogato sui suoi acquisti: gli si offre un bicchiere d’acqua e qualcosa di buono. Al banco di Santoro il primo gesto è la paletta che si tende con una punta di crema per capire cosa desidera il vostro palato oggi.
              </p>
            </div>

            <div className="p-5 bg-[#171310] rounded border border-[#241E19] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E7044] block">
                LE REGOLE DELLA CASA
              </span>
              <ul className="space-y-2.5 text-xs text-[#BDB2A4] font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-[#C29B38] font-mono text-xs">01</span>
                  <span>Si entra con il proprio passo; non esiste una fila che spinge alle spalle.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C29B38] font-mono text-xs">02</span>
                  <span>L’acqua minerale viene servita in cristallo prima della coppa di gelato.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C29B38] font-mono text-xs">03</span>
                  <span>I tavoli di marmo non richiedono supplemento di servizio: sono nati per farvi restare.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
