import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserService } from './../../shared/';
import { UserDTO } from './../../shared/dto/user-dto';

import { routerTransition } from './../../router.animations';

@Component({
    selector: 'app-blank-page',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    animations: [routerTransition()]
})
export class UsersComponent implements OnInit {

    public userDto: UserDTO;

    constructor(public user: UserService) {}

    ngOnInit() {}

    getAllUsers(): UserDTO[] {
        return this.user.getAll();
    }

    delete(username: string) {
        const c = confirm('Are you Sure!');
        if (c !== false) {
            this.user.delete(username);
        }
    }
}
