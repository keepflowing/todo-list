import renameList from "../controller/renameList";
import loadLists from "./loadLists";

const renameListDialog = (list) => {
    let oldDiag = document.querySelector("#rename-list-dialog");
    if(oldDiag !== null) {
        document.body.removeChild(oldDiag);
    }
    const dialog = document.createElement("dialog");
    const h1 = document.createElement("h1");
    const form = document.createElement("form")
    const name = document.createElement("input");
    const btn = document.createElement("input");
    dialog.id = "rename-list-dialog";

    name.type = "text";
    name.placeholder = "Title..."
    name.value = list.name;
    name.required = true;
    form.appendChild(name);
    form.appendChild(btn);
    btn.type = "submit";
    btn.value = "Submit";


    h1.innerText = "Rename List";
    dialog.appendChild(h1);
    dialog.appendChild(form);

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value.length > 0) {
            renameList(list.id, name.value);
            let diag = document.querySelector("#rename-list-dialog");
            document.body.removeChild(diag);
        }
    });


    return dialog;
}

export default renameListDialog;