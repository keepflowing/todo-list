import { getLocalStorage, setLocalStorage } from "../models/storage";
import Todo from "../models/todo";
import sortTodos from "./sortTodos";

const addListItem = (id, name, desc, prio, date) => {
    let newTodo = new Todo(name, desc, prio, date);
    let lists = getLocalStorage();
    for (let i in lists) {
        if (lists[i].id === id) {
            lists[i].todos.push(newTodo);
        }
        sortTodos(lists[i]);
    }
    setLocalStorage(lists);
}

export default addListItem;