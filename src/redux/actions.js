import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "./actionTypes";

//Some Constants
export const VISIBILITY_FILTERS = {
  SHOW_ALL: "all",
  SHOW_COMPLETED: "completed",
  SHOW_ACTIVE: "active"
};

let nextTodoId = 0;

//Action Creators
export const addTodo = text => ({
  type: ADD_TODO,
  payload: { id: nextTodoId++, text }
});

export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: { id } });

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: { filter }
});
