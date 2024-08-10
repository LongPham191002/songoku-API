import { CharactersState} from "./characters.state";
import {createReducer, on} from "@ngrx/store";
import * as CharactersActions from "./characters.actions";
import {getCharactersList} from "./characters.actions";

const initialState: CharactersState = {
  charactersList: [],
  isLoadingList: false,
  listError: '',
  characterDetailList: [],
  isLoadingDetailList: false,
  detailListError: ''
}

export const charactersReducer = createReducer(initialState,

  on(CharactersActions.getCharactersList, (state, action) => {
    console.log(action.type)
    return <CharactersState>{
      ...state,
      isLoadingList: true
    }
  }),

  on(CharactersActions.getCharactersListSuccess, (state, action) => {
    console.log(action.type)
    return <CharactersState>{
      ...state,
      isLoadingList: false,
      charactersList: action.charactersList
    }
  }),

  on(CharactersActions.getCharactersListFailure, (state, action) => {
    console.log(action.type)
    return <CharactersState>{
      ...state,
      isLoading: false,
      error: 'Error loading characters list'
    }
  }),

  )


