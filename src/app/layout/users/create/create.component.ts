import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {routerTransition } from './../../../router.animations';

import { UserService } from './../../../shared';
import { UserDTO } from './../../../shared/dto/user-dto';

import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { matchOtherValidator } from '../../../shared/functions/match-other-validator';
// import { CreateForm } from './createForm';

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

   public createForm: FormGroup;

  constructor(private user: UserService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.maxLength(16),
        Validators.minLength(4)
      ]],
      email: ['', [
        Validators.email,
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      name: this.fb.group({
        first: ['', [
          Validators.required
        ]],
        last: ['', [
          Validators.required
        ]]
      }),
      password: this.fb.group({
        pwd1: ['', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(8)
        ]],
        pwd2: ['', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(8),
          matchOtherValidator('pwd1')
        ]]
      })
    });
    this.createForm = new FormGroup(this.createForm.controls, {updateOn: 'blur'});
  }

  create() {
    console.log(this.createForm);
  }

  private edit() {
    this.route.params.subscribe((params) => {
      if (params['username']) {
        this.username = params['username'];
        this.heading = 'Update ' + params['username'];
        this.userDTO = this.user.getUserBy(this.username);
      }
    });
  }
  private passwordMatch(ac: AbstractControl): void {
    console.log('fired');
    const pwd1 = ac.get('pwd1').value, pwd2 = ac.get('pwd2').value;
    return pwd1 === pwd2 ? ac.get('pwd2').setErrors({passwordMisMatch: false}) : ac.get('pwd2').setErrors({passwordMisMatch: true});
  }

  get pwd1() {
    return this.createForm.get('password').get('pwd1');
  }
  get pwd2() {
    return this.createForm.get('password').get('pwd2');
  }
}
