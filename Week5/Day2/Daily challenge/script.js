

const form = document.querySelector('form');
const category = document.querySelector('input');
const imgDiv = document.querySelector('.imgDiv');
const img = document.createElement('img');





const getSubmit =(e)=>{
  e.preventDefault();
  const val = category.value;
  fetchGif(val);
}


const fetchGif = (category)=>{

let xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${category}&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
xhr.send();
xhr.responseType = 'json';

xhr.onload = function(){
  if (xhr.status != 200){
    console.log('Something went wrong');
  } else{

    console.log(xhr.response.data)

    img.src = xhr.response.data;
    console.log(img)
    imgDiv.appendChild(img);
    document.body.appendChild(imgDiv);
    console.log(imgDiv)
    const button = document.createElement('div');
    button.textContent = 'Click me';
    imgDiv.appendChild(button);
  }
}

xhr.onerror = function(){
  alarm('failed')
}

}
form.addEventListener('submit', getSubmit);




