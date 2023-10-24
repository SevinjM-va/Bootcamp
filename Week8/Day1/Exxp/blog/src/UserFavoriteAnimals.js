import React from 'react';

function UserFavoriteAnimals({animallist}){

  return (
    
    animallist.map(anim => (
      <ul key={anim}>
        <li>{anim}</li>
      </ul>
   
    ))
  )

}
export default UserFavoriteAnimals;