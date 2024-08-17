import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../models/profile.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

 baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllProfiles(){return this.http.get<Profile[]>(`${this.baseUrl}/profile/all`)}

}
