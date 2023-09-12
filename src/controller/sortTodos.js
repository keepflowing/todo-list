const sortTodos = (list) => {
    //console.log(list.todos);
    //alert("Doing it!")
    list.todos.sort((a,b) => a.dueDate - b.dueDate);
}

export default sortTodos;