
let submitBtn =  document.getElementById('submitbtn');
const textInput = document.getElementById('textInput');
const listTasks = document.querySelector('.listTasks');

const tasks = [];
let id = 0;
let obj;

function doneTask(id){
  return function(event){
    console.log('rrrr',event.target.checked)
    console.log('rrrrtask',id)

    if(event.target.checked){
      const findTask = tasks.find(item=>item.id === id)
      findTask.done = true;
      const findingDiv = document.querySelector(`div[data-id='${id}']`)
      findingDiv.style.color = 'red';
      findingDiv.style.textDecoration = 'line-through';
      console.log('tasksdoneee', tasks)
    }
    else {
      const findTask = tasks.find(item=>item.id === id)
      findTask.done = false;
      const findingDiv = document.querySelector(`div[data-id='${id}']`)
      findingDiv.style.color = 'black';
      findingDiv.style.textDecoration = 'none';
      console.log('tasksnotdone', tasks)
    }
  }

}

function deleteTask(id){
  return function (event){
    const delDiv = document.querySelector(`div[data-id='${id}']`);
    listTasks.removeChild(delDiv);
    
  }
}

function addTask(e){
  e.preventDefault();
  if(textInput.value !== ''){
    const text = textInput.value;
    obj = createObj(text);
     tasks.push(obj);
     console.log('tasks',task)
     createNewDiv(task)

    }


     function createNewDiv(task){
        const div = document.createElement('div');
        const btn = document.createElement('button');
        const checkbox = document.createElement('input');
        const parag = document.createElement('p');

        listTasks.appendChild(div);
        div.appendChild(btn);
        div.appendChild(checkbox);
        div.appendChild(parag);

        checkbox.type = 'checkbox';
        btn.className = 'xbtn';
        div.className = 'miniDiv';
        btn.innerText = 'x';
        
        parag.innerHTML = task.text;
        listTasks.style.visibility = 'visible';
        div.dataset.id = task.id

        checkbox.addEventListener('change',doneTask(task.id));
        btn.addEventListener('click', deleteTask(task.id))
    }
}
let  task;
function createObj(text){
  task = {
        id: id,
        done: false,
        text: text
  }
  id++;
 return task;
}

submitBtn.addEventListener('click', addTask)