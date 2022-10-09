import React,{FC,useReducer, PropsWithChildren} from 'react'
import appContext from './AppContext'
import AppReducer from './AppReducer'
import {Action} from './Action'
import Catagory from './Catagory'
import { ADD_TRANSACTION,CALCULATE_BALANCE,CALCULATE_EXPENSE,CALCULATE_INCOME,CLOSE_FORM,DELETE_TRANSACTION, SHOW_FORM } from './types'
import {Transaction} from '../types/Types'



 const AppState:FC<PropsWithChildren> = ({children}) => {

const initialState = { 

   transactions:[],  
    income: 0,
    expense: 0,
    balance: 0,
    form: false, 
 }

 const [state,dispatch] = useReducer(AppReducer,initialState)
 const transactions:any = state.transactions.map( (transaction:Transaction) => transaction.amount)

 // function generate id fo every transaction
 const generateId = () =>  (Math.random()*1000).toFixed(0)
 
 // function to add transaction
 const addTransaction = (transaction:Transaction) => {
  
  let catagory = Catagory.filter( catagory => catagory.type === transaction.catagory)  

     transaction.img = catagory[0].image
     transaction.id = generateId()

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
      })    
 }
 
 // function to delete transaction from transaction history
 const deleteTransaction = (id:number | string | undefined):void => {
    dispatch({
      type:'DELETE_TRANSACTION',
      payload: id
    })
 }

// function calculate balance
const calculateBalance = () => { 

  const balance:number = transactions.reduce( (acc:number, amount:number) => amount += acc ,0)
  dispatch({type:'CALCULATE_BALANCE',payload: balance})
   
 }
// function to calculate income
const calculateIncome = ():void => {
  
  const income:number[] = transactions.filter((amount:number) => amount >= 0)
  
  dispatch({ type: 'CALCULATE_INCOME',  payload: income})
}

// function to calculate expenses 
const calculateExpenses = ():void => {

  const expenses:number[] = transactions.filter( (amount:number) => amount < 0);
  
  dispatch({type: 'CALCULATE_EXPENSE', payload: expenses})
}
const showForm =  (close:boolean) => {

  if(close) { dispatch({type: 'CLOSE_FORM'}) }

   else {dispatch({type: 'SHOW_FORM'}) }  
    
 }

  return <appContext.Provider value={{
    form: state.form,
    transactions: state.transactions,
    balance: state.balance,
    income : state.income,
    expense: state.expense,
    addTransaction,
    deleteTransaction,
    calculateBalance,
    calculateIncome,
    calculateExpenses,
    showForm

  }}>  {children}
   </appContext.Provider>
}

export default AppState
