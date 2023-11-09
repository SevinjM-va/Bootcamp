import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { client } from '../API_Key';



function Mountain(props){
    console.log('propsssss',props.info)


    const [photo, setPhotos] = useState('');
    const [name, setName ] = useState('Mountain');

    useEffect(()=>{
   
            const fetchImg = async()=>{
               client.photos.search({query: 'Mountain',per_page:24}).then(res=>setPhotos(res.photos))
              }
              fetchImg()
              
    }, [])
  
    
  
  return(
    <div className='container'>
          <div className='image_container'>
            {photo? photo.map((item)=>{
                return(
                    <div key={item.id} className='imgdiv'>
                        <img src={item.src.medium} ></img>
                    </div>
                    )
                    }) : ''} 
            
            
          </div>
      
    </div>)
}
const mapStateToProps=(state)=>({
  info: state
})
export default connect(mapStateToProps)(Mountain);