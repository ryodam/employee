import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as CountryActions from '../../actions/country.actions';

@Injectable()
export class CountryService {

    constructor(private http: HttpClient, private store: Store<AppState>) {}

    getContries() {
        return this.http.get('https://restcountries.eu/rest/v2/all')
        .toPromise()
        .then( (countries: any) => {
            this.store.dispatch(new CountryActions.AddCountry(countries));
        });
    }
}