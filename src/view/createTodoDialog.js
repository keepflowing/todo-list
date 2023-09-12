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
    const date = document.createElement("input");
    const prio = document.createElement("select");
    const btn = document.createElement("input");

    prio.innerHTML = `
    <option value="None">None</option>
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>`;

    dialog.id = "create-todo-dialog";
    
    name.type = "text";
    name.placeholder = "Title..."
    name.maxLength = 20;
    name.required = true;
    form.appendChild(name);
    
    desc.type = "text";
    desc.placeholder = "Description..."
    desc.maxLength = 30;
    form.appendChild(desc);
    
    date.type = "date";
    date.required = true;
    form.appendChild(date);
    
    let label = document.createElement("label");
    prio.id = "prio";
    label.for = "prio";
    label.innerText = "Priority:"
    form.appendChild(label);
    form.appendChild(prio);

    btn.type = "submit";
    btn.value = "Submit";
    form.appendChild(btn);


    h1.innerText = "Create Todo:";
    dialog.appendChild(h1);
    dialog.appendChild(form);

    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value.length > 0 && date.value !== "") {
            addListItem(id, name.value, desc.value, prio.value, date.value);
            loadLists();
            let diag = document.querySelector("#create-todo-dialog");
            document.body.removeChild(diag);
        }
    });


    return dialog;
}

export default createTodoDialog;