const createList = () => {
    const currentList = JSON.parse(localStorage.getItem("lists"));
    let num = Math.random();
    let input = prompt("List name?")
    if(currentList) {
        //currentList.push([num]);
        currentList.push([input]);
        let x = JSON.stringify(currentList);
        localStorage.setItem("lists", x);
    }
    else {
        let x = JSON.stringify([[input]]);
        localStorage.setItem("lists", x);
    }
}

export default createList;