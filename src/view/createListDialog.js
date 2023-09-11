import createList from "../controller/createList";
import loadLists from "./loadLists";

const createListDialog = () => {
    const dialog = document.createElement("dialog");
    const h1 = document.createElement("h1");
    const form = document.createElement("form")
    const name = document.createElement("input");
    const btn = document.createElement("input");
    name.type = "text";
    name.id = "name-input";
    name.required = true;
    form.appendChild(name);
    form.appendChild(btn);
    btn.type = "submit";
    btn.value = "Submit";


    h1.innerText = "hello world";
    dialog.appendChild(h1);
    dialog.appendChild(form);

    btn.addEventListener("click", () => {
        if (name.value.length > 0) {
            createList(name.value);
            loadLists();
        }
    });


    return dialog;
}

export default createListDialog;