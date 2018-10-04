import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from '../../components/create/create.component';
import { ListComponent } from '../../components/list/list.component';

import { CanDeactivateGuard } from '../../guards/can-deactivate-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'employee',
        component: CreateComponent,
        canDeactivate: [CanDeactivateGuard]
    },
    {
        path: '**',
        redirectTo: '/list',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    providers: [ CanDeactivateGuard ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
