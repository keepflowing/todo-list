const loadLists = (list) => {
    content.innerHTML = "";
    content.scroll(0,0);
    for (let i = 0; i < list.length; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        let h2 = document.createElement("h2");
        h2.innerText = list[i];
        column.appendChild(h2);

        let div = document.createElement("div");
        div.innerText = "+";

        column.append(div);

        content.appendChild(column);
    }
}

export default loadLists;