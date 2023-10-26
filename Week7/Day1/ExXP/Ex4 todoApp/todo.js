class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, complete: false });
    }

    markTaskComplete(task) {
        const foundTask = this.tasks.find(item => item.task === task);
        if (foundTask) {
            foundTask.complete = true;
        }
    }

    listTasks() {
        this.tasks.forEach(item => {
            const status = item.complete ? 'Complete' : 'Incomplete';
            console.log(`${item.task} - ${status}`);
        });
    }
}

export default TodoList;


// !!! solution