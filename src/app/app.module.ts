import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

import { CreateComponent } from './components/create/create.component';
import { JobTitleComponent } from './components/job-title/job-title.component';
import { ListComponent } from './components/list/list.component';

import { employeeReducer } from './reducers/employee.reducer';
import { countryReducer } from './reducers/country.reducer';
import { jobtitleReducer } from './reducers/jobtitle.reducer';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

import { CountryService } from './commons/services/country.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    JobTitleComponent,
    ListComponent,
    ConfirmDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      employee: employeeReducer,
      country: countryReducer,
      jobtitle: jobtitleReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent],
  providers:[
    CountryService,
    {
      provide: APP_INITIALIZER,
      useFactory: (countryService: CountryService) => {
        return () => countryService.getContries();
      },
      deps: [CountryService],
      multi: true
    }
  ]
})
export class AppModule { }
