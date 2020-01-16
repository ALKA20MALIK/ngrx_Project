import { Store } from "@ngrx/store";
import { Customer } from '../models/customer.model';
import * as AllCustomerActions from "../store/customer.action";

 //initialState:Customer[]
// const initialState = {
//     customers: [
//         new Customer(1,'Alka',93284234),
//         new Customer(2,'Bhoop',35325235)
//     ],
// }

export function CustomerReducer(state,action: AllCustomerActions.CustomerActions ){

    switch(action.type){
        case "ADD_CUSTOMER":
            action.payload.ID=state.customers.length+1
            console.log("ADD_CUSTOMER")

            return {
                ...state,
                customers: [...state.customers, action.payload]
              };

        case "EDIT_CUSTOMER":
            debugger
            const updatedCustomer={
                ...state,
                ...action.payload
            }
            
            const customers=[...state.customers];
            console.log("EDIT_CUSTOMER")

            return{
                ...state,
                customers:customers
            };
            
        case "DELETE_CUSTOMER":
            debugger
            const oldcustomers = [...state.customers];
            oldcustomers.splice(action.index, 1);
            
            console.log("DELETE_CUSTOMER")
            return {
                ...state,
                customers: oldcustomers,
              };
        case "SET_CUSTOMER":
            return {
                ...state,
                customers: action.payload
              };
    }
}