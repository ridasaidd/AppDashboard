import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthGuard } from '../shared/';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginDTO } from './../shared/dto/login-dto';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    public credentials: LoginDTO;
    public loginForm: FormGroup;

    constructor (public router: Router, public auth: AuthGuard) { }

    ngOnInit() {
        this.isLoggedIn();
        this.loginForm = new FormGroup({
          username: new FormControl('', Validators.required),
          password: new FormControl()
        });
    }

    private isLoggedIn(): void {
        if ( sessionStorage.getItem('isLoggedin') ) {
            this.router.navigateByUrl('/dashboard');
    }
    }

    private doLogin(): void {
        if (this.loginForm.valid) {
         // console.log(this.loginForm.value);
          if (this.auth.authenticate(this.loginForm.value)) {
            console.log(this.loginForm.value);
            this.router.navigate(['dashboard']);
          } else {
            alert('The user ' + this.loginForm.value.username + ' does not exist!');
          }
        }
        /*this.credentials = value.form.value;
        if ( this.auth.authenticate(this.credentials) ) {
            this.router.navigateByUrl('/dashboard');
        } else {
            alert('User not found!');
        }*/
      }

    private isRegisterActive(): boolean {
        return false;
    }

}
