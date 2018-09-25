import { Employee } from '../models/employee.interface';
import *  as EmployeeActions from '../actions/employee.actions';

export function employeeReducer(state: Employee[] = [], action: EmployeeActions.Actions) {
    switch(action.type) {
        case EmployeeActions.ADD_EMPLOYEE:
            return [...state, action.payload];
        default:
            return state;
    }
}