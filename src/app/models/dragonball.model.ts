export interface CharacterModel {
  id: number;
  name: string;
  ki: number;
  maxki: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAT: null;
}

export interface PlanetModel{
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  deletedAT: null;
}
