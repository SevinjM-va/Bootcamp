
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import { Favourites } from './Component/Favourite';




function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path ='/' element={<Home/>}/>
        {/* <Route exact path ='/home' element={<Home/>}/> */}
        <Route path ='/favourites' element={<Favourites/>}/>
      </Routes>
    </div>
  );
}

export default App;
