import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListComponent } from './employee-list.component';
import {
  BalCardModule,
  BalFieldModule,
  BalHeadingModule,
  BalIconModule,
  BalInputModule,
  BalListModule,
} from '@baloise/design-system-components-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    BalFieldModule,
    BalCardModule,
    BalHeadingModule,
    BalInputModule,
    BalListModule,
    BalIconModule,
  ],
  declarations: [EmployeeListComponent],
  exports: [EmployeeListComponent],
})
export class EmployeeListModule {}
