
class Todolist {
  constructor(){
    this.tasks = [];
  }
  change(task){
     this.tasks.push({task, completed: false})
}
completed(task){
  const findTask = this.tasks.find(item=>item.task === task)
  if(findTask){
    findTask.completed = true;
  }
}
list(){
  return this.tasks
}
}

export default Todolist;