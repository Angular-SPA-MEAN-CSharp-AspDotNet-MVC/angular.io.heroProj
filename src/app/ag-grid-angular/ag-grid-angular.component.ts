import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-grid-angular',
  templateUrl: './ag-grid-angular.component.html',
  styleUrls: ['./ag-grid-angular.component.css']
})
export class AgGridAngularComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /* tried to hard-coded data here
  columnDefs = [
        {headerName: 'Make', field: 'make', filter: true },
        {headerName: 'Model', field: 'model', filter: true },
        {headerName: 'Price', field: 'price', filter: true }
    ];

   rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Audi', model: 'A6', price: 72000 }
    ];
  */

}
