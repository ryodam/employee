import { Action } from '@ngrx/store';

export const ADD_EMPLOYEE = '[Employee] ADD EMPLOYEE';

export const REMOVE_EMPLOYEE = '[Employee] REMOVE EMPLOYEE';


import { Employee } from '../models/employee.interface';

export class AddEmployee implements Action {
    readonly type = ADD_EMPLOYEE;

    constructor(public payload: Employee) { }
}

export class RemoveEmployee implements Action {
    readonly type = REMOVE_EMPLOYEE;

    constructor(public payload: number) {}
}

export type Actions = AddEmployee | RemoveEmployee;
