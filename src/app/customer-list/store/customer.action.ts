import { Action } from '@ngrx/store'
import { Customer } from '../models/customer.model'

export const ADD_CUSTOMER='ADD_CUSTOMER'
export const EDIT_CUSTOMER='EDIT_CUSTOMER'
export const DELETE_CUSTOMER='DELETE_CUSTOMER'

export class AddCustomer implements Action{
    readonly type=ADD_CUSTOMER
    constructor(public payload: Customer) {

    }  
}

export class EditCustomer implements Action{
    readonly type=EDIT_CUSTOMER
    constructor(public index:number, public payload: Customer) {
    }
}
export class DeleteCustomer implements Action{
    readonly type=DELETE_CUSTOMER
    constructor(public index : number){
    }
}
export type CustomerActions= AddCustomer | EditCustomer | DeleteCustomer

