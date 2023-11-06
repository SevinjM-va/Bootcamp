import React, { useState } from 'react';

const MemoryGame =(props)=>{
  const [ heroes, setheroes ] = useState('');
  const [ score, setscore ] = useState(0);
  const [ topScore, settopScore ] = useState(0);



  const randomHero =(id)=>{
    setheroes({heroes: props.info.superheroes.sort((a,b)=>(Math.random() > 0.5 ? -1 : 1))})
      const obj = props.info.superheroes.find(item=> item.id === id);
      if(obj.clicked == false){
        obj.clicked = true;
        setscore((prevScore)=>prevScore + 1)
      } else {
        props.info.superheroes.map((item)=>(item.clicked = false))
        console.log(props.info.superheroes.map((item)=>(item.clicked)))
        if (topScore < score){
          settopScore(score)
        }
        console.log(topScore)
        setscore(0)
      }
      }
      
 
  return(
    <div>
      <div className='navbar'>
        <div>
        <h1>Superheroes Memory Game</h1>
        </div>
        <div className='scores'>
        <h5>Score:{score}</h5>
        <h5>Top Score: {topScore}</h5>
        </div>
      </div>
        <h2>Get points by clicking on an image but don't click on any more than once!</h2>
      
    <div  className='container'>
      {props.info.superheroes.map((hero)=>(
        <div key={hero.name} onClick={()=>(randomHero(hero.id))} className='mini-container'> 
          <div className='imgDiv'>
            <img src={hero.image}></img>
          </div>
          <div className='nameDiv'>
            <p><strong>Name:</strong> {hero.name}</p>
            <p><strong>Occupation:</strong> {hero.occupation}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
} ;

export default MemoryGame