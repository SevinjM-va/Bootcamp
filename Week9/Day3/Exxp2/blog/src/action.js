const ageUp =()=>{
  return {type: "AGE_UP"}
}
const ageDown =()=>{
 return {type: "AGE_DOWN"}
}


export const logAction = (param)=>{
 
  
  return (dispatch, getState)=>{
    const globState = getState();

      if (param === 'up'){
        dispatch(ageUp())
        console.log('caught in the middleware',JSON.stringify(globState))
      } else if (param === 'down'){
        dispatch(ageDown())
        console.log('caught in the middleware',JSON.stringify(globState))
      }
  }
}




