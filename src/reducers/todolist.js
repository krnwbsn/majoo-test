const todolist = (state = [], action) => {
    switch(action.type) {
        case 'LOAD_TODO_SUCCESS':
            return action.todolist.map((item, index) => {
                return {id: item.id, title: item.title, description: item.description, status: item.status, createdAt: item.createdAt}
            })
            default:
                return state;
    }
}

export default todolist;