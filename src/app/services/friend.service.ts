import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageProvider} from '../providers/storage';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private ProfileUrl = environment.ProfileUrl+"/api/friend/";

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this._storage.isUserLogined()
  });

  constructor(private http: HttpClient,private _storage:StorageProvider) {

  }

  public  getFriends(formData:any){
    return this.http.post<any>(this.ProfileUrl + 'get-friends', formData,{headers:this.headers});
  }

  public  searchFriend(formData:any){
    return this.http.post<any>(this.ProfileUrl + 'search-friend', formData,{headers:this.headers});
  }
  public  addRequesat(formData:any){
    return this.http.post<any>(this.ProfileUrl + 'add-request', formData,{headers:this.headers});
  }
  public  confirmRequest(formData:any){
    return this.http.post<any>(this.ProfileUrl + 'confirm-request', formData,{headers:this.headers});
  }
}
