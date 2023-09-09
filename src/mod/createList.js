const createList = () => {
    const currentList = JSON.parse(localStorage.getItem("lists"));
    let input = prompt("List name?")
    let id = Math.floor(Math.random() * 100000);
    if(currentList) {
        currentList.push([input, id]);
        let x = JSON.stringify(currentList);
        localStorage.setItem("lists", x);
    }
    else {
        let x = JSON.stringify([[input, id]]);
        localStorage.setItem("lists", x);
    }
}

export default createList;