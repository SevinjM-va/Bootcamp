import { Navbar } from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Post from './Components/Post';
import { Routes, Route, BrowserRouter, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:post_id" element={<Post />} />
        {/* dynamic path i birbasa verdiyin zaman digerleri ile konflikde gire biler
          umumiyyetle router her bir path i xuyur sonda qerar verir hansi komponenti render edeceyine
          amma <switch> istifade edildiyi zaman first instances nezere alir

          Documentation https://v5.reactrouter.com/web/api/Switch
          */}
      </Routes>
    </div>
  );
}

export default App;
