import { getLocalStorage, setLocalStorage } from "../models/storage";

const addListToLocalStorage = (list) => {
    let localStorage = getLocalStorage();
    for (let i in localStorage) {
        if (localStorage[i].id === list.id) {
            localStorage[i].todos = list.todos;
        }
        setLocalStorage(localStorage);
    }
}

const deleteListItem = (list, id) => {
    for (let i in list.todos) {
        if (list.todos[i].id === id) {
            list.todos.splice(i,1);     
            addListToLocalStorage(list);
        }
    }
}

export default deleteListItem;