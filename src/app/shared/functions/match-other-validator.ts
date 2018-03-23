import { FormControl } from '@angular/forms';

export function matchOtherValidator(otherControlName: string) {
    let thisControl: FormControl;
    let otherControl: FormControl;
    return function matchOtherValidate(control: FormControl) {
        if (!control.parent)  {
            return null;
        }
        if (control.pristine) { return null; }
        if (!thisControl) {
            thisControl = control;
            otherControl = thisControl.parent.get(otherControlName) as FormControl;
            if (!otherControl) {
                throw new Error('matchOtherValidator(): The other control was not found in the parent group');
            }
            otherControl.valueChanges.subscribe(() => {
                thisControl.updateValueAndValidity();
            });
        }
        if (!otherControl) {
            return null;
        }
        if (otherControl.value !== thisControl.value) {
            return { matchOther: true };
        }
        return null;
    };
}
