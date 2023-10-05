const urls = [
  'https://www.swapi.tech/api/people/1',
  'https://www.swapi.tech/api/people/2',
  'https://www.swapi.tech/api/people/3',
  'https://www.swapi.tech/api/people/4'
]
console.log(urls);


// !!! Resolve və rejecti onload funsiyasının icərisinə saldıqda işləmir.
// !!! Burada hər promise üçün ayrıca neü promise yaradılmalıdir yoxsa loopla etsək kifayətdirmi? allPromiseə aid tapşırıqlarda ayrı ayrı yaradılmışdı deyə mən də elə etdim amma məncə qısa variantı da var. Zəhmət olmasa deyərsiniz necə etmək lazım olduğunu.


function fetch (url){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => {
      console.log(xhr.response.result);
    };
}

Promise.all(urls).then((allUrls=>{
  allUrls.map((url) => fetch(url))
 
})).catch(err=>console.log(err));


// const prom1 = new Promise ((resolve, reject)=>{
// // for(let i = 0; i < urls.length; i++){
// let x = new XMLHttpRequest();
// x.open('GET', urls[0]);

// x.responseType = 'json';
// x.send();

// x.onload = function(){
// if(x.status != 200){
//   console.log('something went wrong')
// } else {

// // !!! Burada name-i properties obyektinə daxil edə bilmədim.
//   let first = x.response.result.properties.name;
//   let second = x.response.result.properties;
//   console.log(first);
//   console.log(second);
// }
// }
// x.onerror = function(){
//   alert('Request failed');
// };
// // }
// }).then(result=>console.log(result));




// const prom2 = new Promise ((resolve, reject)=>{
//   // for(let i = 0; i < urls.length; i++){
//   let x = new XMLHttpRequest();
//   x.open('GET', urls[1]);
  
//   x.responseType = 'json';
//   x.send();
  
//   x.onload = function(){
//   if(x.status != 200){
//     console.log('something went wrong')
//   } else {
//     let first = x.response.result.properties;
//     console.log(first) 
//   }
//   }
//   x.onerror = function(){
//     alert('Request failed');
//   };
//   // }
//   }).then(result=>console.log(result));

  

//   const prom3 = new Promise ((resolve, reject)=>{
//     // for(let i = 0; i < urls.length; i++){
//     let x = new XMLHttpRequest();
//     x.open('GET', urls[2]);
    
//     x.responseType = 'json';
//     x.send();
    
//     x.onload = function(){
//     if(x.status != 200){
//       console.log('something went wrong')
//     } else {
//       let first = x.response.result.properties;
//       console.log(first) 
//     }
//     }
//     x.onerror = function(){
//       alert('Request failed');
//     };
//     // }
//     }).then(result=>console.log(result));

    


//     const prom4 = new Promise ((resolve, reject)=>{
//       // for(let i = 0; i < urls.length; i++){
//       let x = new XMLHttpRequest();
//       x.open('GET', urls[3]);
      
//       x.responseType = 'json';
//       x.send();
      
//       x.onload = function(){
//       if(x.status != 200){
//         console.log('something went wrong')
//       } else {
//         let first = x.response.result.properties;
//         console.log(first) 
//       }
//       }
//       x.onerror = function(){
//         alert('Request failed');
//       };
//       // }
//       }).then(result=>console.log(result));

      


// Promise.all([prom1, prom2, prom3, prom4])
// .then(result => console.log(result))
// .catch(error => console.log(error));

// Promise.allSettled([prom1, prom2, prom3, prom4])
// .then(result => console.log(result))
// .catch(error => console.log(error));

// Promise.race([prom1, prom2, prom3, prom4])
// .then(result => console.log(result))
// .catch(error => console.log(error));