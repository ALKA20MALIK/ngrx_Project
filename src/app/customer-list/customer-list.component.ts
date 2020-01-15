import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from './models/customer.model';
import { Observable } from 'rxjs';
import * as customerAction from "./store/customer.action";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

customersList:Observable<{customers:Customer[]}>;

  constructor(private store:Store<{customerList:{customers:Customer[]}}>) { }

  ngOnInit() {
    debugger
    this.customersList=this.store.select('customerList')
    console.log(this.customersList)
  }

  onDelete(id){
    this.store.dispatch(new customerAction.DeleteCustomer(id))
  }
}
