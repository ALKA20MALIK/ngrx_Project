import { Actions, ofType, Effect } from "@ngrx/effects";
import { Injectable } from '@angular/core';

import { switchMap, map, catchError, tap } from "rxjs/Operators";
import { HttpClient } from '@angular/common/http';
import * as customerActions from "../store/customer.action";
import { Customer } from '../models/customer.model';
import { of, Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';

@Injectable()
export class CustomerEffect {
    constructor(public actions$:Actions,private httpClient:HttpClient){
    }
    
    @Effect() 
        searchArticleById$: Observable<Action> = this.actions$.pipe(
            ofType(customerActions.FETCH_CUSTOMERS),
            switchMap(() => 
                this.httpClient.get<Customer[]>('http://localhost:3000/customers').pipe(
                map(data =>  new customerActions.SetCustomers(data)) 
                )
            ))

    // @Effect()
    // getCustomer$:Observable<Action>=this.actions$.pipe(
    //     ofType(customerActions.FETCH_CUSTOMERS),
    //     switchMap(()=>{ 
    //         return this.httpClient.get<Customer[]>('http://localhost:3000/customers').pipe(
    //             map(customers => {
    //                 debugger
    //                 return {
    //                     type:customerActions.SET_CUSTOMERS,
    //                     payload:customers
    //                 };
    //                  //console.log(customers)
    //                 //return new customerActions.SetCustomers(customers)
    //             })
    //         )}
    //         ))
            
        // }),
        // map(customers => {
        //     debugger
        //     return {
        //         type:customerActions.SET_CUSTOMERS,
        //         payload:customers
        //     };
        //      //console.log(customers)
        //     //return new customerActions.SetCustomers(customers)
        // }),
        
        
    
    // debugger
    // @Effect()
    // getCustomer$:Observable<any>=this.actions$.pipe(
    //     ofType(customerActions.GET_CUSTOMER),
    //     switchMap((action:customerActions.GetCustomer)=>{
    //         debugger
    //         return this.httpClient.get<Customer[]>('http://localhost:3000/customers')
    //             .pipe(
    //                 map((data:Customer[])=>{
    //                 console.log(data)
    //                 //return new customerActions.SetCustomer(data)
    //                 return {
    //                     type:customerActions.SET_CUSTOMERS,
    //                     payload:data
    //                 }
    //             }),
    //                 catchError(error=>{
    //                     return of()
    //                 })
    //                 );
    //             }
    //           )
    //         );

    


    // editCustomer=this.actions$.pipe(
    //     ofType(customerActions.EDIT_CUSTOMER_START),
    //     switchMap((customerData : customerActions.EditCustomerStart)=>{
    //         return this.httpClient.post('http://localhost:3000/',customerData.payload)
    //     }
    // ))
}