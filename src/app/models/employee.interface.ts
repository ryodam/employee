import { Country } from './country.interface';
import { Jobtitle } from './jobtitle.interface';

export interface Employee {
    name: string;
    dob: string;
    country: Country;
    userName: string;
    hireDate: string;
    status: boolean;
    area: string;
    jobTitle: Jobtitle;
    tipRate: number;
}