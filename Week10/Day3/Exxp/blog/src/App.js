import logo from './logo.svg';
import './App.css';
import { Header } from './Component/Header';
import MemeGenerators from './Component/MemeGenerator';

function App() {
  return (
    <div>
      <div>
        <Header/>
        <MemeGenerators/>
      </div>
    </div>
  );
}

export default App;
