const createListItem = () => {
    const currentList = JSON.parse(localStorage.getItem("lists"));
    let num = Math.random()
    if(currentList) {
        currentList.push([num]);
        let x = JSON.stringify(currentList);
        localStorage.setItem("lists", x);
    }
    else {
        let x = JSON.stringify([[num]]);
        localStorage.setItem("lists", x);
    }
}

export default createListItem;