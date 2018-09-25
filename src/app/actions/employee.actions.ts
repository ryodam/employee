import { Action } from '@ngrx/store';

export const ADD_EMPLOYEE = 'ADD EMPLOYEE';

export const REMOVE_EMPLOYEE = 'REMOVE EMPLOYEE';


import { Employee } from '../models/employee.interface';

export class AddEmployee implements Action {
    readonly type: string = ADD_EMPLOYEE;

    constructor(public payload: Employee) { }
}

export class RemoveEmployee implements Action {
    readonly type: string = REMOVE_EMPLOYEE;

    constructor(public payload: Employee) {}
}

export type Actions = AddEmployee | RemoveEmployee;
