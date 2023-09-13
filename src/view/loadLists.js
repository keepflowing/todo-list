import { getLocalStorage } from "../models/storage";
import loadListItems from "./loadListItems";
import createTodoDialog from "./createTodoDialog";
import deleteListDialog from "./deleteListDialog";
import generateHomeList from "../controller/generateHomeList";
import renameListDialog from "./renameListDialog";

const loadLists = (mode) => {
    let list = [];
    if (mode === "home") {
        list = generateHomeList();
    }
    else {
        mode = "lists";
        list = getLocalStorage();
        if (list === null) {
            list = [];
        }
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

        if (mode === "lists") {
            let btn = document.createElement("button");
            btn.classList = "add-list-item"
            btn.innerText = "+";
    
            btn.addEventListener("click", () => {
                let dialog = createTodoDialog(currList);
                document.body.appendChild(dialog);
                dialog.showModal();
            })
    
            topDiv.append(btn);

            let botDiv = document.createElement("div");
            botDiv.classList.add("space-between-center")

            let rename = document.createElement("p");
            rename.innerText = "Rename list";
            rename.classList.add("rename-list");
            rename.addEventListener("click", () => {
                let renameDiag = renameListDialog(currList);
                document.body.appendChild(renameDiag);
                renameDiag.showModal();
            });
            botDiv.appendChild(rename);
    
            let deleteListP = document.createElement("p");
            deleteListP.classList.add("delete-list");
            deleteListP.innerText = "Delete list";
    
            deleteListP.addEventListener("click", () => {
                let deleteListDiag = deleteListDialog(currList);
                document.body.append(deleteListDiag);
                deleteListDiag.showModal();
            });
    
            botDiv.appendChild(deleteListP);
            column.appendChild(botDiv);
        }

        content.appendChild(column);

        loadListItems(currList, mode);
    }
}

export default loadLists;