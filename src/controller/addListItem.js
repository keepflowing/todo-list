import { getLocalStorage, setLocalStorage } from "../models/storage";
import Todo from "../models/todo";

const addListItem = (id) => {
    let x = prompt("Item?");
    let newTodo = new Todo(x, "My description", "Low", 2024);
    let lists = getLocalStorage();
    for (let i in lists) {
        if (lists[i].id === id) {
            lists[i].todos.push(newTodo);
        }
    }
    setLocalStorage(lists);
}

export default addListItem;