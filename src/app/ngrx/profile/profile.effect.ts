import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProfileService} from "../../services/profile.service";
import * as ProfileActions from "./profile.action";
import {of, switchMap} from "rxjs";
import {catchError, map} from "rxjs/operators";
@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService)
  {

  }

  getAllProfiles$ = createEffect(() =>  this.actions$.pipe(
    ofType(ProfileActions.getAllProfiles),
    switchMap(() => {
      return this.profileService.getAllProfiles()
        .pipe(
          map((profiles) =>
            ProfileActions.getAllProfilesSuccess ({profiles})),
    catchError((error) =>
    {
      return of(ProfileActions.getAllProfilesFailure({error: error}));
    })
        )
    })
  ))


}
