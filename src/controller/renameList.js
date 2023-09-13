import { getLocalStorage, setLocalStorage } from "../models/storage";

const renameList = (id, name) => {
    let lists = getLocalStorage();
    for (let i in lists) {
        if (lists[i].id === id) {
            lists[i].name = name;
            document.querySelector(`#l${id} h2`).innerText = name;
        }
    }
    setLocalStorage(lists);
}

export default renameList;