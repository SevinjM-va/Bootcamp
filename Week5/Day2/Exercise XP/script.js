
let x = new XMLHttpRequest();

x.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

x.responseType = 'json';
x.send();

x.onload = function(){

if (x.status != 200){
  console.log('Something went wrong');
} else {
  console.log(x.response.data)
}
}

x.onerror = function(){ 
  alarm('Failed')
}
console.log();
