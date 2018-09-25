import {  AbstractControl } from "@angular/forms";

export class AgeValidator {

    static minAgeValidator(date: AbstractControl): { [key :string]: boolean } | null {

        const today = new Date();
        const todayYear = today.getFullYear();
        const todayMonth = today.getMonth();
        const todayDay = today.getDate();

        const dob = new Date(date.value);
        const dobYear = dob.getFullYear();
        const dobMonth = dob.getMonth();
        const dobDay = dob.getDate();

        let age = todayYear - dobYear;
        const ageMonth = todayMonth - dobMonth;
        const ageDay = todayDay - dobDay;

        if (ageMonth < 0 || (ageMonth == 0 && ageDay < 0)) {
            age = age - 1;
        }

        if ( age < 18 ) {
            return { minAge: true }
        }

        return null;
    }
}
