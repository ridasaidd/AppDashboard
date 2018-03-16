import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { LoginDTO } from './../dto/login-dto';
import { UserService } from './../services/user.service';
import { UserDTO } from '../dto/user-dto';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private user: UserService) {}

    canActivate() {
        if (sessionStorage.getItem('isLoggedin')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

    public authenticate(user: LoginDTO): boolean {
        const theUser = this.user.getUserBy(user.username);
        if (this.isUser(theUser)) {
            if (theUser.username === user.username && theUser.password.pwd1 === user.password) {
                sessionStorage.setItem('user', JSON.stringify({username: theUser.username}));
                sessionStorage.setItem('isLoggedin', 'true');
                return true;
            }
        }
        return false;
    }
    public logout(): boolean {
        sessionStorage.removeItem('isLoggedin');
        return true;
    }
    private isUser(theUser: UserDTO | boolean): theUser is UserDTO {
        return (<UserDTO>theUser) !== undefined;
    }
}
