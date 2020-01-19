import { Store } from "@ngrx/store";
import { Customer } from '../models/customer.model';
import * as AllCustomerActions from "../store/customer.action";

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
                ...state.customers[action.payload.index],
                ...action.payload
            }
            
            const updatedCustomers=[...state.customers];
            updatedCustomers[action.payload.index]=updatedCustomer

            //console.log("EDIT_CUSTOMER")

            return{
                ...state,
                customers:updatedCustomers
            };
            
        case "DELETE_CUSTOMER":
            debugger
            // const oldcustomers = [...state.customers];
            // oldcustomers.splice(action.payload, 1);
            
            //console.log("DELETE_CUSTOMER")
            return {
                ...state,
                customers: state.customers.filter((customer,index)=>{
                    return index!==action.payload
                }),
              };
        //case "GET_CUSTOMERS":
        //     return {...state};

        case "SET_CUSTOMERS":
        return{
            ...state,
            customers:[...action.payload]
        };
        
    }
}