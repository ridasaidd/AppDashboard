import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {routerTransition } from './../../../router.animations';

import { UserService } from './../../../shared';
import { UserDTO } from './../../../shared/dto/user-dto';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  animations: [routerTransition()]
})
export class CreateComponent implements OnInit {

  public username: string;
  public userDTO: UserDTO | boolean | {} = {};
  public heading = 'Create';
  constructor(private user: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['username']) {
        this.username = params['username'];
        this.heading = 'Update ' + params['username'];
        this.userDTO = this.user.getUserBy(this.username);
        console.log(this.userDTO);
      }
    });
    console.log(this.username);
  }

  create(user) {
    const newUser: UserDTO = user.form.value;
    if (this.user.create(newUser)) {
      this.router.navigate(['/users']);
     }
  }

}
