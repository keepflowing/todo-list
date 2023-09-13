import deleteListItem from "../controller/deleteListItem";
import loadListItems from "./loadListItems";

const deleteTodoDialog = (list, todo) => {
    let oldDiag = document.querySelector("#delete-todo-dialog");
    if(oldDiag !== null) {
        document.body.removeChild(oldDiag);
    }
    const dialog = document.createElement("dialog");
    dialog.id = "delete-todo-dialog";
    const h1 = document.createElement("h1");
    dialog.appendChild(h1);

    h1.innerText = `Are you sure you want to delete todo "${todo.title}"?`;
    let div = document.createElement("div");
    div.classList.add("space-between-center");

    let yes = document.createElement("button");
    yes.innerText = "Yes";

    yes.addEventListener("click", () => {
        deleteListItem(list, todo.id);
        let oldDiag = document.querySelector("#delete-todo-dialog");
        document.body.removeChild(oldDiag);
        loadListItems(list, "lists");
    });

    let no = document.createElement("button");
    no.innerText = "No";

    no.addEventListener("click", () => {
        let oldDiag = document.querySelector("#delete-todo-dialog");
        document.body.removeChild(oldDiag);
    });

    div.appendChild(yes);
    div.appendChild(no);
    dialog.appendChild(div);
    
    return dialog;
}

export default deleteTodoDialog;