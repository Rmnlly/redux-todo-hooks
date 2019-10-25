import { combineReducers } from "redux";

import {
  VISIBILITY_FILTERS,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
} from "./actions";

const { SHOW_ALL } = VISIBILITY_FILTERS;
const initalTodoState = {
  allIds: [],
  byIds: []
};

//Here we break off todos into their own reducer function
//They only have a SLICE of the state to manage, this is reducer composition
function todos(state = initalTodoState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, text } = action.payload;
      return {
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            text,
            completed: false
          }
        }
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: {
      return action.payload.filter;
    }
    default:
      return state;
  }
};

//We rewrote this so that each reducer handles its own default state
//So we don't need an "intial state" object anymore, if nothing is
//passed in then these reducers will cecreate the intital state

// ## Where we set todosApp at the bottom is equivalent to what we defined below
// function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state, action),
//     todos: todos(state, action)
//   };
// }

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
