import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EmployeeData } from '../shared/list-generator.service';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Component({
  selector: 'app-employee-list',
  template: `
    <bal-card>
      <bal-card-content>
        <bal-heading level="h2">{{ department }}</bal-heading>

        <bal-field>
          <bal-field-control>
            <bal-input
              placeholder="Enter name here"
              matInput
              type="text"
              [(ngModel)]="label"
              (keydown)="handleKey($event)"
            ></bal-input>
          </bal-field-control>
        </bal-field>

        <bal-list border>
          <div *ngIf="data?.length === 0" class="empty-list-label">
            Empty list
          </div>
          <bal-list-item *ngFor="let item of data">
            <bal-list-item-content>
              <bal-list-item-title>{{ item.label }}</bal-list-item-title>
              <bal-list-item-subtitle>{{
                calculate(item.num)
              }}</bal-list-item-subtitle>
            </bal-list-item-content>
            <bal-list-item-icon right>
              <bal-icon
                name="trash"
                size="xsmall"
                (click)="remove.emit(item)"
              ></bal-icon>
            </bal-list-item-icon>
          </bal-list-item>
          <!-- <mat-divider *ngIf="data?.length !== 0"></mat-divider> -->
        </bal-list>
      </bal-card-content>
    </bal-card>
  `,
  // styleUrls: ['employee-list.component.css']
})
export class EmployeeListComponent {
  @Input() data: EmployeeData[] | null = null;
  @Input() department: string = '';

  @Output() remove = new EventEmitter<EmployeeData>();
  @Output() add = new EventEmitter<string>();

  label: string = '';

  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.add.emit(this.label);
      this.label = '';
    }
  }

  calculate(num: number) {
    return fibonacci(num);
  }
}
