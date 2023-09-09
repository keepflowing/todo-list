const loadListItems = (list) => {
    let id = list[1];
    const currList = document.querySelector(`#l${id} .listContainer`);
    for (let i = 2; i < list.length; i++) {
        let div = document.createElement("div");
        div.innerText = list[i];
        currList.appendChild(div);
    }
}

export default loadListItems;