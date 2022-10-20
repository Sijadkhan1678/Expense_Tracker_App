
export type Transaction= {

     id?: number | string
     img?: string
     title: string
     amount: number | string
     catagory: string
}

export type TransactionItemProps = {
     transaction: Transaction
}

export type ContextProps = {
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
 

export enum Types {
      ADD_TRANSACTION='ADD_TRNSACTION',
      DELETE_TRANSACTION= 'DELETE_TRANSACTION',
      CALCULATE_EXPENSE= 'CALCULATE_EXPENSE', 
      CALCULATE_INCOME= 'CALCULATE_INCOME' , 
      CALCULATE_BALANCE= 'CALCULATE_BALANCE',
      CLOSE_FORM = 'CLOSE_FORM', 
      SHOW_FORM = 'SHOW_FORM'
}
