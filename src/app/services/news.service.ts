import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageProvider} from '../providers/storage';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private ProfileUrl = environment.ProfileUrl+"/api/news/";

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+this._storage.isUserLogined()
  });

  constructor(private http: HttpClient,private _storage:StorageProvider) {

  }

  public  getNews(formData:any){
    return this.http.post<any>(this.ProfileUrl + 'get-news', formData,{headers:this.headers});
  }

}
