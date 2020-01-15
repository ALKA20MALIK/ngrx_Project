import { Store } from "@ngrx/store";
import { Customer } from '../models/customer.model';
import * as AllCustomerActions from "../store/customer.action";

const initialState = {
    customers: [
        new Customer(1,'Alka',93284234),
        new Customer(2,'Bhoop',35325235)
    ],
}

export function CustomerReducer(state=initialState,action: AllCustomerActions.CustomerActions ){

    switch(action.type){
        case "ADD_CUSTOMER":
            action.payload.ID=state.customers.length+1
            return {
                ...state,
                customers: [...state.customers, action.payload]
              };

        case "EDIT_CUSTOMER":
            debugger
            const customer=state.customers[action.index];

            const updatedCustomer={
                ...state,
                ...action.payload
            }
            
            const customers=[...state.customers];
            return{
                ...state,
                customers:customers
            };
            
        case "DELETE_CUSTOMER":
            debugger
            const oldcustomers = [...state.customers];
            oldcustomers.splice(action.index, 1);
            return {
                ...state,
                customers: oldcustomers,
              };
        default :
            return state
    }
}