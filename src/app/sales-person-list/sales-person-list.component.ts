import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("John", "Doe", "dsf@gmail.com", 1000),
    new SalesPerson("John2", "Ja", "ja@gmail.com", 3000),
    new SalesPerson("John3", "Ra", "drafd@gmail.com", 5000),
    new SalesPerson("John", "Sam", "dasdsad@gmail.com", 200),
    new SalesPerson("John", "Doe", "dsf@gmail.com", 4000),
    new SalesPerson("John2", "Doe2", "dsf@gmail.com", 42000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
