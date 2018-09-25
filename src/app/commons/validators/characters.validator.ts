import { AbstractControl } from '@angular/forms';

export class CharactersValidator {

    static specialCharacterValidator(control: AbstractControl): { [key: string]: boolean } | null {
        const specialCharacterRegexp = new RegExp(/\W+/);

        if(specialCharacterRegexp.test(control.value)) {
            return {
                specialCharacter: true
            };
        }

        return null;
    }
}
