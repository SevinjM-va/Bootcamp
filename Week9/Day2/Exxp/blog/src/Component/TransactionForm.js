import React, {useState}from 'react';
import { connect } from 'react-redux';
// import {transactionAction} from '../transactionActions';


const  TransactionForm = (props)=>{
  console.log('transa',props.transactions);
  console.log('second',props.selectedTx);
  const [inputValue, setInputValue] = useState('');
   
  const handleInputChange =(event)=>{
    setInputValue({...inputValue,[event.target.value]: event.target.value});
  }
 
  const handleSubmit=(event)=>{
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const payload = {};
    for (let [key, value] of formData){
    payload[key] = value;
     }
     if(props.selectedTx != null){
      const id = props.selectedTx.id;
      payload.id = id;
      props.dispatch({type: 'UPDATE_TRANSACTION',payload:{payload,id}}); 
     }
     console.log('formdata',formData);
     props.dispatch({type: 'ADD_TRANSACTIONS',payload})
     props.dispatch({type: 'RESET_SELECTED_TRANSACTION' , tx: null})
     event.target.reset();
  }

  const editData = ()=>{
    const obj = {
      id: props.id,
      accountNumber: props.accountNumber,
      fsc: props.fsc,
      holderName: props.holderName,
      amount: props.amount
    }
    props.dispatch({type: 'EDITED_DATA', obj: obj})

  }
  // console.log('inputvalue',inputValue)
  const deleteData=(id)=>{
    props.dispatch({type: 'DELETED_DATA', id: id})
  }
   return(
    <div className='container'>
      <h1>Financial Transactions:</h1>
      <form action='' onSubmit={handleSubmit} >
        <input type='text' name='accountNumber' placeholder='Account Number' value={inputValue?.accountNumber} onChange={handleInputChange}></input>
        <br></br>
        <input type='text'name='fsc' placeholder='FSC' value={inputValue?.fsc}  onChange={handleInputChange}></input>
        <br></br>
        <input type='text' name='holdeName' placeholder='A/C Holder Name' value={inputValue?.holderName} onChange={handleInputChange}></input>
        <br></br>
        <input type='text' name='amount' placeholder='Amount' value={inputValue?.amount} onChange={handleInputChange}></input>
        <br></br>
        <input type='submit'></input>
      </form>
      <div>
        {props.transactions.map((item)=>( console.log(item),
          <div className='showDiv' key={item.fsc}>
            <span>{item.accountNumber}</span>
            <span>{item.holdeName}</span>
            <span>{item.amount}</span>
            <button onClick={editData}>Edit</button>
            <button onClick={()=>deleteData(item.id)}>Delete</button>
          </div>
        ))}
      </div>
      
      
    </div>
   )
}
// const mapDispatchToProps = dispatch  =>{

// }
const mapStateToProps  = (state)=>({
  transactions: state.transactions,
  action: state.selectedTx
})


export default connect(mapStateToProps)(TransactionForm);

