import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/models/signInData';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from '../../validation/customvalidation.service';

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm;
  loginForm: FormGroup;
  submitted = false;


  constructor(private authenticationService: AuthenticationService, private router:Router,
    private fb: FormBuilder,private customValidator: CustomvalidationService) {
      this.initialize_form();
    if("accessToken" in localStorage){
      this.router.navigate(['employee']);
      }
      else{
      // this.router.navigate(['login']);
    
      
      
      
      }

   }

  ngOnInit() {
  }


  initialize_form(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])]
  });
  }

  onSubmit(signInForm: NgForm) {
    console.log(signInForm.value);
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    console.log(this.authenticationService.authenticate(signInData),'asdsa')
    if(this.authenticationService.authenticate(signInData)){
      localStorage.setItem('accessToken','abc');
      this.router.navigateByUrl('/employee')
    }
    else{
      //to be handle
    }
  }



  get f() { return this.loginForm.controls; }




  onSubmitLogin(data){
    console.log(data)
    this.submitted = true;


    if (this.loginForm.invalid) {
      return;
  }
  else{

    
  
    const signInData = new SignInData( data.email, data.password);
    console.log(this.authenticationService.authenticate(signInData),'asdsa')
    if(this.authenticationService.authenticate(signInData)){
      localStorage.setItem('accessToken','abc');
      this.router.navigateByUrl('/employee')

    }
    else{
      //to be handle
    }
  }
  }
}
