import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private loadingService: FakeLoadingService) { }

  
  login() {
    if (this.email.value === 'test@gmail.com' && this.password.value === 'testpw') {
      this.router.navigateByUrl('/main');
    } else {
      console.error('Incorrect email or password!');
    }
  }

}
