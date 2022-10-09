import React,{useState,useContext, FormEvent, ChangeEvent} from "react";
import appContext from "../context/AppContext";
import { Transaction } from "../types/Types";

 const AddTransaction = () =>{

  const {form,addTransaction,showForm} = useContext(appContext)
  const [transaction,setTransaction] = useState <Transaction>({

        amount: '',
        title: '',
        catagory: 'select catagory'
    })
    
    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        
        setTransaction({...transaction,[e.target.name]: e.target.value})
       
    }
    const {amount,title,catagory} = transaction

    const onSubmit = (e:FormEvent) =>{
      
      e.preventDefault();

      if(amount ==='' || title ==='' || catagory === ''){
          console.log(title)
        const error =  title ==='' ? 'please add title' : 'please add amount';
         console.log('error',error)
      } 
    
      else{
       
          addTransaction({amount: (amount),title,catagory})
        
          setTransaction({amount:'',title:'',catagory:''})
          showForm(true)
      }
    }

 
    return (

        <form onSubmit={onSubmit} className={`form ${form !==true ? '': 'showform'}` }>
            
        <div className="form-control">
            <label htmlFor='amount'> Amount</label>
            <input  type='Number' onChange={handleChange} value={amount} id='amount' name='amount' placeholder="Transaction Amount"/>
            </div>
            <div className="form-control">
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' onChange={handleChange} value={title} name='title' placeholder="Transaction Title"/>

         </div>
        
         <div className="form-control">

         <select name="catagory" value={catagory} onChange={handleChange} >

            <option value=''>      Select Catagory </option>
            <option value='facebook'> Facebook </option>
            <option value='seo'>      Seo      </option>
            <option value='income'>   Income   </option>
            <option value='expense'>  Expense  </option>
            <option value='earn'>     Earning  </option>
            <option value='food'>     Food     </option>
            <option value='book'>     Book     </option>
            <option value='cake'>     Cake      </option>
            <option value='watch'>    Watch     </option>

         </select>
         </div>
         <button>Transaction</button>
        </form>
        
    
    )
}
export default AddTransaction;