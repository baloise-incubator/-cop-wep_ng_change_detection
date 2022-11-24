import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js-dist-min';
import { Rnd } from './data/rnd-70-27-30';
import { Sales } from './data/sales-70-27-30';
import { EmployeeData, ListGenerator } from './shared/list-generator.service';

const NumRange: [number, number] = [23, 28];

@Component({
  selector: 'app-root',
  template: `
    <bal-app>
      <header>
        <bal-navbar interface="app">
          <bal-navbar-brand href="/" target="_blank"
            >Performance Workshop</bal-navbar-brand
          >
        </bal-navbar>
      </header>
      <main class="container mt-x-large">
        <section class="overview">
          <bal-card>
            <bal-card-content>
              <bal-heading>Overview</bal-heading>
              <div id="chart"></div>
            </bal-card-content>
          </bal-card>
        </section>
        <section class="columns mt-large">
          <app-employee-list
            class="column"
            [data]="salesList"
            department="Sales"
            (add)="add(salesList, $event)"
            (remove)="remove(salesList, $event)"
          ></app-employee-list>

          <app-employee-list
            class="column"
            [data]="rndList"
            department="R&D"
            (add)="add(rndList, $event)"
            (remove)="remove(rndList, $event)"
          ></app-employee-list>
        </section>
      </main>
    </bal-app>
  `,
})
export class AppComponent implements OnInit {
  salesList: EmployeeData[] = Sales;
  rndList: EmployeeData[] = Rnd;
  label = '';

  constructor(private generator: ListGenerator) {}

  ngOnInit() {
    const data: [{ x: string[]; y: number[]; type: 'bar' }] = [
      {
        x: [],
        y: [],
        type: 'bar',
      },
    ];

    const values = new Map<number, number>();
    this.salesList.concat(this.rndList).forEach((employee) => {
      if (values.has(employee.num)) {
        values.set(employee.num, values.get(employee.num)! + 1);
      } else {
        values.set(employee.num, 1);
      }
    });

    for (const entity of values.entries()) {
      data[0].x.push(entity[0].toString());
      data[0].y.push(entity[1]);
    }

    Plotly.newPlot('chart', data);
  }

  add(list: EmployeeData[], name: string) {
    return list.unshift({
      label: name,
      num: this.generator.generateNumber(NumRange),
    });
  }

  remove(list: EmployeeData[], node: EmployeeData) {
    return list.splice(list.indexOf(node), 1);
  }
}
