import React from 'react';
import { connect } from 'react-redux';
import{  Router, Link, Routes, Route } from 'react-router-dom';

class Home extends React.Component {
  constructor (props){
    // console.log(props.info)
    super (props)
    this.state = {}
  }
  
  render(){
    return (
      <div className='container'>
        <h3>Home</h3>
          {this.props.info.map((post)=>{
            console.log(post.id > 0)
            return (
            <div key={post.id} className='card-content'>
              <h5><Link to={`/${post.id}`}>{post.title}</Link></h5>
              <p>{post.body}</p>
            </div>
          )})}
           
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  info: state
})

export default connect(mapStateToProps)(Home);