const sortTodos = (list) => {
    list.todos.sort(function compare(a, b) {
        var dateA = new Date(a.dueDate);
        var dateB = new Date(b.dueDate);
        return dateA - dateB;
      });
}

export default sortTodos;