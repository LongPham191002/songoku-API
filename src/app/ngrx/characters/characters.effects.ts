import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {delay, EMPTY, mergeMap, of, switchMap} from 'rxjs';
import {map, exhaustMap, catchError} from 'rxjs/operators';
import * as CharacterActions from './characters.actions';
import {DragonballService} from "../../services/dragonball.service";
import {getCharactersList, getCharactersListSuccess} from "./characters.actions";

@Injectable()
export class CharactersEffects {

  getCharactersList$ = createEffect(() => this.actions$.pipe(
    ofType(CharacterActions.getCharactersList),
    switchMap(() => this.dragonBallService.getCharacters()
      .pipe(
        delay(1000),
        map(data => {
          const charactersList = data.items.map((character: any) => ({
            ...character
          }));
          return CharacterActions.getCharactersListSuccess({ charactersList });
        }),
        catchError(error => of(CharacterActions.getCharactersListFailure({ error })))
      ))
  ));



  constructor(
    private actions$: Actions,
    private dragonBallService: DragonballService
  ) {
  }
}
