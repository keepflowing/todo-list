import { format } from "date-fns";

class Todo {
    constructor(title, description, priority, dueDate) {
        this.id = Math.floor(Math.random() * 100000);
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = Number(format(new Date(dueDate), 'yyyyMMdd'));
    }
}

export default Todo;