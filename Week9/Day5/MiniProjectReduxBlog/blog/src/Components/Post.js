import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import{  Router, Link, Routes, Route } from 'react-router-dom';


const Post = (props)=>{
  // console.log(props.info)
  const {post_id} = useParams('');
  // console.log("postId",post_id)

  const handleClick=(id)=>{
    props.delCard(id);
  }

    return (
      <div className='container' >
        {props.info.map((item)=>{
          if(item.id === post_id){
            return(
            <div key={item.id}  className='card-content'>
            <h5>{item.title}</h5>
            <p>{item.body}</p>
            <button onClick={()=>handleClick(item.id)}><Link to="/">Delete Post</Link></button>
          </div>)
          }
          })}
            
      </div>
    )
  }

  const mapStateToProps=(state)=>({
    info: state
  })
  const mapDispatchToProps=(dispatch)=>({
    delCard: (id)=>dispatch({type: 'DELETE_POST',
    payload: id})
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Post);