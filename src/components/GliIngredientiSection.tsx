import React, { useState } from 'react';
import { INGREDIENTS } from '../data/santoroData';
import { Ingredient } from '../types';

export const GliIngredientiSection: React.FC = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient>(INGREDIENTS[0]);

  return (
    <section id="ingredienti" className="relative py-28 bg-[#14110E] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#29221B] pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#8E7044] mb-3">
              <span>MATERIA PURA 04</span>
              <span>·</span>
              <span>TERROIR & ORIGINE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#F6F3EC] tracking-tight uppercase">
              Gli Ingredienti
            </h2>
            <div className="mt-2 text-xs font-mono tracking-[0.25em] uppercase text-[#C29B38]">
              NO SHORTCUTS · NO SURROGATES
            </div>
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.16em] text-[#A69C90] max-w-sm md:text-right">
            Ogni ingrediente parla della sua terra d’origine prima di diventare gelato a Roma.
          </p>
        </div>

        {/* Master Editorial Still-Life Visual Asset: 80% Image / 20% Text */}
        <div className="relative group overflow-hidden rounded border border-[#2B241E] bg-[#181411] mb-12">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img
              src="/src/assets/images/santoro_ingredienti_1791339986089.jpg"
              alt="Still-life editoriale gastronomico delle materie prime su lastra di travertino: pistacchi di Bronte, nocciole delle Langhe, fave di cacao Criollo, limone sfusato di Amalfi e fragoline di bosco"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
          </div>
          <div className="p-4 bg-[#16120F] flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] font-mono text-[#8E8377] border-t border-[#26201B] gap-2">
            <span>FIG. 04 — STILL-LIFE DELLE MATERIE PRIME SUL TRAVERTINO</span>
            <div className="flex items-center gap-4 text-[#C29B38]">
              <span>SICILIA · PIEMONTE · VENEZUELA · AMALFI · COLLI ALBANI</span>
            </div>
          </div>
        </div>

        {/* Five Ingredient Monographs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
          {INGREDIENTS.map((ing) => {
            const isSelected = ing.id === selectedIngredient.id;
            return (
              <button
                key={ing.id}
                onClick={() => setSelectedIngredient(ing)}
                className={`p-4 rounded border text-left transition-all duration-300 relative ${
                  isSelected
                    ? 'border-[#C29B38] bg-[#1F1914] shadow-[0_4px_16px_rgba(0,0,0,0.5)]'
                    : 'border-[#26201B] hover:border-[#3D332A] bg-[#16120F]'
                }`}
              >
                <div className="text-[10px] font-mono text-[#8E7044] uppercase tracking-wider mb-1">
                  {ing.origin}
                </div>
                <div
                  className={`text-base font-serif font-medium ${
                    isSelected ? 'text-[#F6F3EC]' : 'text-[#A69C90]'
                  }`}
                >
                  {ing.name}
                </div>
                <div className="mt-2 text-[10px] font-mono text-[#7A6E63] uppercase">
                  {ing.harvest}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspector of Selected Ingredient */}
        <div className="p-8 bg-[#181410] border border-[#2B231D] rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
                  MONOGRAFIA MATERIA
                </span>
                <span className="text-[#3D332A]">/</span>
                <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#9E9385]">
                  {selectedIngredient.italianName}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-[#F6F3EC]">
                {selectedIngredient.name} —{' '}
                <span className="italic font-light text-[#D4CBBF]">
                  {selectedIngredient.region}
                </span>
              </h3>

              <p className="text-sm md:text-base text-[#BDB2A4] leading-relaxed font-sans">
                {selectedIngredient.curatorNote}
              </p>
            </div>

            <div className="lg:col-span-4 p-6 bg-[#130F0D] rounded border border-[#26201B] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E7044] block">
                PROFILO AROMATICO
              </span>
              <ul className="space-y-2">
                {selectedIngredient.sensoryNotes.map((note) => (
                  <li
                    key={note}
                    className="flex items-center gap-2 text-xs font-serif italic text-[#E8E2D9]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C29B38]" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-[#26201B] text-[11px] font-mono text-[#7A6E63]">
                Periodo di raccolta: <span className="text-[#E8E2D9]">{selectedIngredient.harvest}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
