export interface User {
  token: string;
  name: string;
  goldBalance: number;
}

export interface FirebaseUser {
  name: string;
  email: string;
}

export interface Abilities {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  [key: string]: number;
}

export interface Background {
  name: string;
  description: string;
  skillProficiency: Array<string>;
  otherProficiency?: Array<string>;
  languages?: Array<string>;
  toolProficiency?: Array<string>;
  feature: { name: string; description: string };
}

export interface EthicalTraits {
  integrity: number;
  fairness: number;
  charity: number;
  loyalty: number;
  obedience: number;
}

export interface Personality {
  openness: number;
  conscientiousness: number;
  extroversion: number;
  agreeableness: number;
  neuroticism: number;
}

export interface SkillsObj {
  athletics: number;
  acrobatics: number;
  sleight_of_hand: number;
  stealth: number;
  arcana: number;
  history: number;
  investigation: number;
  nature: number;
  religion: number;
  animal_handling: number;
  insight: number;
  medicine: number;
  perception: number;
  survival: number;
  deception: number;
  intimidation: number;
  persuasion: number;
}

export interface CharacterDetails {
  name?: string;
  race?: string;
  class?: string;
  worldview?: string;
  ethicalTraits: EthicalTraits;
  personality: Personality;
  quirks?: Array<string>;
  motivations: Array<string>;
  fears: Array<string>;
  likes?: Array<string>;
  dislikes?: Array<string>;
  backstory?: string;
}

export interface CharacterSheetObj {
  level: number;
  proficiencyBonus: number;
  name?: string;
  race?: string;
  class?: string;
  background?: Background;
  alignment?: string;
  abilityScores?: Abilities;
  racialStatBonus?: Abilities;
  abilityModifiers?: Abilities;
  savingThrowProficiency?: Array<string>;
  savingThrows?: Abilities;
  armorClass?: number;
  initiative?: number;
  speed?: number;
  hitDice?: number;
  hitPointMax?: number;
  passivePerception?: number;
  weaponProficiency?: Array<string>;
  armorProficiency?: Array<string>;
  skillProficiency?: Array<string>;
  skills?: SkillsObj;
  toolProficiency?: Array<string>;
  languages?: Array<string>;
  features?: Array<string>;
  personalityTraits?: Array<string>;
  ideal?: string;
  bond?: string;
  flaw?: string;
  backstory?: string;
  quote?: string;
}