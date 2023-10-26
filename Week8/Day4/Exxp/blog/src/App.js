import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from './Compon.js/Errorboundry'

const Home = ()=>(
    <div >
    <h1>Home</h1>
    </div>
  );

  const Profile = ()=>(

    <div >
    <h1>Profile Screen</h1>
    </div>
  );

  const Shop = ()=>{
    throw new Error('Something went wrongg');
    return(
      <div >
      <h1>Shop</h1>
      </div>
    )
    }


  const App = ()=>(

    <div >
    <ul>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/profile'>Profile</NavLink>
      </li>
      <li>
        <NavLink to='/shop'>Shop</NavLink>
      </li>
    </ul>
    <ErrorBoundary>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route exact path='/shop' element={<Shop/>}/>
    </Routes>
    </ErrorBoundary>
    </div>
  );
  export default App;