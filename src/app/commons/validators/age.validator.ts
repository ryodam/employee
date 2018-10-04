import {  AbstractControl } from "@angular/forms";
import { DateHelpers } from '../helpers/date.helper';

export class AgeValidator {

    static minAgeValidator(date: AbstractControl): { [key :string]: boolean } | null {

        const age = DateHelpers.getAge(date.value);

        if ( age < 18 ) {
            return { minAge: true }
        }

        return null;
    }
}
