export default class Todo {
    constructor(title, description, priority, dueDate) {
        this.id = Math.floor(Math.random() * 100000);
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.tasks = [];
        this.dueDate = dueDate;
    }
}