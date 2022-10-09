import { Transaction } from "../types/Types"

export type Action =  { type: 'ADD_TRANSACTION',  payload:Transaction} 

                     | {type: 'DELETE_TRANSACTION', payload: number | string | undefined} 

                     | {type: 'CALCULATE_BALANCE',payload:number} 
                     
                     | {type: 'CALCULATE_INCOME',payload:number[]} 

                     | {type: 'CALCULATE_EXPENSE',payload:number[]}  
                     
                     | {type: 'SHOW_FORM' } 
                     
                     | {type: 'CLOSE_FORM' } 