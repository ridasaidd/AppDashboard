import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthGuard } from '../shared/';

import { NgForm } from '@angular/forms';

import { LoginDTO } from './../shared/dto/login-dto';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    public credentials: LoginDTO;

    constructor (public router: Router, public auth: AuthGuard) { }

    ngOnInit() {
        this.isLoggedIn();
    }

    private isLoggedIn(): void {
        if ( sessionStorage.getItem('isLoggedin') ) {
            this.router.navigateByUrl('/dashboard');
    }
    }

    private doLogin(value): void {
        this.credentials = value.form.value;
        if ( this.auth.authenticate(this.credentials) ) {
            this.router.navigateByUrl('/dashboard');
        } else {
            alert('User not found!');
        }
        }

    private isRegisterActive(): boolean {
        return false;
    }

}
