/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScoopJourney } from './components/ScoopJourney';
import { LaCasaSection } from './components/LaCasaSection';
import { IlBancoSection } from './components/IlBancoSection';
import { IlLaboratorioSection } from './components/IlLaboratorioSection';
import { GliIngredientiSection } from './components/GliIngredientiSection';
import { LaTexturaSection } from './components/LaTexturaSection';
import { LOspiteSection } from './components/LOspiteSection';
import { IlTavoloSection } from './components/IlTavoloSection';
import { RomaSection } from './components/RomaSection';
import { LaSeraSection } from './components/LaSeraSection';
import { Footer } from './components/Footer';
import { VisitModal } from './components/VisitModal';
import { TastingJournalModal } from './components/TastingJournalModal';
import { Flavour } from './types';
import { FLAVOURS } from './data/santoroData';

export default function App() {
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [isJournalModalOpen, setIsJournalModalOpen] = useState(false);
  const [selectedFlavours, setSelectedFlavours] = useState<Flavour[]>([
    FLAVOURS[0], // Pistacchio Puro di Bronte
    FLAVOURS[2], // Crema Antica Santoro 1958
  ]);

  const handleAddFlavour = (flavour: Flavour) => {
    if (selectedFlavours.length < 3 && !selectedFlavours.some((f) => f.id === flavour.id)) {
      setSelectedFlavours((prev) => [...prev, flavour]);
    }
  };

  const handleRemoveFlavour = (flavourId: string) => {
    setSelectedFlavours((prev) => prev.filter((f) => f.id !== flavourId));
  };

  const handleClearFlavours = () => {
    setSelectedFlavours([]);
  };

  const handleSelectFromBanco = (flavour: Flavour) => {
    handleAddFlavour(flavour);
    setIsJournalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#12100E] text-[#E8E2D9] font-sans selection:bg-[#78351D] selection:text-[#FBF9F5] antialiased">
      {/* Top Bar adhering to Top Bar Contract */}
      <Navbar
        onOpenVisitModal={() => setIsVisitModalOpen(true)}
        onOpenJournalModal={() => setIsJournalModalOpen(true)}
      />

      <main>
        {/* 07: Hero — Il Gelato */}
        <HeroSection />

        {/* 22: Signature Interaction — The Scoop Journey */}
        <ScoopJourney />

        {/* 13: La Casa (Roman palazzo entrance & materials) */}
        <LaCasaSection />

        {/* 14: Il Banco (Crema marble counter & slow flavour discovery) */}
        <IlBancoSection onSelectFlavour={handleSelectFromBanco} />

        {/* 15: Il Laboratorio (Documentary craftsmanship, hands & process) */}
        <IlLaboratorioSection />

        {/* 16: Gli Ingredienti (Still-life monograph) */}
        <GliIngredientiSection />

        {/* 17: La Textura (Macro tactile cold/soft/dense) */}
        <LaTexturaSection />

        {/* 18: L'Ospite (Hospitality & the silver spoon ritual) */}
        <LOspiteSection />

        {/* 19: Il Tavolo (Intimate Roman table occasion) */}
        <IlTavoloSection />

        {/* 20: Roma (Shadows, cobblestones, non-tourist atmosphere) */}
        <RomaSection />

        {/* 21: La Sera (Dusk facade & quiet Roman closing) */}
        <LaSeraSection onOpenVisitModal={() => setIsVisitModalOpen(true)} />
      </main>

      {/* Footer Colophon */}
      <Footer
        onOpenVisitModal={() => setIsVisitModalOpen(true)}
        onOpenJournalModal={() => setIsJournalModalOpen(true)}
      />

      {/* Interactive Modals */}
      <VisitModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
      />

      <TastingJournalModal
        isOpen={isJournalModalOpen}
        onClose={() => setIsJournalModalOpen(false)}
        selectedFlavours={selectedFlavours}
        onAddFlavour={handleAddFlavour}
        onRemoveFlavour={handleRemoveFlavour}
        onClear={handleClearFlavours}
      />
    </div>
  );
}
