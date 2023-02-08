import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { EmployeeData } from '../shared/list-generator.service';
import { fibonacci } from '../utils/fibonacci';

@Component({
  selector: 'app-employee-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bal-card>
      <bal-card-content>
        <bal-heading level="h2">{{ department }}</bal-heading>

        <app-employee-input (add)="add.emit($event)"></app-employee-input>

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
        </bal-list>
      </bal-card-content>
    </bal-card>
  `,
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
