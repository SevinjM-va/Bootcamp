
// 1. Create an array which value is the planets of the solar system.
let planet = ['Earth','Yupiter','Neptun','Saturn','Mars'];

// 2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
  

let createDiv;

  for (let item of planet){
    createDiv = document.createElement('div');
    createDiv.classList.add('planet');
    createDiv.classList.add(item.toLowerCase());
    let htmlSection = document.querySelector('.listPlanets');
    htmlSection.appendChild(createDiv);
    console.log(createDiv);  

    // Hər planetə 2 ay təyin etdim.
    // Hər şeyini özüm etdim, yalnız aylar üst-üstə düşdüklərindən görsənmirdilər onda nə edəcəyimi bilmədim deyə videodan baxdım və sola doğru sürüşdürdüm. :)
    // !!! Good Job :)
    // !!! eger her birini ferqli etmnek isteseydin her bir planete object yaradib moon saylarini ferli vererdin
    // !!! daha sonra her bir obyektin moon sayini loop i ye menimsetdikden sonra create element logic i onun icerisine daxil ede bilersen

    let moon = ['moon1', 'moon2']
    for (let i = 0; i < moon.length; i++){
      let moonDiv = document.createElement('div');
      moonDiv.classList.add('moon');
      createDiv.appendChild(moonDiv);
      moonDiv.style.left = i * 15 +'px';
      console.log(moonDiv); 
    }

  } 

 

  



  

 
  