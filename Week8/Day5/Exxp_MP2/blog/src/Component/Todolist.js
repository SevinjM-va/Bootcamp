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
//  todonun id si nin oturulmesi daha sonra hemin id e esasen objectin icerisinden find etmesi daha duzgundur
// !! umumiyyetle todo elemtinin object seklinde olmasi daha rahatlasdiracaq
// !! ve todo item ozu de ayrica komponent olub todo list icerisinde map etmelidir
// 
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