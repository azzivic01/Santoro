import React from 'react';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[720px] flex items-center justify-center overflow-hidden bg-[#12100E]">
      {/* Background Image: Grand Roman Palazzo Gelateria Interior */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/src/assets/images/santoro_hero_palazzo_1791339816623.jpg"
          alt="Interno monumentale del palazzo Santoro a Roma, con archi in travertino, banco in marmo crema e luce naturale mattutina"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
        />
        {/* Subtle, delicate measured optical vignette - never hiding the image */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_center,_rgba(18,16,14,0.18)_0%,_rgba(18,16,14,0.55)_80%,_rgba(18,16,14,0.85)_100%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#12100E]/40 via-transparent to-[#12100E]/85 pointer-events-none" />
      </div>

      {/* Typography suspended naturally within the architectural vanishing point / negative space */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center pt-8">
        {/* Editorial Roman Badge / Origin */}
        <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] font-mono uppercase text-[#E8DFD3]/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-6">
          <span>GELATERIA ROMANA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C29B38]" />
          <span>DAL 1958</span>
        </div>

        {/* Wordmark */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-serif tracking-[0.14em] uppercase text-[#FBF9F5] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] leading-none select-none">
          SANTORO
        </h1>

        {/* Core Philosophy Phrase */}
        <div className="mt-6 flex flex-col items-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#E8E2D9] tracking-wider drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Il gelato, <span className="font-normal not-italic tracking-[0.2em] uppercase text-[#C29B38] text-lg sm:text-xl lg:text-2xl ml-1">fatto lento.</span>
          </p>
        </div>

        {/* Architectural Context Marker */}
        <p className="mt-8 text-xs tracking-[0.22em] font-mono uppercase text-[#D2C8BC]/80 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] max-w-md">
          Via dei Coronari, 44 · Rione Ponte · Roma
        </p>
      </div>

      {/* Editorial Scroll Invitation at base */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center justify-center text-[#E8E2D9]/70 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.28em] font-mono mb-2">Entra nella casa</span>
        <div className="animate-bounce duration-1000">
          <ArrowDown className="w-3.5 h-3.5 text-[#C29B38]" />
        </div>
      </div>
    </section>
  );
};
