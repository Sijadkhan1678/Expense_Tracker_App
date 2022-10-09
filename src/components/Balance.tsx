import React,{useContext, useEffect} from 'react';
import AccountSummary from './AccountSummary';
import appContext from '../context/AppContext'

 const Balance:React.FC = () => {
  const {balance,transactions,calculateBalance} = useContext(appContext) 

  useEffect(()=>{
   calculateBalance()
  },[transactions])
  
  return (
    <div className='Balance-container'>  
     <div className='balance'>
        <h3>Balance</h3>
        <h1>$ {balance}</h1>
       
   </div>
   
   <AccountSummary  />
   </div>

   )
}

export default Balance;