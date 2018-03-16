import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class CreateForm implements OnInit {

    // public genderList: Array<string>;
     public createForm;

    constructor(private fb: FormBuilder) {
        this.formCreator();
        return this.createForm;
    }

    ngOnInit() {
    }
    private formCreator() {
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
            firstName: ['', [
                Validators.required,
                Validators.maxLength(12),
                Validators.minLength(2)
            ]],
            lastName: ['', [
                Validators.required,
                Validators.maxLength(12),
                Validators.minLength(2)
            ]],
            password: this.fb.group({
                pwd1: ['', [
                    Validators.minLength(4),
                    Validators.maxLength(8)
                ]],
                pwd2: ['', [
                    Validators.minLength(4),
                    Validators.maxLength(8)
                ]]
            })
        });
    }
    /* dummy() {
        this.createForm = new FormGroup({
            username: new FormControl('', [
                Validators.required,
                Validators.maxLength(16),
                Validators.minLength(4)
            ]),
            email: new FormControl('', [
                Validators.email,
                Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
            ]),
            firstName: new FormControl('', [
                Validators.required,
                Validators.maxLength(12),
                Validators.minLength(2)
            ]),
            lastName: new FormControl('', [
                Validators.required,
                Validators.maxLength(12),
                Validators.minLength(2)
            ]),
            password: new FormGroup({
                pwd1: new FormControl('', [
                    Validators.minLength(4),
                    Validators.maxLength(8)
                ]),
                pwd2: new FormControl('', [
                    Validators.required,
                    Validators.maxLength(4),
                    Validators.minLength(8)
                ])
            })
        });*/

}
