import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {provideHttpClient} from "@angular/common/http";
import {CharactersEffects} from "./ngrx/characters/characters.effects";
import {charactersReducer} from "./ngrx/characters/characters.reducer";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CharacterModel } from './models/dragonball.model';
import {planetsReducer} from "./ngrx/planets/planets.reducer";
import {PlanetsEffects} from "./ngrx/planets/planets.effects";
import {profileReducer} from "./ngrx/profile/profile.reducer";
import {ProfileEffects} from "./ngrx/profile/profile.effect";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideAnimationsAsync(),
    provideStore({
    'characters':charactersReducer,
    'planets':planetsReducer,
      "profile": profileReducer,
  }),

    provideEffects(CharactersEffects,PlanetsEffects,ProfileEffects),
    provideHttpClient()]

};
