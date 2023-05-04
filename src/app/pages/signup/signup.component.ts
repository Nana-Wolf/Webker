import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });

  emailString = String(this.signUpForm.get('email')?.value);
  pwdString = String(this.signUpForm.get('password')?.value);

  constructor(private router: Router,private location: Location, private authService: AuthService) { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.signUpForm.value);
    this.signIn();
  }
  signIn(){
    this.authService.signup(this.emailString, this.pwdString).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/main');
    }).catch(error => {
      console.error(error);
    });
  }

  goBack() {
    this.location.back();
  }
}
