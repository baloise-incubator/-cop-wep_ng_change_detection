import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-employee-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bal-field>
      <bal-field-control>
        <input
          class="input"
          placeholder="Enter name here"
          type="text"
          [(ngModel)]="label"
          (keydown)="handleKey($event)"
        />
      </bal-field-control>
    </bal-field>
  `,
})
export class EmployeeInputComponent {
  @Output() add = new EventEmitter<string>();

  label: string = '';

  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.add.emit(this.label);
      this.label = '';
    }
  }
}
