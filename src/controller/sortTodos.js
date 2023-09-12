const sortTodos = (list) => {
    list.todos.sort((a,b) => a.dueDate - b.dueDate);
}

export default sortTodos;