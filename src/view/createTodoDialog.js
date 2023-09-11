import addListItem from "../controller/addListItem";
import loadLists from "./loadLists";

const createTodoDialog = (id) => {
    let oldDiag = document.querySelector("#create-todo-dialog");
    if(oldDiag !== null) {
        document.body.removeChild(oldDiag);
    }
    const dialog = document.createElement("dialog");
    const h1 = document.createElement("h1");
    const form = document.createElement("form")
    const name = document.createElement("input");
    const desc = document.createElement("input");
    const btn = document.createElement("input");
    dialog.id = "create-todo-dialog";
    name.type = "text";
    name.id = "name-input";
    form.appendChild(name);
    desc.type = "text";
    desc.id = "desc-input";
    form.appendChild(desc);
    form.appendChild(btn);
    btn.type = "submit";
    btn.value = "Submit";


    h1.innerText = "hello world";
    dialog.appendChild(h1);
    dialog.appendChild(form);

    btn.addEventListener("click", () => {
        addListItem(id, name.value, desc.value);
        loadLists();
    });


    return dialog;
}

export default createTodoDialog;