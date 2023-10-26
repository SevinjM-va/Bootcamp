import TodoList from './todo.js';

const todoList = new TodoList();

todoList.addTask('Buy groceries');
todoList.addTask('Go for a run');
todoList.addTask('Read a book');

todoList.markTaskComplete('Go for a run');

console.log('All tasks:');
todoList.listTasks();

// !!! solution
