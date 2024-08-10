import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {delay, EMPTY, mergeMap, of, switchMap} from 'rxjs';
import {map, exhaustMap, catchError} from 'rxjs/operators';
import {DragonballService} from "../../services/dragonball.service";
import * as PlanetsActions from './planets.actions';
import {getPlanetsList, getPlanetsListSuccess} from "./planets.actions";

@Injectable()

export class PlanetsEffects {

  getPlanetList$ = createEffect(() => this.actions$.pipe(
    ofType(PlanetsActions.getPlanetsList),
    switchMap(() => this.dragonBallService.getPlanet()
      .pipe(
        delay(1000),
        map(data => {
          const planetsList = data.items.map((planets: any) => ({
            ...planets
          }));
          return PlanetsActions.getPlanetsListSuccess({ planetsList });
        }),
        catchError(error => of(PlanetsActions.getPlanetsListFailure({ error })))
      ))
  ));


  constructor(
    private actions$: Actions,
    private dragonBallService: DragonballService
  ) {
  }
}
