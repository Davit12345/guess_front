import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageProvider} from '../providers/storage';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  private ProfileUrl = environment.ProfileUrl+"/api/leagues/";
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this._storage.isUserLogined()
  });
  options = {headers: this.headers};

  constructor(private http: HttpClient,private _storage:StorageProvider) {

  }

  public  getUserLeagues(formData:any){
    return this.http.post<any>(this.ProfileUrl + 'get-user-leagues', formData,{headers:this.headers});
  }
  public  addUserLeague(formData:any){
    return this.http.post<any>(this.ProfileUrl + 'add-user-league', formData,{headers:this.headers});
  }
  public  getGetGWS(formData:any){
    return this.http.post<any>(this.ProfileUrl + 'get-gws', formData,{headers:this.headers});
  }

  public  getGWGames(formData:any){
    return this.http.post<any>(this.ProfileUrl + 'get-gw-games', formData,{headers:this.headers});
  }
}
