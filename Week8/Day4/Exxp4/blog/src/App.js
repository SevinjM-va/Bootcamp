
import './App.css';

async function App() {
  try{
    const info = (await fetch('https://webhook.site/15b2db3c-5066-444c-b9d9-42d15c5243ac')).json();
    console.log(info);
    const details = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    }
    const method = {
      
    }
  }


}

export default App;
