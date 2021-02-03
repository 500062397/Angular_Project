import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
        if("accessToken" in localStorage){
        return true;
        }
        else{
        this.router.navigate(['login']);
        return true;
        
        
        
        }
  }
}