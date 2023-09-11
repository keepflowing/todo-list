import Todo from "./todo";

export default class List {
    constructor(name) {
        this.id = Math.floor(Math.random() * 100000);
        this.name = name;
        this.todos = [];
    }
    
    add_todo(todo) {
        if(!(todo instanceof Todo)) {
            throw new TypeError("The object is not of class Todo!")
        }
        this.todos.push(todo);
    }
}