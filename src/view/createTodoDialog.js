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
    <option value="default">None</option>
    <option>Low</option>
    <option>Medium</option>
    <option>High</option>`;

    dialog.id = "create-todo-dialog";
    
    name.type = "text";
    name.placeholder = "Title..."
    form.appendChild(name);
    
    desc.type = "text";
    desc.placeholder = "Description..."
    form.appendChild(desc);
    
    date.type = "date";
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


    h1.innerText = "hello world";
    dialog.appendChild(h1);
    dialog.appendChild(form);

    btn.addEventListener("click", () => {
        addListItem(id, name.value, desc.value, date.value, prio.value);
        loadLists();
    });


    return dialog;
}

export default createTodoDialog;