import deleteListItem from "../controller/deleteListItem";

const loadListItems = (list, mode) => {
    let id = list.id;
    const listDOM = document.querySelector(`#l${id} .listContainer`);
    listDOM.innerHTML = "";
    for (let i = 0; i < list.todos.length; i++) {
        let div = document.createElement("div");
        div.classList.add("todo");
        let todo = list.todos[i];
        
        let prioDiv = document.createElement("div");
        prioDiv.classList.add("prio");
        if(todo.priority === "High") {
            prioDiv.classList.add("high");
        }
        else if (todo.priority === "Medium"){
            prioDiv.classList.add("medium");
        }
        else if (todo.priority === "Low"){
            prioDiv.classList.add("low");
        }
        else {
            prioDiv.classList.add("none");
        }

        let todoTop = document.createElement("div");
        let todoTitle = document.createElement("div");

        todoTop.classList.add("space-between-center");
        todoTitle.classList.add("space-between-center");

        div.appendChild(todoTop);
        todoTop.appendChild(todoTitle);
        todoTitle.appendChild(prioDiv);

        let h3 = document.createElement("h3");
        h3.innerText = todo.title;
        todoTitle.appendChild(h3);

        let p = document.createElement("p");
        let d = todo.dueDate.toString();
        p.innerText = `${d.slice(8,10)}.${d.slice(5,7)}.${d.slice(2,4)}`;
        todoTop.appendChild(p);

        let todoHidden = document.createElement("div");
        todoHidden.classList.add("todo-desc");
        todoHidden.classList.add("display-none");

        let midDiv = document.createElement("div");
        midDiv.classList.add("space-between-center");
        midDiv.innerHTML = `<p>${todo.description}</p>`;
        midDiv.innerHTML += `<p>${d.slice(11,16)}</p>`;

        todoHidden.appendChild(midDiv);

        let bottomDiv = document.createElement("div");
        bottomDiv.innerHTML = `<p>Priority: ${todo.priority}</p>`;

        if (mode === "lists") {
            let removeTodo = document.createElement("button");
            removeTodo.innerText = "Delete";
            removeTodo.id = "r" + id;
            removeTodo.addEventListener("click", () => {
                deleteListItem(list, todo.id);
                loadListItems(list, "lists");
            });
            bottomDiv.appendChild(removeTodo);
        }
        
        bottomDiv.classList.add("space-between-center");
        todoHidden.appendChild(bottomDiv);
        div.appendChild(todoHidden);

        div.addEventListener("click", () => {
            todoHidden.classList.toggle("display-none");
        });
        listDOM.appendChild(div);
    }
}

export default loadListItems;