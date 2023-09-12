import createList from "../controller/createList";
import loadLists from "./loadLists";

const createListDialog = () => {
    let oldDiag = document.querySelector("#create-list-dialog");
    if(oldDiag !== null) {
        document.body.removeChild(oldDiag);
    }
    const dialog = document.createElement("dialog");
    const h1 = document.createElement("h1");
    const form = document.createElement("form")
    const name = document.createElement("input");
    const btn = document.createElement("input");
    dialog.id = "create-list-dialog";

    name.type = "text";
    name.placeholder = "Title..."
    name.required = true;
    form.appendChild(name);
    form.appendChild(btn);
    btn.type = "submit";
    btn.value = "Submit";


    h1.innerText = "Create List";
    dialog.appendChild(h1);
    dialog.appendChild(form);

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value.length > 0) {
            createList(name.value);
            loadLists();
            let diag = document.querySelector("#create-list-dialog");
            document.body.removeChild(diag);
        }
    });


    return dialog;
}

export default createListDialog;