const addListItem = (id) => {
    let x = prompt("Item?");
    let list = JSON.parse(localStorage.getItem("lists"));
    for (let i in list) {
        if (list[i][1] === id) {
            list[i].push(x);
        }
    }
    let y = JSON.stringify(list);
    localStorage.setItem("lists", y);
}

export default addListItem;