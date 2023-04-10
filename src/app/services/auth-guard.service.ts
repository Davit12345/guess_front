import { Injectable } from "@angular/core";
import {Router, CanActivate, ActivatedRouteSnapshot, UrlSerializer} from '@angular/router';
import { User } from '../models/User';

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

      if(!User.checkToken()){
      this.router.navigate(["login"]);
      return false;
    }

    return true;
  }
}
