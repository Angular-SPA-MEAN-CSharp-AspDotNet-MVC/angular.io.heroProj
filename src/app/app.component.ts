import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Hero';

    columnDefs = [
        {headerName: 'Make', field: 'make', sortable: true, filter: true},
        {headerName: 'Model', field: 'model', sortable: true, filter: true},
        {headerName: 'Price', field: 'price', sortable: true, filter: true}
    ];
   rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Audi', model: 'A6', price: 72000 }
    ];
}
