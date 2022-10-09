import React,{ createContext } from 'react';
import {Transaction} from '../types/Types'
import {Action} from './Action'


type ContextProps = {
    transactions: Transaction[]
    income: number
    expense: number
    balance: number
    form: boolean
    addTransaction: (transaction:Transaction) => void
    deleteTransaction: (id:number | string |undefined)=>void
    calculateBalance: () => void
    calculateIncome: () => void
    calculateExpenses: ()=> void
    showForm: (close:boolean)=> void
  
}
 const appContext = createContext<ContextProps> ({} as ContextProps);
 export default  appContext;

 