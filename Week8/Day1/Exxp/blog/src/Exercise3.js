import React from "react";

function Exercise ({exlist}){
  return(
    exlist.map(ex=>(
      <h1>{ex}</h1>
    ))
  )
}

export default Exercise;