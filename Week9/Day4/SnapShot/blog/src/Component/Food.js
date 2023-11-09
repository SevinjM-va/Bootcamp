import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { client } from '../API_Key';
import { connect } from 'react-redux';

const Food=(props)=>{
    const [photo, setPhotos] = useState('');
    useEffect(()=>{
        const fetchImg = async()=>{
          props.dispatch({type: 'LOADING',payload: true})
         client.photos.search({query: 'Food',per_page:24}).then(res=>setPhotos(res.photos))
        }
        fetchImg()
    }, [])
  
  
  return(
    <div className='container'>
    <div className='image_container'>
        {photo? photo.map((item)=>{
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
  export default connect(mapStateToProps)(Food);