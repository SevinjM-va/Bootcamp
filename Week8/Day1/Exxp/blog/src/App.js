import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';
import './Exercise.css'



// Ex2
// const user = {
//   firstName: 'Bob',
//   lastName: 'Dylan',
//   favAnimals : ['Horse','Turtle','Elephant','Monkey']
// };
// const favAnim = user.favAnimals;
// console.log(favAnim)



// Ex1
// const myelement = <h1>I Love JSX!</h1>;
// const sum = 5+5;

function App() {
  return (
    <div>
      {/* Ex1
      <p>Hello World!</p>
      <h1>{myelement}</h1>
      <p>React is {sum} times better with JSX</p> */}

      {/* Ex2
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <h3>{user.favAnimals}</h3>

      <UserFavoriteAnimals animallist={favAnim}/> */}

      {/* Ex3 */}
      <Exercise />
      
      
    </div>
  );
}

export default App;


// !!! global variables yerine her birini ozune uygun component icerisinde vermek daha uygun