import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Injectable()
export class EmployeeFormService {
    employeeForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    createEmployeeForm() {
        return this.employeeForm = this.fb.group({
            name: [''],
            dob: [''],
            country: [''],
            userName: [''],
            hireDate: [''],
            status: [''],
            area: [''],
            jobTitle: [''],
            tipRate: ['']
        });
    }
}