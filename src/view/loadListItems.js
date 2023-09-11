const loadListItems = (list) => {
    let id = list.id;
    const listDOM = document.querySelector(`#l${id} .listContainer`);
    for (let i = 0; i < list.todos.length; i++) {
        let div = document.createElement("div");
        div.classList.add("todo");
        let todo = list.todos[i];
        div.innerHTML = `
        <h3>${todo.title}</h3>
        <p>${todo.description}</p>
        <p>${todo.dueDate}</p>
        <p>${todo.priority}</p>`
        listDOM.appendChild(div);
    }
}

export default loadListItems;