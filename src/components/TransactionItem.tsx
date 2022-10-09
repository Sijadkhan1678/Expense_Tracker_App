import React,{FC, useContext} from "react";
import appContext from "../context/AppContext";
import {Transaction} from '../types/Types'

// type TransactionItem = {
//    id: number
//    title: string
//    amount: number
//    img: string
// }
type TransactionItemProps = {
   transaction: Transaction
}
const TransactionsItem:FC <TransactionItemProps> = ({transaction:{id,title,amount,img}}) => {
  
console.log('id value',id)
console.log('amount value',amount)
const {deleteTransaction} = useContext(appContext)
 return (
    <li>
    <button onClick={()=> deleteTransaction(id)}>X</button>
    <img style={{width:36,padding:0,marginRight:'5px'}} src={img} alt='img' />
     {title}
  <div style={{textAlign: 'center',display:'inline',marginLeft:title.length >6 ? '11rem' : '12.2rem'}}>
 <small style={{display: 'block' }}>
    $ {amount}
 </small>
    <small>
       today
 </small>
</div>
</li>

 )
}
export default TransactionsItem