import {createReducer, on} from "@ngrx/store";
import {PlanetsState} from "./planets.state";
import {PlanetModel} from "../../models/dragonball.model";
import * as planetActions from './planets.actions';
const initialState: PlanetsState = {
  planetsList: [],
  isLoadingList: false,
  listError: '',
}

export const planetsReducer = createReducer(initialState,

  on(planetActions.getPlanetsList, (state, action) => {
    console.log(action.type)
    return <PlanetsState>{
      ...state,
      isLoadingList: true
    }
  }),

  on(planetActions.getPlanetsListSuccess, (state, action) => {
    console.log(action.type)
    return <PlanetsState>{
      ...state,
      isLoadingList: false,
      charactersList: action.planetsList
    }
  }),

  on(planetActions.getPlanetsListFailure, (state, action) => {
    console.log(action.type)
    return <PlanetsState>{
      ...state,
      isLoading: false,
      error: 'Error loading characters list'
    }
  }),

)


