import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { client } from '../API_Key';

function Beaches(props){

  return(
    <div className='container'>
        <div className='image_container'>
          {props.info? props.info.map((item)=>{
              return(
                <div key={item.id} className='imgdiv'>
                    <img src={item.src.medium}></img>
                </div>
            )
        }) : ''}
          
</div>
    </div>
  )
}

const mapStateToProps=(state)=>({
  info: state
})

export default connect(mapStateToProps)(Beaches);