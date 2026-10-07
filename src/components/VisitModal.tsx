import React from 'react';
import { X, MapPin, Clock, Compass, Info } from 'lucide-react';

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitModal: React.FC<VisitModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#12100E]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#181410] border border-[#332A22] rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative text-[#E8E2D9]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#8E8377] hover:text-[#F6F3EC] transition-colors"
          aria-label="Chiudi finestra"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pb-4 border-b border-[#29221B]">
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8E7044] mb-1">
            PALAZZO SANTORO · ROMA DAL 1958
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#F6F3EC]">
            Orari & Visita alla Casa
          </h3>
          <p className="text-xs text-[#A69C90] mt-1 font-sans">
            Informazioni per chi desidera entrare con lentezza e sostare ai nostri tavoli di marmo.
          </p>
        </div>

        {/* Content Blocks */}
        <div className="space-y-6">
          {/* Address & Position */}
          <div className="p-4 bg-[#14110E] rounded border border-[#2B231D] flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#C29B38] shrink-0 mt-1" />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#8E7044]">
                Posizione
              </div>
              <div className="text-base font-serif text-[#F6F3EC] mt-0.5">
                Via dei Coronari, 44 — 00186 Roma
              </div>
              <div className="text-xs text-[#9E9385] mt-1 font-sans">
                Rione Ponte · Tra Piazza Navona e Ponte Sant’Angelo
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="p-4 bg-[#14110E] rounded border border-[#2B231D] flex items-start gap-3">
            <Clock className="w-4 h-4 text-[#C29B38] shrink-0 mt-1" />
            <div className="w-full">
              <div className="text-xs font-mono uppercase tracking-wider text-[#8E7044]">
                Orari della Bottega
              </div>
              <div className="mt-2 space-y-2 text-xs font-mono text-[#D4CBBF]">
                <div className="flex justify-between border-b border-[#241E18] pb-1">
                  <span>Martedì – Giovedì</span>
                  <span className="text-[#F6F3EC]">11:30 — 23:30</span>
                </div>
                <div className="flex justify-between border-b border-[#241E18] pb-1">
                  <span>Venerdì & Sabato</span>
                  <span className="text-[#F6F3EC]">11:30 — 00:30</span>
                </div>
                <div className="flex justify-between border-b border-[#241E18] pb-1">
                  <span>Domenica</span>
                  <span className="text-[#F6F3EC]">11:00 — 23:00</span>
                </div>
                <div className="flex justify-between text-[#7A6E63] pt-0.5">
                  <span>Lunedì</span>
                  <span>Chiuso per riposo e sanificazione</span>
                </div>
              </div>
            </div>
          </div>

          {/* Laboratory viewing */}
          <div className="p-4 bg-[#14110E] rounded border border-[#2B231D] flex items-start gap-3">
            <Compass className="w-4 h-4 text-[#C29B38] shrink-0 mt-1" />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#8E7044]">
                Mantecatura del Mattino
              </div>
              <p className="text-xs text-[#BDB2A4] mt-1 leading-relaxed font-sans">
                Dalle 07:30 alle 10:30 il laboratorio sul retro è visibile attraverso i vetri della corte interna durante la trasformazione del latte fresco e la tostatura delle nocciole.
              </p>
            </div>
          </div>

          {/* Palace Etiquette */}
          <div className="p-4 bg-[#14110E] rounded border border-[#2B231D] flex items-start gap-3">
            <Info className="w-4 h-4 text-[#C29B38] shrink-0 mt-1" />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#8E7044]">
                Ospitalità ai Tavoli
              </div>
              <p className="text-xs text-[#BDB2A4] mt-1 leading-relaxed font-sans">
                Non si accettano prenotazioni per i tavoli di marmo: l’accesso è libero secondo il ritmo naturale degli ospiti. Non applichiamo alcun costo di coperto o servizio al tavolo.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[#29221B] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs uppercase tracking-[0.16em] bg-[#E8E2D9] text-[#141210] font-medium rounded hover:bg-[#F6F3EC] transition-colors"
          >
            Ho compreso
          </button>
        </div>
      </div>
    </div>
  );
};
