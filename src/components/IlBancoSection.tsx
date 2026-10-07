import React, { useState } from 'react';
import { FLAVOURS } from '../data/santoroData';
import { Flavour } from '../types';

interface IlBancoSectionProps {
  onSelectFlavour: (flavour: Flavour) => void;
}

export const IlBancoSection: React.FC<IlBancoSectionProps> = ({ onSelectFlavour }) => {
  const [selectedFlavour, setSelectedFlavour] = useState<Flavour>(FLAVOURS[0]);
  const [filterCategory, setFilterCategory] = useState<'all' | 'creme' | 'frutta' | 'storici'>('all');

  const filteredFlavours = filterCategory === 'all'
    ? FLAVOURS
    : FLAVOURS.filter((f) => f.category === filterCategory);

  return (
    <section id="banco" className="relative py-28 bg-[#14110E] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#29221B] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#8E7044] mb-3">
              <span>IL TEATRO DEL GUSTO 02</span>
              <span>·</span>
              <span>MARMO & CARAPINE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#F6F3EC] tracking-tight uppercase">
              Il Banco
            </h2>
            <p className="mt-2 text-xl md:text-2xl font-serif italic text-[#C29B38]">
              Choose slowly.
            </p>
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.16em] text-[#A69C90] max-w-sm md:text-right">
            Il banco non è una vetrina da supermercato. È un altare di marmo crema dove la scelta richiede tempo e ascolto.
          </p>
        </div>

        {/* Counter Editorial Stage: 80% Image / 20% Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Main Visual Asset: Dedicated photograph of the Crema Marble Counter */}
          <div className="lg:col-span-7 group relative overflow-hidden rounded border border-[#2B241E] bg-[#181411]">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="/src/assets/images/santoro_il_banco_1791339829603.jpg"
                alt="Banco monolitico in marmo crema con carapine in acciaio e la mano dell'artigiano che lavora il gelato con paletta tradizionale"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-4 bg-[#16120F] flex items-center justify-between text-[11px] font-mono text-[#8E8377] border-t border-[#26201B]">
              <span>FIG. 02 — IL BANCO IN MARMO CREMA MARFIL</span>
              <span className="text-[#C29B38]">MANTECATURA FRESCA DEL MATTINO</span>
            </div>
          </div>

          {/* Inspection Card of the active Flavour on the Counter */}
          <div className="lg:col-span-5 bg-[#181410] border border-[#2E2721] p-8 rounded-lg space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C29B38]">
                {selectedFlavour.subtitle}
              </span>
              <span className="text-xs font-mono text-[#8E8377]">
                T: {selectedFlavour.temperature}
              </span>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#F6F3EC]">
                {selectedFlavour.name}
              </h3>
              <p className="text-xs font-mono text-[#8E7044] mt-1 uppercase tracking-wider">
                Origine: {selectedFlavour.origin}
              </p>
            </div>

            <p className="text-sm text-[#BDB2A4] leading-relaxed font-sans">
              {selectedFlavour.description}
            </p>

            {/* Tasting Notes */}
            <div className="pt-4 border-t border-[#2B241E] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E7044] block">
                NOTE SENSORIALI & TRAMA
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedFlavour.tastingNotes.map((note) => (
                  <span
                    key={note}
                    className="text-xs font-serif italic text-[#E8E2D9] px-2.5 py-1 bg-[#130F0D] rounded border border-[#26201B]"
                  >
                    {note}
                  </span>
                ))}
              </div>
              <div className="text-xs font-mono text-[#A69C90] pt-1">
                <span className="text-[#8E7044]">Textura:</span> {selectedFlavour.texture}
              </div>
            </div>

            {/* Action to add to personal tasting note */}
            <div className="pt-2">
              <button
                onClick={() => onSelectFlavour(selectedFlavour)}
                className="w-full py-2.5 text-xs uppercase tracking-[0.18em] font-sans text-[#F6F3EC] border border-[#C29B38]/50 hover:bg-[#C29B38]/10 hover:border-[#C29B38] transition-colors rounded text-center"
              >
                Aggiungi al Taccuino di Degustazione
              </button>
            </div>
          </div>
        </div>

        {/* Flavour Browser (Interactive segmented tabs) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#26201B] mb-6 gap-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8E7044]">
              I GUSTI DEL GIORNO SUL BANCO (SELEZIONE STAGIONALE)
            </span>
            <div className="flex items-center gap-1 p-1 bg-[#181410] rounded border border-[#26201B]">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-3 py-1 text-xs font-mono transition-colors rounded ${
                  filterCategory === 'all'
                    ? 'bg-[#C29B38] text-[#141210] font-medium'
                    : 'text-[#8E8377] hover:text-[#E8E2D9]'
                }`}
              >
                Tutti (8)
              </button>
              <button
                onClick={() => setFilterCategory('creme')}
                className={`px-3 py-1 text-xs font-mono transition-colors rounded ${
                  filterCategory === 'creme'
                    ? 'bg-[#C29B38] text-[#141210] font-medium'
                    : 'text-[#8E8377] hover:text-[#E8E2D9]'
                }`}
              >
                Creme
              </button>
              <button
                onClick={() => setFilterCategory('frutta')}
                className={`px-3 py-1 text-xs font-mono transition-colors rounded ${
                  filterCategory === 'frutta'
                    ? 'bg-[#C29B38] text-[#141210] font-medium'
                    : 'text-[#8E8377] hover:text-[#E8E2D9]'
                }`}
              >
                Frutta
              </button>
              <button
                onClick={() => setFilterCategory('storici')}
                className={`px-3 py-1 text-xs font-mono transition-colors rounded ${
                  filterCategory === 'storici'
                    ? 'bg-[#C29B38] text-[#141210] font-medium'
                    : 'text-[#8E8377] hover:text-[#E8E2D9]'
                }`}
              >
                Storici 1958
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredFlavours.map((flavour) => {
              const isSelected = flavour.id === selectedFlavour.id;
              return (
                <button
                  key={flavour.id}
                  onClick={() => setSelectedFlavour(flavour)}
                  className={`text-left p-4 rounded border transition-all duration-300 relative group ${
                    isSelected
                      ? 'border-[#C29B38] bg-[#1E1914] shadow-[0_4px_16px_rgba(0,0,0,0.4)]'
                      : 'border-[#26201B] hover:border-[#3D332A] bg-[#16120F]'
                  }`}
                >
                  <div className="text-[10px] font-mono text-[#8E7044] uppercase tracking-wider mb-1">
                    {flavour.subtitle}
                  </div>
                  <h4 className="text-base font-serif text-[#F6F3EC] leading-snug group-hover:text-[#C29B38] transition-colors">
                    {flavour.name}
                  </h4>
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#7A6E63]">
                    <span>{flavour.origin}</span>
                    <span className="text-[#C29B38]">{flavour.temperature}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
