import { Country } from "../models/country.interface";
import * as CountryActions from "../actions/country.actions";

export function countryReducer(state: Country[] = [], action: CountryActions.Actions) {
    switch (action.type) {
        case CountryActions.ADD_COUNTRY:
        return [...state, action.payload];
        default:
        return state;
    }
}
