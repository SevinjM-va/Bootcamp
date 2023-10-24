import logo from './logo.svg';
import './App.css';
import Actors from './actors';

const actors = [
  {
    firstName: "Angelina",
    lastName: "Jolie",
  },
  {
    firstName: "Brad",
    lastName: "Pit",
  },
  {
    firstName: "Margot",
    lastName: "Robbie",
  },
]


function App() {
  return (
    <div>
      <h1>Actors</h1>
      <Actors actorslist={actors} />
    </div>
  )
}

export default App;
