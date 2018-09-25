import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './modules/material/material.module';
import { CreateComponent } from './components/create/create.component';
import { JobTitleComponent } from './components/job-title/job-title.component';

import { employeeReducer } from './reducers/employee.reducer';
import { countryReducer } from './reducers/country.reducer';
import { jobtitleReducer } from './reducers/jobtitle.reducer';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    JobTitleComponent
  ],
  imports: [
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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
