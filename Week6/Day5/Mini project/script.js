const nameInput = document.getElementById('nameInput');
const description = document.getElementById('description');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const isCompleted = document.getElementById('isCompleted');



let submitb = document.querySelector('#submitbtn');


const arr = [];
function submit(event){
  event.preventDefault();

  let nameValue = nameInput.value;
  let descriptionValue = description.value;
  let startDateValue = startDate.value;
  let endDateValue = endDate.value;
  let isCompletedValue = isCompleted.checked;

  let todaysValue = endDate.defaultValue;


  // console.log(`Name: ${nameValue}`)
  // console.log(`Description: ${descriptionValue}`)
  // console.log(`Start_date: ${startDateValue}`)
  // console.log(`End_date: ${endDateValue}`)
  // console.log(`Done: ${isCompletedValue}`)
  

  const calcDayUntilToday = new Date(endDateValue).getTime() - new Date(todaysValue).getTime();
  const a = calcDayUntilToday / (1000 * 3600 * 24);

  let b1;
  if (startDateValue < todaysValue){
    const calcul1 = new Date(todaysValue).getTime() - new Date(startDateValue).getTime();
    b1 = calcul1 / (1000 * 3600 * 24) + a;
    console.log(b1)

  } else if (startDateValue > todaysValue){
    const calcul2 = new Date(startDateValue).getTime() - new Date(todaysValue).getTime();
    b1 = a - (calcul2 / (1000 * 3600 * 24));
  } else {
    b1 = 0;
  }
 
  object = {
    name: nameValue,
    description:descriptionValue,
    start_date: startDateValue,
    end_date: endDateValue,
    isCompleted: isCompletedValue,
    remaining_day: b1
  }
  
  arr.push(object)
  const convertobject = JSON.stringify(arr);
  localStorage.setItem('MyObj',convertobject)

  fetch()
}

submitb.addEventListener('click', submit)


let num = 0;

function fetch(){
  const obj = localStorage.getItem('MyObj');
  const convertObj = JSON.parse(obj);
  displayAlla(convertObj);
  console.log(convertObj);

  convertObj.sort(function(a, b){ return new Date(a.startDate) - new Date(b.startDate)})

  function displayAlla(convertObj){

    const div1 = document.createElement('div');
    div1.textContent = convertObj[num].name;
    console.log(div1)
    document.body.appendChild(div1);

    const div2 = document.createElement('div');
    div2.textContent = convertObj[num].description;
    document.body.appendChild(div2);

    const div3 = document.createElement('div');
    div3.textContent = convertObj[num].start_date;
    document.body.appendChild(div3);

    const div4 = document.createElement('div');
    div4.textContent = convertObj[num].end_date;
    document.body.appendChild(div4);

    const div5 = document.createElement('div');
    div5.textContent = convertObj[num].isCompleted;
    document.body.appendChild(div5);

    return num++;
  }
  }
  console.log(num)

