import React, { useState } from 'react';
import { SCOOP_STEPS } from '../data/santoroData';

export const ScoopJourney: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(1);
  const currentStep = SCOOP_STEPS[activeStepIndex];

  return (
    <section className="relative py-24 bg-[#14110E] border-y border-[#26201A] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Editorial Sub-header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#2D2620] pb-8">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#8E7044] uppercase block mb-3">
              MOVIMENTO 01 — IL GESTO DEL GELATIERE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#F6F3EC] tracking-wide font-normal">
              La Liturgia della Paletta
            </h2>
          </div>
          <p className="text-xs font-mono uppercase tracking-[0.16em] text-[#A69C90] max-w-xs md:text-right">
            Cinque momenti tra il laboratorio, la carapina e il palato dell’ospite.
          </p>
        </div>

        {/* 5-Step Editorial Stepper */}
        <div className="grid grid-cols-5 gap-2 md:gap-4 mb-12">
          {SCOOP_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-3 md:p-4 rounded transition-all duration-300 relative border ${
                  isActive
                    ? 'border-[#C29B38] bg-[#1F1A15] shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
                    : 'border-[#26201B] hover:border-[#40352A] bg-[#171310]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] md:text-xs font-mono ${
                      isActive ? 'text-[#C29B38]' : 'text-[#7A6E63]'
                    }`}
                  >
                    {step.step}
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isActive ? 'bg-[#C29B38]' : 'bg-transparent'
                    }`}
                  />
                </div>
                <div
                  className={`text-xs md:text-base font-serif truncate ${
                    isActive ? 'text-[#F6F3EC] font-medium' : 'text-[#8E8377]'
                  }`}
                >
                  {step.italianTitle}
                </div>
                <div className="text-[10px] font-mono text-[#6A6055] uppercase tracking-wider hidden sm:block mt-0.5">
                  {step.englishTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Feature View */}
        <div className="bg-[#181410] border border-[#2E2721] p-8 md:p-12 rounded-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Step metadata & quote */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29B38]">
                  Fase {currentStep.step} di 05
                </span>
                <span className="text-[#3D332A]">/</span>
                <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#9E9385]">
                  {currentStep.sensoryFocus}
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl font-serif text-[#F6F3EC] leading-snug">
                {currentStep.italianTitle} —{' '}
                <span className="italic font-light text-[#D4CBBF]">
                  {currentStep.englishTitle}
                </span>
              </h3>

              <p className="text-sm md:text-base text-[#BDB2A4] font-sans leading-relaxed">
                {currentStep.description}
              </p>

              {/* Artisan philosophical quote */}
              <blockquote className="pt-4 border-t border-[#2B231D] text-sm md:text-base font-serif italic text-[#C29B38]/90">
                «{currentStep.quote}»
              </blockquote>
            </div>

            {/* Visual sensory graphic diagram */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-[#130F0D] rounded border border-[#26201B]">
              <div className="w-full text-center py-6">
                <div className="inline-block relative">
                  <div className="w-24 h-24 rounded-full border border-dashed border-[#574838] flex items-center justify-center mx-auto mb-4 relative">
                    <div
                      className="w-14 h-14 rounded-full transition-all duration-700 flex items-center justify-center font-serif text-lg text-[#141210] font-semibold"
                      style={{
                        backgroundColor:
                          activeStepIndex === 0
                            ? '#3A3026'
                            : activeStepIndex === 1
                            ? '#C29B38'
                            : activeStepIndex === 2
                            ? '#8F3E29'
                            : activeStepIndex === 3
                            ? '#D2C8BC'
                            : '#F6F3EC',
                        color: activeStepIndex === 0 ? '#A69C90' : '#141210',
                      }}
                    >
                      {currentStep.step}
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#9E9385] mt-2">
                  {activeStepIndex === 0 && 'LABORATORIO → CARAPINA'}
                  {activeStepIndex === 1 && 'PALETTA → MOTO LENTO'}
                  {activeStepIndex === 2 && 'DENSITÀ → OVERRUN 24%'}
                  {activeStepIndex === 3 && 'BANCO → COPPA D’ARGENTO'}
                  {activeStepIndex === 4 && 'TAVOLO → PERSISTENZA'}
                </div>

                <div className="mt-4 flex items-center justify-center gap-2">
                  {[0, 1, 2, 3, 4].map((dot) => (
                    <button
                      key={dot}
                      onClick={() => setActiveStepIndex(dot)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dot === activeStepIndex ? 'w-6 bg-[#C29B38]' : 'w-1.5 bg-[#3D332A]'
                      }`}
                      aria-label={`Vai al gesto ${dot + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
