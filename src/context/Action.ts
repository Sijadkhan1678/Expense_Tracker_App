import { Transaction,Types } from "../types/Types"


export type Action =  { type: Types.ADD_TRANSACTION,  payload:Transaction} 

                     | {type: Types.DELETE_TRANSACTION, payload: number | string | undefined} 

                     | {type: Types.CALCULATE_BALANCE,payload:number} 
                     
                     | {type: Types.CALCULATE_INCOME,payload:number[]} 

                     | {type: Types.CALCULATE_EXPENSE,payload:number[]}  
                     
                     | {type: Types.SHOW_FORM } 
                     
                     | {type: Types.CLOSE_FORM } 