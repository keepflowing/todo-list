import { getLocalStorage, setLocalStorage } from "../models/storage";
import sortTodos from "./sortTodos";

const editListItem = (listId, todoId, name, desc, prio, date) => {
    let lists = getLocalStorage();
    for (let i in lists) {
        if (lists[i].id === listId) {
            for (let j in lists[i].todos) {
                if (lists[i].todos[j].id === todoId) {
                    lists[i].todos[j].title = name;
                    lists[i].todos[j].description = desc;
                    lists[i].todos[j].priority = prio;
                    lists[i].todos[j].dueDate = date;
                }
            } 
        }
        sortTodos(lists[i]);
    }
    setLocalStorage(lists);
}

export default editListItem;