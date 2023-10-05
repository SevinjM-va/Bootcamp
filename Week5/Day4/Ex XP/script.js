
// Ex 1
// fetch("https://www.swapi.tech/api/starships/9/")
//     (response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));



async function a (){
  const result = await (await fetch("https://www.swapi.tech/api/starships/9/")).json();
  console.log(result);
};
a();




// Ex 2
function resolveAfter2Seconds() {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve('resolved');
      }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();