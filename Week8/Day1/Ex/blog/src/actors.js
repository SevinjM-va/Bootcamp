
import React from 'react';

function Actor ({actorslist}){

  return (

    actorslist.map(actor => (

      <ul className='container' key={actor.firstName}>
        <li>{actor.firstName}</li>
        <li>{actor.lastName}</li>
      </ul>
    ))
  )

    }

export default Actor;