import React from 'react';
import { connect } from 'react-redux';

function Home(props){
  // console.log('propsHome', props.info.city )

  
  return(
    <div className='container'>
      <div className='dataBox'>
      <h1>{props.info.city.LocalizedName}</h1>
      <h3></h3>
      </div>
      
    </div>
  )
}

const mapStateTpProps=(state)=>({
  info: state
})
export default connect(mapStateTpProps)(Home);