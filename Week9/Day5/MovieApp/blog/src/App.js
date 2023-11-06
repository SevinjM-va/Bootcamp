import './App.css';
import Navbar from './Component/Navbar';
import SearchForm from './Component/SearchForm';
import Moviescontainer from './Component/MoviesContainer';
import Movie from './Component/Movie';
import Footer from './Component/Footer';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <div>
              <SearchForm />
              <Moviescontainer />
            </div>
          </Route>
          <Route path ='/movie/:id'>
            <Movie/>
          </Route>
        </Switch>   
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
