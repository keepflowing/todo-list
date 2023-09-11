import { getLocalStorage, setLocalStorage } from "../models/storage";
import Todo from "../models/todo";

const addListItem = (id, name, desc, prio, date) => {
    let newTodo = new Todo(name, desc, prio, date);
    let lists = getLocalStorage();
    for (let i in lists) {
        if (lists[i].id === id) {
            lists[i].todos.push(newTodo);
        }
    }
    setLocalStorage(lists);
}

export default addListItem;