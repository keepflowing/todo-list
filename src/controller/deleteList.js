import { getLocalStorage, setLocalStorage } from "../models/storage";

const deleteList = (id) => {
    let localStorage = getLocalStorage();
    for (let i in localStorage) {
        if (localStorage[i].id === id) {
            localStorage.splice(i, i+1);
            setLocalStorage(localStorage);
        }
    }
}

export default deleteList;