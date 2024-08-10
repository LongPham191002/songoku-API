import{createAction, props} from "@ngrx/store";
import {PlanetModel} from '../../models/dragonball.model';

export const getPlanetsList = createAction('[Planets] Get Planets List');
export const getPlanetsListSuccess = createAction('[Planets] Get Planets List Success', props<{ planetsList: PlanetModel[] }>());
export const getPlanetsListFailure = createAction('[Planets] Get Planets List Failure', props<{ error: any }>());
