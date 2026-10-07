import React from 'react';
import { Flavour } from '../types';
import { FLAVOURS } from '../data/santoroData';
import { X, Plus, Trash2, Sparkles } from 'lucide-react';

interface TastingJournalModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFlavours: Flavour[];
  onAddFlavour: (flavour: Flavour) => void;
  onRemoveFlavour: (flavourId: string) => void;
  onClear: () => void;
}

export const TastingJournalModal: React.FC<TastingJournalModalProps> = ({
  isOpen,
  onClose,
  selectedFlavours,
  onAddFlavour,
  onRemoveFlavour,
  onClear,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#12100E]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#181410] border border-[#332A22] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative text-[#E8E2D9]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#8E8377] hover:text-[#F6F3EC] transition-colors"
          aria-label="Chiudi finestra"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pb-4 border-b border-[#29221B]">
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8E7044] mb-1">
            SANTORO · DEGUSTAZIONE SLOW
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#F6F3EC]">
            Il Taccuino dei Sapori
          </h3>
          <p className="text-xs text-[#A69C90] mt-1 font-sans">
            Componi la tua coppa d’alpacca con due o tre gusti per scoprire l’armonia aromatica tra creme, frutta e ricette storiche.
          </p>
        </div>

        {/* Selected Coupe Presentation */}
        <div className="mb-8 p-5 bg-[#14110E] rounded border border-[#2B231D]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
              LA TUA COPPA ({selectedFlavours.length}/3 GUSTI)
            </span>
            {selectedFlavours.length > 0 && (
              <button
                onClick={onClear}
                className="text-xs font-mono text-[#8E8377] hover:text-[#C29B38] flex items-center gap-1 transition-colors"
              >
                <Trash2 className="w-3 h-3" />
                <span>Azzera</span>
              </button>
            )}
          </div>

          {selectedFlavours.length === 0 ? (
            <div className="text-center py-6 text-xs text-[#7A6E63] font-mono uppercase tracking-wider">
              Nessun gusto selezionato. Scegli fino a tre varietà dal banco sottostante.
            </div>
          ) : (
            <div className="space-y-3">
              {selectedFlavours.map((flavour, idx) => (
                <div
                  key={flavour.id}
                  className="flex items-center justify-between p-3 bg-[#1B1612] rounded border border-[#29221B]"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#C29B38]">0{idx + 1}</span>
                      <span className="text-sm font-serif text-[#F6F3EC]">{flavour.name}</span>
                    </div>
                    <div className="text-[11px] font-mono text-[#8E7044] mt-0.5 ml-4">
                      {flavour.origin} · {flavour.temperature}
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveFlavour(flavour.id)}
                    className="p-1 text-[#7A6E63] hover:text-[#8F3E29] transition-colors"
                    aria-label={`Rimuovi ${flavour.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Pairing Harmony Note */}
              <div className="mt-4 pt-3 border-t border-[#26201B] flex items-start gap-2 text-xs text-[#C7BEB3]">
                <Sparkles className="w-4 h-4 text-[#C29B38] shrink-0 mt-0.5" />
                <p className="font-serif italic text-xs leading-relaxed">
                  Nota del Mastro Gelatiere: Questa combinazione bilancia l’untuosità nobile dei grassi vaccini con la purezza minerale. Si consiglia di iniziare dal gusto a temperatura più fredda.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Flavour Add Picker */}
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#8E7044] mb-3">
            AGGIUNGI DAL BANCO DI OGGI
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {FLAVOURS.map((f) => {
              const isAlreadyAdded = selectedFlavours.some((item) => item.id === f.id);
              const isFull = selectedFlavours.length >= 3;
              return (
                <button
                  key={f.id}
                  disabled={isAlreadyAdded || (isFull && !isAlreadyAdded)}
                  onClick={() => onAddFlavour(f)}
                  className={`p-3 text-left rounded border transition-colors flex items-center justify-between ${
                    isAlreadyAdded
                      ? 'border-[#3D332A] bg-[#14110E] opacity-50 cursor-not-allowed'
                      : isFull
                      ? 'border-[#26201B] bg-[#16120F] opacity-40 cursor-not-allowed'
                      : 'border-[#29221B] hover:border-[#C29B38] bg-[#1A1511] text-[#E8E2D9]'
                  }`}
                >
                  <div className="pr-2">
                    <div className="text-xs font-serif text-[#F6F3EC] leading-tight truncate">
                      {f.name}
                    </div>
                    <div className="text-[10px] font-mono text-[#8E7044] uppercase tracking-wider mt-0.5">
                      {f.subtitle}
                    </div>
                  </div>
                  {!isAlreadyAdded && !isFull && (
                    <Plus className="w-3.5 h-3.5 text-[#C29B38] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom actions */}
        <div className="mt-8 pt-4 border-t border-[#29221B] flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#7A6E63]">
            Presenta questo abbinamento al banco di Rione Ponte.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs uppercase tracking-[0.16em] bg-[#E8E2D9] text-[#141210] font-medium rounded hover:bg-[#F6F3EC] transition-colors"
          >
            Chiudi Taccuino
          </button>
        </div>
      </div>
    </div>
  );
};
