import { Injectable } from '@angular/core';
import { SignInData } from 'src/app/models/signInData';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private readonly mockedUser:  SignInData = new SignInData('admin@gmail.com','Equity#Assignment2');
isAuthenticated = false;
  constructor(private router: Router) { }
  authenticate(signInData: SignInData): boolean{
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      // this.router.navigate(['login/employee']);
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean {
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword());
  }
  private checkEmail(email:string): boolean{
    return email == this.mockedUser.getEmail();
  }
  private checkPassword(password: string): boolean {
    return password === this.mockedUser.getPassword();
  }
  
}
