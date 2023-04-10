import {Injectable} from '@angular/core';
import {StorageProvider} from '../providers/storage';

export interface UserInterface {
    id: string;
    email: string;
    fname: string;
    lname: string;
    username:string
    token: string;
}

@Injectable()
export class User {
    constructor() {}

     public static checkToken(){
        if(localStorage.getItem('TOKEN')){
            return true;
        }
        return false;
     }

    // customerById(id: string): Observable<Customer> {
    //     return this._http.get('/api/customer/' + id).map(rsp => rsp.json());
    // }
}
