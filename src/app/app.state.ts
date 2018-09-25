import { Employee } from './models/employee.interface';
import { Country } from './models/country.interface';
import { Jobtitle } from './models/jobtitle.interface';

export interface AppState {
    readonly employee: Employee[];
    readonly country: Country[];
    readonly jobtitle: Jobtitle[];
}