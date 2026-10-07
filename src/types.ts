export interface Flavour {
  id: string;
  name: string;
  subtitle: string;
  origin: string;
  category: 'creme' | 'frutta' | 'storici';
  description: string;
  tastingNotes: string[];
  texture: string;
  temperature: string;
  yearIntroduced?: number;
}

export interface Ingredient {
  id: string;
  name: string;
  italianName: string;
  origin: string;
  region: string;
  harvest: string;
  curatorNote: string;
  sensoryNotes: string[];
}

export interface ScoopStep {
  step: string;
  italianTitle: string;
  englishTitle: string;
  description: string;
  sensoryFocus: string;
  quote: string;
}

export interface ArchitecturalMaterial {
  name: string;
  romanSource: string;
  tactileDescription: string;
  roleInPalazzo: string;
}
