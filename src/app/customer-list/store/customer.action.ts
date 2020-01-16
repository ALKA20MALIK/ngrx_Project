import { Action } from '@ngrx/store'
import { Customer } from '../models/customer.model'

export const ADD_CUSTOMER='ADD_CUSTOMER'

export const EDIT_CUSTOMER_START='EDIT_CUSTOMER_START'
export const EDIT_CUSTOMER='EDIT_CUSTOMER'
export const EDIT_CUSTOMER_END='EDIT_CUSTOMER_END'

export const DELETE_CUSTOMER='DELETE_CUSTOMER'

export const GET_CUSTOMER='GET_CUSTOMER'
export const SET_CUSTOMER='SET_CUSTOMER'


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

export class GetCustomer implements Action{
    readonly type=GET_CUSTOMER
    
}
export class SetCustomer implements Action{
    readonly type=SET_CUSTOMER
    constructor(public payload:Customer[]){}
}

export type CustomerActions= 
AddCustomer | 
EditCustomer | 
DeleteCustomer | 
EditCustomerStart | 
EditCustomerEnd |
GetCustomer |
SetCustomer

