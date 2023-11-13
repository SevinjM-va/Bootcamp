import logo from './logo.svg';
import './App.css';
import Button from './Actor';

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


const App = () => {
  return (
    <div className="box">
      <Button/>
    </div>
  )
}

export default App;
