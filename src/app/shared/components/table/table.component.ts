
import {Http, Response} from '@angular/http';
import {Injectable, Component, Input} from '@angular/core';
import { ColumnComponent } from './../column/column.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'datatable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  {

  @Input() dataset: any[];
  @Input() enableFilter: Boolean  = false;
  columns: ColumnComponent[] = [];
  filteredList: any[] = [];


  constructor() { }

  public addColumn(column) {
    this.columns.push(column);
  }

  public getData() {
    if ( this.filteredList.length > 0 ) {
      return this.filteredList;

    }
    return this.dataset;

  }

 public  filterData(columnName: string ) {

   for ( const key  of  this.dataset ) {

     console.log('key: ' + key + ', value: ' + this.dataset[key]);
  }

 }

}
