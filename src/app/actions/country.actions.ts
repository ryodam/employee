import { Action } from '@ngrx/store';

export const ADD_COUNTRY = 'ADD COUNTRY';


import { Country } from '../models/country.interface';

export class AddCountry implements Action {
    readonly type: string = ADD_COUNTRY;

    constructor(public payload: Country) { }
}

export type Actions = AddCountry;
