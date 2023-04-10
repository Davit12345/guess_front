import { Injectable } from '@angular/core';
import {CallService} from './call.service';
import {ApiService} from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageProvider } from '../providers/storage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private ProfileUrl = environment.ProfileUrl+"/api/games/";

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this._storage.isUserLogined()
  });

  constructor(private http: HttpClient,private _storage:StorageProvider) {

  }

  public  getGames(formData:any){
    return this.http.post<any>(this.ProfileUrl + 'get-games', formData,{headers:this.headers});
  }

  public  updateChoosen(formData:any){
    return this.http.post<any>(this.ProfileUrl + 'update-choosen', formData,{headers:this.headers});
  }
}
