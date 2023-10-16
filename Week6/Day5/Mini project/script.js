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
    const b1 = calcDayUntilToday / (1000 * 3600 * 24);
 
  object = {
    name: nameValue,
    description:descriptionValue,
    start_date: startDateValue,
    end_date: endDateValue,
    isCompleted: isCompletedValue,
    todays_value: todaysValue,
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
  console.log(convertObj);
  displayAlla(convertObj);

  convertObj.sort(function(a, b){ return new Date(a.startDate) - new Date(b.startDate)})

 async function displayAlla(convertObj){

    const containerDiv = document.createElement('div');
    document.body.appendChild(containerDiv);


    const xbtn = document.createElement('button');
    xbtn.textContent = 'x';
    xbtn.className = 'xbnt';
    containerDiv.appendChild(xbtn);

    const editbtn = document.createElement('button');
    editbtn.textContent = 'Edit';
    containerDiv.appendChild(editbtn);

    function editable (){
      div1.contentEditable = 'true';
      div2contentEditable = 'true';
      div3.contentEditable = 'true';
      div4.contentEditable = 'true';
      div5.contentEditable = 'true';
      div6.contentEditable = 'true';
    }

    editbtn.addEventListener('click',editable)
    
    function deleteTask(){
      const result = confirm('Are you sure to delete this task?');
      if(result == true)
      document.body.removeChild(containerDiv);
    }

      xbtn.addEventListener('click', deleteTask);


     const div1 =await document.createElement('div'); 
    //  !!! await ?
    div1.textContent = `Name: ${convertObj[num].name}`;
  
    const div2 = document.createElement('div');
    div2.className = 'div22';
    div2.textContent = convertObj[0].description;
    containerDiv.appendChild(div2);

    function dropdown(){
      div2.style.padding = '5px 10px'
      div2.style.visibility = 'visible';
      div2.style.fontSize = '15px';
      div2.style.backgroundColor = 'lightblue';
      div2.style.transition = '0.5s';
    }

    await div1.addEventListener('click',dropdown)
    containerDiv.appendChild(div1);
   
     const div3 = document.createElement('div');
    div3.textContent = `Start time: ${convertObj[num].start_date}`;
    containerDiv.appendChild(div3);

    const div4 = document.createElement('div');
    div4.textContent = `End time: ${convertObj[num].end_date}`;
    containerDiv.appendChild(div4);

    const div5 = document.createElement('div');
    if(convertObj[num].isCompleted ==  false || new Date(convertObj[num].end_date).getTime() < new Date(convertObj[num].todays_value).getTime()){
      div5.textContent = 'Is not completed yet';
      containerDiv.style.backgroundColor = 'red'
      containerDiv.appendChild(div5);
      console.log()
    } else {
      div5.textContent = 'Completed';
      containerDiv.style.backgroundColor = 'green'
      containerDiv.appendChild(div5);
    }
    
    const div6 = document.createElement('div');
    div6.textContent = (`${convertObj[num].remaining_day} days remaining to complete the task.`);
    containerDiv.appendChild(div6);

    return num++;
  }
  }
  console.log(num)

// !!! working correctly but code structure is confusing