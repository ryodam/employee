import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanComponentDeactivate } from '../models/can-component-deactivate.interface';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { map, first } from 'rxjs/operators';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

    constructor(private dialog: MatDialog) {}

    canDeactivate(
        component: CanComponentDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {

        if (component.canDeactivate()) {
            const dialogRef = this.dialog.open(ConfirmDialogComponent, {
                data: {
                    message: 'You have unsaved changes, do you want to navigate out of this page?'
                }
            });
            return dialogRef.afterClosed().pipe(
                map( result => result),
                first()
            );
        }else {
            return true;
        }
    }
}
