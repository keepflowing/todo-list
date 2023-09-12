import { getLocalStorage } from "../models/storage";
import loadListItems from "./loadListItems";
import createTodoDialog from "./createTodoDialog";
import deleteList from "../controller/deleteList";

const loadLists = () => {
    let list = getLocalStorage();
    if (list === null) {
        list = []
    }
    content.innerHTML = "";
    content.scroll(0,0);
    for (let i = 0; i < list.length; i++) {
        let currList = list[i];
        let column = document.createElement("div");
        column.classList.add("column");
        column.id = "l" + currList.id;
        let topDiv = document.createElement("div");
        topDiv.classList.add("space-between-center");
        let h2 = document.createElement("h2");
        h2.innerText = currList.name;
        topDiv.appendChild(h2);
        column.appendChild(topDiv);

        let listsDiv = document.createElement("div");
        listsDiv.classList.add("listContainer");

        column.append(listsDiv);

        let btn = document.createElement("button");
        btn.classList = "add-list-item"
        btn.innerText = "+";

        btn.addEventListener("click", () => {
            let dialog = createTodoDialog(currList.id);
            document.body.appendChild(dialog);
            dialog.showModal();
        })

        topDiv.append(btn);

        let deleteListP = document.createElement("p");
        deleteListP.classList.add("delete-list");
        deleteListP.innerText = "Delete list";

        deleteListP.addEventListener("click", () => {
            deleteList(currList.id);
            loadLists();
        });

        column.appendChild(deleteListP);

        content.appendChild(column);

        loadListItems(currList);
    }
}

export default loadLists;