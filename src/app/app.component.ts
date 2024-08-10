import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CharactersState} from "./ngrx/characters/characters.state";
import {Store} from "@ngrx/store";
import {CharacterModel} from "./models/dragonball.model";
import * as CharacterActions from "./ngrx/characters/characters.actions";
import {AsyncPipe} from "@angular/common";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {PlanetModel} from "./models/dragonball.model";
import {PlanetsState} from "./ngrx/planets/planets.state";
import * as planetActions from './ngrx/planets/planets.actions';
import {of} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatProgressSpinnerModule, AsyncPipe, MatButtonModule, MatCardModule],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'songokuAPI';

  isLoadingList$ = this.store.select('characters', 'isLoadingList');
  charactersList$ = this.store.select('characters', 'charactersList');

  isLoadingDetailList$ = this.store.select('planets', 'isLoadingList');
  planetsList$ = this.store.select('planets', 'planetsList');

  constructor(private store: Store<{ characters: CharactersState, planets: PlanetsState }>)
  {
    this.store.dispatch(CharacterActions.getCharactersList());
    this.store.dispatch(planetActions.getPlanetsList());
  }

  protected readonly of = of;
}
