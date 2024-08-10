import{createAction, props} from "@ngrx/store";
import {CharacterModel} from '../../models/dragonball.model';

export const getCharactersList = createAction('[Characters] Get Characters List');
export const getCharactersListSuccess = createAction('[Characters] Get Characters List Success', props<{ charactersList: CharacterModel[] }>());
export const getCharactersListFailure = createAction('[Characters] Get Characters List Failure', props<{ error: any }>());

export const getCharacter = createAction('[Characters] Get Character', props<{ name: string }>());
export const getCharacterSuccess = createAction('[Characters] Get Character Success', props<{ character: CharacterModel }>());
export const getCharacterFailure = createAction('[Characters] Get Character Failure', props<{ error: any }>());
