import React,{useState} from 'react'

const QuotesComp =(props)=>{
  const [ quote, setquote ] = useState (props.info[0].quote)
  const [ author, setauthor ] = useState (props.info[0].author)
  const [ color, setcolor ] = useState('0');
  const [animation, setAnimation] = useState('');


   let a = 0;
  const newQuote=()=>{
    let num = Math.floor(Math.random() * (props.info.length - 0) + 0); 

    setAnimation('my-keyframes 2s linear');
    setTimeout(() => setAnimation(''),0)
  
    if (num !== a){
      setquote(props.info[num].quote)
      setauthor(props.info[num].author)
      console.log('not same')
    } else {
      num++;
      setquote(props.info[num].quote)
      setauthor(props.info[num].author)
      console.log('same')
    }
    getRandomColor()
   
    a = num;
  }
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    setcolor(color)
}

  return(
    <div className='container' style={{backgroundColor: color}}>
      <div className='mini_container'>
        <div className='quotes'>
            <p id ='quoteP' className style={{animation: animation, color: color}}>{quote}
            <b className='author'>{author}</b>
            </p>
          </div>
        <div className='btnDiv'>
          <button onClick={newQuote} style={{backgroundColor: color}}>New quote</button>
        </div>
      </div>
    </div>)
}
export default QuotesComp;