export const getTodoList = store =>
  store && store.todos ? store.todos.allIds : [];

//So we do the {...store.todos.byIds[id], id} because we want to
//grab the todo from the lookup table, but we also want to spread
//the id into the return so we can use it later
export const getTodoById = (store, id) =>
  store && store.todos && store.todos.byIds
    ? { ...store.todos.byIds[id], id }
    : {};

//Here we combine both of the previous reducers to take
//the list of id's and use it to lookup/return all the todos
//into an array
export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));
