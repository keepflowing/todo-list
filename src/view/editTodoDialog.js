import { getLocalStorage } from "../models/storage";
import loadListItems from "./loadListItems";
import editListItem from "../controller/editListItem";

const editTodoDialog = (list, todo) => {
    let oldDiag = document.querySelector("#edit-todo-dialog");
    if(oldDiag !== null) {
        document.body.removeChild(oldDiag);
    }
    const dialog = document.createElement("dialog");
    const h1 = document.createElement("h1");
    const form = document.createElement("form")
    const name = document.createElement("input");
    const desc = document.createElement("input");
    const date = document.createElement("input");
    const prio = document.createElement("select");
    const btn = document.createElement("input");

    prio.innerHTML = `
    <option value="None">None</option>
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>`;

    dialog.id = "edit-todo-dialog";
    
    name.type = "text";
    name.placeholder = "Title..."
    name.maxLength = 20;
    name.required = true;
    name.value = todo.title;
    form.appendChild(name);
    
    desc.type = "text";
    desc.placeholder = "Description..."
    desc.maxLength = 30;
    desc.value = todo.description;
    form.appendChild(desc);
    
    date.type = "datetime-local";
    date.required = true;
    date.value = todo.dueDate;
    form.appendChild(date);
    
    let label = document.createElement("label");
    prio.id = "prio";
    label.for = "prio";
    label.innerText = "Priority:"
    prio.value = todo.priority;
    form.appendChild(label);
    form.appendChild(prio);

    btn.type = "submit";
    btn.value = "Save";
    form.appendChild(btn);


    h1.innerText = "Edit Todo:";
    dialog.appendChild(h1);
    dialog.appendChild(form);

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value.length > 0 && date.value !== "") {
            editListItem(list.id, todo.id, name.value, desc.value, prio.value, date.value);
            let localStorage = getLocalStorage();
            //Find the list we're adding to
            for (let i in localStorage) {
                if(localStorage[i].id === list.id) {
                    list = localStorage[i];
                }
            }
            loadListItems(list, "lists");
            let diag = document.querySelector("#edit-todo-dialog");
            document.body.removeChild(diag);
        }
    });


    return dialog;
}

export default editTodoDialog;