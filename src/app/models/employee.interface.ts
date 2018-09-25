import { Country } from './country.interface';
import { Jobtitle } from './jobtitle.interface';

export interface Employee {
    name: string;
    dob: number;
    country: Country;
    userName: string;
    hireDate: number;
    status: boolean;
    area: string;
    jobTitle: Jobtitle;
    tipRate: number;
}