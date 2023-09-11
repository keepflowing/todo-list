import { getLocalStorage, setLocalStorage } from "../models/storage";
import List from "../models/list";

const createList = (name) => {
    const lists = getLocalStorage();
    if(lists) {
        let newList = new List(name);
        lists.push(newList);
        setLocalStorage(lists);
    }
    else {
        let newList = new List(name);
        let list = [newList];
        setLocalStorage(list);
    }
}

export default createList;