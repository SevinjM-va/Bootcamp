
import './App.css';

async function App() {
  try{
    const info = (await fetch('https://webhook.site/15b2db3c-5066-444c-b9d9-42d15c5243ac')).json();
    // !! json ozu de asinxrondur iki defe await olmali
    console.log(info);
    const body = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    }



// }!! try catch birlikde olmali
}

// !! post req
// const response = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
   
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
   
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
// await response.json(); 

export default App;
