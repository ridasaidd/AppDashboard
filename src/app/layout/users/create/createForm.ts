import { FormGroup, FormControl, Validators } from '@angular/forms';

export class CreateForm {

    // public genderList: Array<string>;
    // public createForm: CreateForm;

    constructor() {
        return new FormGroup({
            username: new FormControl('', Validators.required),
            email: new FormControl(),
            firstName: new FormControl(),
            lastName: new FormControl(),
            pwd1: new FormControl(),
            pwd2: new FormControl()
        });
        // return createForm;
    }

}
