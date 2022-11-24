import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  BalButtonModule,
  BalCardModule,
  BalCoreModule,
  BalHeadingModule,
  BalNavbarModule,
} from '@baloise/design-system-components-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListModule } from './employee-list/employee-list.module';
import { ListGenerator } from './shared/list-generator.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BalCoreModule.forRoot(),
    BalNavbarModule,
    BalCardModule,
    BalButtonModule,
    BalHeadingModule,
    EmployeeListModule,
  ],
  providers: [ListGenerator],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
