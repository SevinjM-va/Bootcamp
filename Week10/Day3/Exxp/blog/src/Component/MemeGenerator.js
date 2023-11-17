import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

const MemeGenerators = (props) => {
  // console.log('propsss',props.info)
  const firstInput = useRef();
  const secondInput = useRef();

  const [frst, setFrst] = useState('');
  const [scnd, setScnd] = useState('');
  const [fetching, setFetching] = useState(false);

  const randumNum = Math.floor(Math.random()* (100 - 1)+1);
  useEffect(()=> {
    const fetchData =async ()=>{
      const response = await fetch('https://api.imgflip.com/get_memes');
      const images = await response.json();
      const data = images.data.memes[randumNum].url;
     props.dispatch({type:'RANDOM_IMAGE', payload: data});
    } 
    if(fetching){
      fetchData()
      setFetching(false)
    }
    
})

  const handleChange=()=>{
    const inputVal1 = firstInput.current.value;
    const inputVal2 = secondInput.current.value;
    setFrst(inputVal1);
    setScnd(inputVal2);
  }

  const randomImg=(e)=>{
    e.preventDefault();
    setFetching(true);
    firstInput.current.value = '';
    secondInput.current.value = '';
    setFrst('');
    setScnd('');

  }
  return (
    <div className="meme">
  
      <form className="meme-form" onChange={handleChange}>
        <input type="text" ref={firstInput}></input>
        <input type="text" ref={secondInput}></input>
        <button onClick={randomImg}>Gen</button>
      </form>

      <h2 className="top">{frst}</h2>
      <h2 className="bottom">{scnd}</h2>
      <img src={props.info? props.info: ''} alt=""></img>
    </div>
  );
};
const mapStateToProps = (state) => ({
  info: state,
});
export default connect(mapStateToProps)(MemeGenerators);
