import React, { useState } from 'react';
import { connect } from 'react-redux';
// import {transactionAction} from '../transactionActions';

const TransactionForm = (props) => {
  const [inputValue, setInputValue] = useState('');

  const [onEdit, setOnEdit] = useState(false);

  const handleInputChange = (event) => {
    setInputValue({...inputValue, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const payload = {};
    for (let [key, value] of formData) {
      payload[key] = value;
    }
   
    if (!onEdit) {
      

      props.dispatch({ type: 'ADD_TRANSACTIONS', payload });
     
    } else if (onEdit) {
    
      props.dispatch({
        type: 'UPDATE_TRANSACTION',
        payload: { ...inputValue },
      });
       setOnEdit(false);
    }
   
    event.target.reset();
  };

  const editData = (item) => {
    console.log('🚀 ~ file: TransactionForm.js:39 ~ editData ~ item:', item);

    setOnEdit(true);
    setInputValue({ ...item });
     console.log(
       '🚀 ~ file: TransactionForm.js:7 ~ TransactionForm ~ inputValue:',
       inputValue
     );
  };
  
  const deleteData = (id) => {
    props.dispatch({ type: 'DELETED_DATA', id: id });
  };
  return (
    <div className="container">
      <h1>Financial Transactions:</h1>
      <form action="" onSubmit={handleSubmit} onChange={handleInputChange}>
        <input
          type="text"
          name="accountNumber"
          placeholder="Account Number"
          value={inputValue?.accountNumber}
        ></input>
        <br></br>
        <input
          type="text"
          name="fsc"
          placeholder="FSC"
          value={inputValue?.fsc}
        ></input>
        <br></br>
        <input
          type="text"
          name="holderName"
          placeholder="A/C Holder Name"
          value={inputValue?.holderName}
        ></input>
        <br></br>
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          value={inputValue?.amount}
        ></input>
        <br></br>
        <input type="submit"></input>
      </form>
      <div>
        {props.transactions.map(
          (item) => (
            console.log(item),
            (
              <div className="showDiv" key={item.fsc}>
                <span>{item.accountNumber}</span>
                <span>{item.holdeName}</span>
                <span>{item.amount}</span>
                <button onClick={() => editData(item)}>Edit</button>
                <button onClick={() => deleteData(item.id)}>Delete</button>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};
// const mapDispatchToProps = dispatch  =>{

// }
const mapStateToProps = (state) => ({
  transactions: state.transactions,
 
});

export default connect(mapStateToProps)(TransactionForm);
