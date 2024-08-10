import {CharacterModel, PlanetModel,} from '../../models/dragonball.model';

// src/app/ngrx/planets/planets.state.ts
export interface PlanetsState {
  planetsList: PlanetModel[];
  isLoadingList: boolean;
  listError: string;


}
