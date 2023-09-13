import deleteList from "../controller/deleteList";
import loadLists from "./loadLists";

const deleteListDialog = (list) => {
    let oldDiag = document.querySelector("#delete-list-dialog");
    if(oldDiag !== null) {
        document.body.removeChild(oldDiag);
    }
    const dialog = document.createElement("dialog");
    dialog.id = "delete-list-dialog";
    const h1 = document.createElement("h1");
    dialog.appendChild(h1);

    h1.innerText = `Are you sure you want to delete list "${list.name}"?`;
    let div = document.createElement("div");
    div.classList.add("space-between-center");

    let yes = document.createElement("button");
    yes.innerText = "Yes";

    yes.addEventListener("click", () => {
        deleteList(list.id);
        let oldDiag = document.querySelector("#delete-list-dialog");
        document.body.removeChild(oldDiag);
        loadLists("lists");
    });

    let no = document.createElement("button");
    no.innerText = "No";

    no.addEventListener("click", () => {
        let oldDiag = document.querySelector("#delete-list-dialog");
        document.body.removeChild(oldDiag);
    });

    div.appendChild(yes);
    div.appendChild(no);
    dialog.appendChild(div);
    
    return dialog;
}

export default deleteListDialog;