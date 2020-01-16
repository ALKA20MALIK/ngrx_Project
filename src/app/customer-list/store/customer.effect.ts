import { Actions, ofType, Effect } from "@ngrx/effects";
import { switchMap,map } from "rxjs/Operators";
import { HttpClient } from '@angular/common/http';
import * as customerActions from "../store/customer.action";
import { Customer } from '../models/customer.model';

export class CustomerEffect {
    
    constructor(public actions$:Actions,private httpClient:HttpClient){}

    @Effect()
    getCustomer=this.actions$.pipe(
        ofType(customerActions.GET_CUSTOMER),
        switchMap((customers:customerActions.GetCustomer)=>{
            return this.httpClient.get<Customer>('http://localhost:3000/customers')
        }),
        map((responseData)=>{
            console.log(responseData)
            return {
                type:customerActions.SET_CUSTOMER,
                payload:responseData
            }
        })        

    )


    // editCustomer=this.actions$.pipe(
    //     ofType(customerActions.EDIT_CUSTOMER_START),
    //     switchMap((customerData : customerActions.EditCustomerStart)=>{
    //         return this.httpClient.post('http://localhost:3000/',customerData.payload)
    //     }
    // ))
}