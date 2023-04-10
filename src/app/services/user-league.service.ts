import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageProvider} from '../providers/storage';

@Injectable({
  providedIn: 'root'
})
export class UserLeagueService {


  private ProfileUrl = environment.ProfileUrl + "/api/user-league/";

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this._storage.isUserLogined()
  });


  constructor(private http: HttpClient, private _storage: StorageProvider) {

  }

  public getPlayers(formData: any) {
    return this.http.post<any>(this.ProfileUrl + 'get-league-players', formData, {headers: this.headers});
  }
}