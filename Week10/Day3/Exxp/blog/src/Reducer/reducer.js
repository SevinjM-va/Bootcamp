import { createStore} from 'redux';
const initialState = ['http://i.imgflip.com/1bij.jpg'];

function reducer (state=initialState, action){
  if(action.type === 'RANDOM_IMAGE'){
    return [state = action.payload] 
    //! return [...action.payload]
    // ! bu yazilis duzgun
  }
  return state
}

export const store = createStore(reducer)