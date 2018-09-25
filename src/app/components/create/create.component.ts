import { Component, OnInit } from "@angular/core";
import {
    FormGroup,
    Validators,
    FormBuilder
} from "@angular/forms";
import { MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Country } from '../../models/country.interface';

import * as EmployeeActions from '../../actions/employee.actions';
import { AppState } from '../../app.state';

import { AgeValidator } from '../../commons/validators/age.validator';
import { CharactersValidator } from '../../commons/validators/characters.validator';

@Component({
    selector: "employee-create",
    templateUrl: "./create.component.html",
    styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
    employeeForm: FormGroup;
    countries: {}[];
    rateAvailableFor: string[] = [
        'dishwasher',
        'roommanager'
    ];
    tipRateAvailable: boolean = false;
    storedCountries: Observable<Country[]>;

    constructor(private fb: FormBuilder, private store: Store<AppState>, private snackBar: MatSnackBar) {
        this.storedCountries = store.select('country');
    }

    ngOnInit() {
        this.initForm();
        this.employeeForm.get('jobTitle').valueChanges.subscribe( value => {
            this.employeeForm.get('tipRate').setValue(0);
            this.tipRateAvailable = this.rateAvailableFor.some( person => person === value);
        });
    }

    createEmployee() {
        this.store.dispatch(new EmployeeActions.AddEmployee(this.employeeForm.value));
        this.snackBar.open('Employee', 'Saved', {
            duration: 2000
        });
    }

    private initForm() {
        this.employeeForm = this.fb.group({
            name: ['', Validators.required],
            dob: ['', [Validators.required, AgeValidator.minAgeValidator]],
            country: ['', Validators.required],
            username: ['', [Validators.required, CharactersValidator.specialCharacterValidator]],
            hireDate: ['', Validators.required],
            status: [false, Validators.required],
            area: ['serviceArea'],
            jobTitle: ['', Validators.required],
            tipRate: [0]
        });
    }
}
