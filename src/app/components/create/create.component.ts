import { Component, OnInit } from "@angular/core";
import {
    FormGroup,
    Validators,
    FormBuilder
} from "@angular/forms";
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Country } from '../../models/country.interface';

import * as EmployeeActions from '../../actions/employee.actions';
import { AppState } from '../../app.state';

import { AgeValidator } from '../../commons/validators/age.validator';
import { CharactersValidator } from '../../commons/validators/characters.validator';

import { DateHelpers } from '../../commons/helpers/date.helper';

@Component({
    selector: "employee-create",
    templateUrl: "./create.component.html",
    styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
    employeeForm: FormGroup;
    rateAvailableFor: string[] = [
        'dishwasher',
        'roommanager'
    ];
    tipRateAvailable: boolean = false;
    storedCountries: Observable<Country>;

    constructor(
        private fb: FormBuilder,
        private store: Store<AppState>,
        private snackBar: MatSnackBar,
        private router: Router,
        private location: Location) {
        this.storedCountries = store.select('country').pipe(
            map( countries => countries[0])
        );
    }

    ngOnInit() {
        this.initForm();
        this.employeeForm.get('jobTitle').valueChanges.subscribe( jobTitle => {
            this.employeeForm.get('tipRate').setValue(0);
            this.tipRateAvailable = this.rateAvailableFor.some( person => person === jobTitle.value);
        });
        this.employeeForm.get('dob').valueChanges.subscribe( value => {
            this.employeeForm.get('age').setValue(DateHelpers.getAge(value));
        });
    }

    createEmployee() {
        this.store.dispatch(new EmployeeActions.AddEmployee(this.employeeForm.value));
        this.snackBar.open('Employee', 'Saved', {
            duration: 1000
        })
        .afterDismissed().subscribe( () => {
            this.router.navigate(['list']);
        });
    }

    goBack() {
        this.location.back();
    }

    canDeactivate(): boolean {
        return this.employeeForm.dirty;
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
            tipRate: [0],
            age: 0
        });
    }
}
