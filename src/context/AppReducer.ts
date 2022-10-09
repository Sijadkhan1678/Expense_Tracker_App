import { ADD_TRANSACTION,DELETE_TRANSACTION,CALCULATE_EXPENSE, CALCULATE_INCOME, CALCULATE_BALANCE, CLOSE_FORM, SHOW_FORM } from "./types";
import {Action} from './Action'
import {Transaction} from '../types/Types'

 type State = {
    transactions: Transaction[]  
    income: number
    expense: number
    balance: number
    form: boolean,
 }
export const AppReducer = (state:State,action:Action) => {
    switch (action.type) {

        case 'ADD_TRANSACTION':

        return{ ...state, transactions:[...state.transactions,action.payload]}

        case 'DELETE_TRANSACTION':
            return {
                ...state, transactions: state.transactions.filter( (transaction:Transaction) => transaction.id !== action.payload)
            }
       case 'CALCULATE_BALANCE':
           return {  ...state, balance : action.payload }  

       case 'CALCULATE_INCOME':

            return {  ...state, income: action.payload.reduce( (acc:number, amount:number) => amount += acc ,0)}
            
        case 'CALCULATE_EXPENSE':
        
            return { ...state, expense: action.payload.reduce( (acc:number, amount:number) => amount += acc ,0) }

        case 'SHOW_FORM':
            return { ...state, form: true  }  

        case 'CLOSE_FORM':
            return { ...state, form: false }            
    
        default:
         return  state;
    }

}
export default AppReducer
