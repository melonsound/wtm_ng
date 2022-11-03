import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenPrefix = 'jwt_wtm_v0';

  constructor(private router: Router) { }

  public checkAuth(){
    let tokenResult = localStorage.getItem(this.tokenPrefix);
    if(tokenResult == null){
      return false;
    }
    return true;
  }

  public getJwt(){
    return localStorage.getItem(this.tokenPrefix);
  }

  public setJwt(token: string){
    localStorage.setItem(this.tokenPrefix, token);
  }

  public logOut(){
    localStorage.removeItem(this.tokenPrefix);
    this.router.navigate(['/login']);
  }

}
