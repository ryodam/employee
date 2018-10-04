import { Action } from '@ngrx/store';

export const ADD_COUNTRY = '[Country] ADD COUNTRY';

export class AddCountry implements Action {
    readonly type: string = ADD_COUNTRY;

    constructor(public payload: any) { }
}

export type Actions = AddCountry;
