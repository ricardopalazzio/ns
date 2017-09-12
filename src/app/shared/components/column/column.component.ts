import { Component, Input } from '@angular/core';

import { TableComponent } from './../table/table.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input() value;
  @Input() header;
  public query: string;

  constructor(table: TableComponent) {
    table.addColumn(this);
  }
}
