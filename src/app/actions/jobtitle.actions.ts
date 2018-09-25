import { Action } from '@ngrx/store';

export const ADD_JOBTITLE = 'ADD JOBTITLE';


import { Jobtitle } from '../models/jobtitle.interface';

export class AddEmployee implements Action {
    readonly type: string = ADD_JOBTITLE;

    constructor(public payload: Jobtitle) { }
}

export type Actions = AddEmployee;
