import { Component, OnInit,ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from '../models/customer.model';
import * as customerAction from "../store/customer.action";
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute,Params} from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  //styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;

  id:number=0;
  editMode=false;
  customerForm: FormGroup;
  Customers: Customer
  constructor(private router:Router,private route: ActivatedRoute, 
    private store:Store<{customerList:{customers:Customer}}>) { }

  ngOnInit() {
    
    this.route.params
      .subscribe(
        (params: Params) => {
          debugger
          this.id = +params['id'];
          this.editMode = params['id'] != 0;
        }
      );
      if (this.editMode) {
        this.store.select('customerList')
          .subscribe((customerList)=>{
            this.Customers = customerList.customers[this.id-1];
          });
      }
      else{
        this.Customers=new Customer(null,null,null)
      }
  }

  onSubmit(form:NgForm){

    const value=form.value
    const customerList=this.store.select('customerList')

    console.log(customerList)
    //const newIndex =customerList.
    const newCustomer=new Customer(this.id,value.Name,value.Contact)

    if(this.editMode){
      this.store.dispatch(new customerAction.EditCustomer({
        index:this.id,
        updatedCustomer:newCustomer
      }));

      //this.store.dispatch(new customerAction.EditCustomer(this.id,newCustomer))
    }
    else
    {
      this.store.dispatch(new customerAction.AddCustomer(newCustomer))
    }
    this.router.navigate(['']);
  }

}
