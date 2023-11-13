const formData = document.getElementById('libform');
const inputNoun = document.getElementById('noun');
const inputAdj = document.getElementById('adjective');
const inputPerson = document.getElementById('person');
const inputVerb = document.getElementById('verb');
const inputPlace = document.getElementById('place');
const story = document.getElementById('story');
const shufflebtn=document.getElementById('shufflebtn')
const div = document.createElement('div');



function handleSubmit (event){
event.preventDefault();
  console.log(inputNoun)
  story.appendChild(div);
  
  if (inputNoun.value !=='' && 
  inputAdj.value !== '' && 
  inputPerson.value !== '' && 
  inputVerb.value !== '' &&
  inputPlace.value !== ''
  ){
    const textObj = [
      `Once upon a time there was ${inputAdj.value} ${inputNoun.value} called ${inputPerson.value}. ${inputPerson.value} liked always ${inputVerb.value} in the ${inputPlace.value}`,
      `I like ${inputNoun.value}. It is very ${inputAdj.value}. ${inputPerson.value} always go to ${inputPlace.value} and ${inputVerb.value} with it with interest.`,
      `This is a ${inputPlace.value}. It is ${inputAdj.value}. Every morning ${inputPerson.value} ${inputVerb.value} to the ${inputPlace.value}.`
     ]
     function changeText(){
      const num = Math.floor(Math.random() * (3 - 0));
      div.innerHTML = textObj[num]
     }
     div.innerHTML = textObj[0]
    shufflebtn.addEventListener('click',changeText)
  } else{
    alert('fill the gap')
  }

}

formData?.addEventListener('submit',handleSubmit);
