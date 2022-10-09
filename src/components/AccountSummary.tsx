import React,{useEffect,useContext, FC} from 'react';
import appContext from '../context/AppContext';

 const AccountSummary:FC = () => {
   const {transactions,income,expense,calculateIncome,calculateExpenses} = useContext(appContext);
   
   useEffect(()=>{
    calculateIncome()
    calculateExpenses()
    
   },[transactions])
  
  return(
    <div className='account-summary'>
      <div className='income'>
      <h4>Income</h4>
          <h2>$ {income}</h2> 
          </div> 
      <div className='expense'>
          <h4>Expense</h4>
          <h2>$ {Math.abs(expense)}</h2>
      </div>  
         
   </div>
   )
}
export default AccountSummary