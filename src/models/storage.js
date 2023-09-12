const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("lists"));
}

const setLocalStorage = (list) => {
    let listStr = JSON.stringify(list);
    localStorage.setItem("lists", listStr);
}

export { getLocalStorage, setLocalStorage };