import React,{useState} from 'react';


// Yalnız sonda görsənməli olan divi edə bilmədim
function Todolist () {
  const [ inputValue, setInputValue ] = useState('');
  const [divs, setDivs] = useState(['Buy some milk','Do my homework']);

  const newTodo=(event)=>{
    setInputValue (event.target.value);
  } 

  const deletData = (index) => {

    const newDivs = [...divs];
      newDivs.splice(index, 1);
      setDivs(newDivs);
  };

  const enteredData=(event)=>{
    if(event.key == 'Enter'){
      setDivs(prevDivs => [...prevDivs, <div onClick={deletData} key={prevDivs.length}>{inputValue}</div>])
      setInputValue('')
     
    }
  }
  return (
    <div  className='container' >
       <h1 className='header'>Todo's</h1>
        <div >
          {divs.map((div, index) => (
          <div key={index} className='firstList' onClick={() => deletData(index)}>
          {div}
        </div>
      ))}
    </div>
        <label>Add a new todo:</label>
        <br></br>
        <input type="text" value={inputValue} onChange={newTodo} onKeyDown={enteredData}></input>
    </div>
  );
}

export default Todolist;