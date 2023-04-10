import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor(protected  api:ApiService) { }
  async call(destination: string, params: object,callback: Function,loadingConfig:{loadingStart?:boolean, loadingEnd?: boolean}){
    try{
      // if(!loadingConfig)
      //   loadingConfig = {loadingStart: true, loadingEnd: true};


      let apiCall = await this.api.post(destination,params,loadingConfig);
      apiCall().then(res=> {
        if(res[`respcode`] == 12){
          // location.replace('/login');
          // GlobalProvider.logoutUser();
        }
        else
          callback(res);
      })
          .catch(err=>console.log(err));

    }
    catch(err){
      console.log(err);
      return null;
    }
  }


}
