import { getLocalStorage, setLocalStorage } from "../models/storage";
import List from "../models/list";

const createList = (name) => {
    const lists = getLocalStorage();
    let newList = new List(name);
    if(lists) {
        lists.push(newList);
        setLocalStorage(lists);
    }
    else {
        let list = [newList];
        setLocalStorage(list);
    }
}

export default createList;