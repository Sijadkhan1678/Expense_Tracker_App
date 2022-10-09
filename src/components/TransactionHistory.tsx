  import React,{useContext} from 'react'; 
  import appContext from '../context/AppContext'
  import TransactionsItem from './TransactionItem';
  import {Transaction} from '../types/Types'

    const TransactionHistory:React.FC = () =>{
  
     const {transactions} = useContext(appContext)

     return(
       
     <div>  
    <ul className='history'>

      <div className='transaction-heading'> 
        <h5>Transactions</h5> <small>view all</small>
     </div>  
      {
       transactions &&  transactions.map((transaction:Transaction) => <TransactionsItem key={transaction.id} transaction={transaction} />)
      }     

   </ul>
   </div> 
    )
}

export default TransactionHistory;