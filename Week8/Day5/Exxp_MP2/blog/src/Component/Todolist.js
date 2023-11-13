import React,{useState} from 'react';


// Yalnız sonda görsənməli olan divi edə bilmədim
function Todolist () {
  const [ inputValue, setInputValue ] = useState('');
  const [divs, setDivs] = useState(['Buy some milk','Do my homework']);

//   {content:'todo1',
// ischecked:false}

  const newTodo=(event)=>{
    setInputValue (event.target.value);
    // !! set overwrite edir evvelki valuelari da icerisine copy etmelisen
    // !!! ve ya yeni array copy si yaradib push etmelisen
  } 

  const deletData = (index) => {
    const newDivs = [...divs];
      newDivs.splice(index, 1);
      setDivs(newDivs);
      console.log(divs)
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
        <div>
          {divs.length === 0 ? <p>Todolist is empty</p>: divs.map((div, index) => (
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