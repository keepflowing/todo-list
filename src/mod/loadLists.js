import loadListItems from "./loadListItems";
import addListItem from "./addListItem";

const loadLists = (list) => {
    content.innerHTML = "";
    content.scroll(0,0);
    for (let i = 0; i < list.length; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        column.id = "l" + list[i][1];
        let h2 = document.createElement("h2");
        h2.innerText = list[i][0];
        column.appendChild(h2);

        let listsDiv = document.createElement("div");
        listsDiv.classList.add("listContainer");

        column.append(listsDiv);

        let btn = document.createElement("button");
        btn.classList = "add-list-item"
        btn.innerText = "+";

        btn.addEventListener("click", () => {
            addListItem(list[i][1]);
            let x = JSON.parse(localStorage.getItem("lists"));
            loadLists(x);
        })

        column.append(btn);

        content.appendChild(column);

        loadListItems(list[i]);
    }
}

export default loadLists;