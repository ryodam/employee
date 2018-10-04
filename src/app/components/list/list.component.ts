import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    AfterViewInit
} from "@angular/core";
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Store, ActionsSubject } from '@ngrx/store';

import { Employee } from "../../models/employee.interface";
import { AppState } from "../../app.state";
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import * as EmployeeActions from '../../actions/employee.actions';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
    selector: "employee-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(MatSort) sort: MatSort;

    dataSource: MatTableDataSource<Employee>;
    employeesSubscriber: Subscription;
    dispatcherSubscriber: Subscription;

    employees: Employee[];
    displayedColumns = ['name', 'age', 'username', 'hireDate', 'actions'];

    constructor(private store: Store<AppState>, private dialog: MatDialog, private dispatcher: ActionsSubject) {}

    ngOnInit() {
        this.getEmployee();

        this.dispatcherSubscriber = this.dispatcher.pipe(
            filter( action => {
                return action.type === '[Employee] REMOVE EMPLOYEE';
            })
        )
        .subscribe( action => {
            this.getEmployee();
        });
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }

    ngOnDestroy() {
        this.employeesSubscriber.unsubscribe();
        this.dispatcherSubscriber.unsubscribe();
    }

    employeeFilter(employee: string) {
        this.dataSource.filter = employee.trim().toLocaleLowerCase();
    }

    onDeleteEmployee(index: number) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data: {
                message: '¿Are you sure want to delete this employe?'
            }
        });
        dialogRef.afterClosed().subscribe( confirmation => {
            if (confirmation) {
                this.store.dispatch(new EmployeeActions.RemoveEmployee(index));
            }
        });
    }

    private getEmployee() {
        this.employeesSubscriber = this.store.select('employee')
        .subscribe( employees => {
            this.employees = employees;
            this.dataSource = new MatTableDataSource(this.employees);
        });
    }
}
