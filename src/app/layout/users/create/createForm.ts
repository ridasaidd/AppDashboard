import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class CreateForm implements OnInit {

    constructor(private fb: FormBuilder) {}

    ngOnInit(): {} {
        const form = this.fb.group({
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
        return form;
    }

}
