import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { Country } from '../../models/country.interface';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    constructor(private http: HttpClient) { }

    getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>('../../mocks/countries.json')
        .pipe(
            catchError(this.handleError)
        )
    }

    private handleError(error: HttpErrorResponse ) {
        if (error.error instanceof ErrorEvent) {
            // Connection error occurred, handle this in the right way.
        }else {
            // Backend returned and unsuccessful response code.
            // Get the status code here and also the body.
            console.log(
                `Backend status code: ${error.status}` + 
                `Response body: ${error.error}`
            );
        }
        return throwError(`There was an error, please try again`);
    }
}
