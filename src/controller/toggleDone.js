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

const toggleDone = (list, id) => {
    for (let i in list.todos) {
        if (list.todos[i].id === id) {
            list.todos[i].done === false ? list.todos[i].done = true 
            : list.todos[i].done = false;
            addListToLocalStorage(list);
        }
    }
}

export default toggleDone;