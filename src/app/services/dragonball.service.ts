import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  constructor(private httpClient: HttpClient) { }

  getCharacters() {
    return this.httpClient.get<any>('https://dragonball-api.com/api/characters?page=1&limit=100');

  }

  getPlanet() {
    return this.httpClient.get<any>('https://dragonball-api.com/api/planets');
  }

}
