import React from 'react';
import { connect } from 'react-redux';


const Cards =(props)=>{
console.log('propsss', props.info)

  return (
    <div className='cardsContainer'>
      {props.info.map((item)=>{
        return(
          <div key={item.number} className='card'>
        <p><i className={item.icon}></i> {item.label}</p>
        <h1>{item.number}</h1>
      </div>
        )
      })}
      
    </div>
  )
}

const mapStateToProps=(state)=>({
  info: state
})
export default connect(mapStateToProps)(Cards);