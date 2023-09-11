import { getLocalStorage, setLocalStorage } from "../models/storage";
import Todo from "../models/todo";

const addListItem = (id, name, desc) => {
    let newTodo = new Todo(name, desc, "Low", 2024);
    let lists = getLocalStorage();
    for (let i in lists) {
        if (lists[i].id === id) {
            lists[i].todos.push(newTodo);
        }
    }
    setLocalStorage(lists);
}

export default addListItem;