import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {CallService} from './call.service';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageProvider} from '../providers/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CallService{

  private ProfileUrl = environment.ProfileUrl+"/api/users/";

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this._storage.isUserLogined()
  });


  constructor(protected api:ApiService,private http: HttpClient,private _storage:StorageProvider) {
       super(api)
  }


  public  getUserData(formData:any){
    return this.http.post<any>(this.ProfileUrl + 'get-user-data', formData,{headers:this.headers});
  }



  async login(data: object,callback: Function,loadingConfig){
    await super.call("users/login",data,callback,loadingConfig);
  }
  async register(data: object,callback: Function,loadingConfig){
    await super.call("users/register",data,callback,loadingConfig);
  }

}
