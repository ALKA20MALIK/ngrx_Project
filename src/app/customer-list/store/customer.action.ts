import { Action } from '@ngrx/store'
import { Customer } from '../models/customer.model'

export const ADD_CUSTOMER='ADD_CUSTOMER'

export const EDIT_CUSTOMER_START='EDIT_CUSTOMER_START'
export const EDIT_CUSTOMER='EDIT_CUSTOMER'
export const EDIT_CUSTOMER_END='EDIT_CUSTOMER_END'

export const DELETE_CUSTOMER='DELETE_CUSTOMER'

export const FETCH_CUSTOMERS='FETCH_CUSTOMERS'
export const SET_CUSTOMERS='SET_CUSTOMERS'


export class AddCustomer implements Action{
    readonly type=ADD_CUSTOMER
    constructor(public payload: Customer) {

    }  
}

export class EditCustomer implements Action{
    readonly type=EDIT_CUSTOMER
    constructor(public payload :{index:number, updatedCustomer: Customer}) {
    }
}
export class DeleteCustomer implements Action{
    readonly type=DELETE_CUSTOMER
    constructor(public payload : number){
    }
}

export class EditCustomerStart implements Action{
    readonly type=EDIT_CUSTOMER_START
    constructor(public payload:Customer){
    }
}
export class EditCustomerEnd implements Action{
    readonly type=EDIT_CUSTOMER_END
    constructor(public index:number){
    }
}

export class FetchCustomers implements Action{
    readonly type=FETCH_CUSTOMERS
}
export class SetCustomers implements Action{
    readonly type=SET_CUSTOMERS
    constructor(public payload:Customer[]){}
}

export type CustomerActions= 
AddCustomer | 
EditCustomer | 
DeleteCustomer | 
EditCustomerStart | 
EditCustomerEnd |
FetchCustomers |
SetCustomers

