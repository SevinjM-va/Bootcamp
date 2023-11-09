import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { client } from '../API_Key';

function Beaches(props){
    const [photo, setPhotos] = useState('');
    
    useEffect(()=>{
      const fetchImg = async()=>{
        props.dispatch({type: 'LOADING',payload: true})
       client.photos.search({query: 'Beaches',per_page:24}).then(res=>setPhotos(res.photos))
      }
      fetchImg()
  }, [])


  return(
    <div className='container'>
        <div className='image_container'>
          {photo? photo.map((item)=>{
              return(
                <div key={item} className='imgdiv'>
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