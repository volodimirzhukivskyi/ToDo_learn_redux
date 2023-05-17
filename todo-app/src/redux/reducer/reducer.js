import { ADD_TODO, CHANGE_COMPLETED, REMOVE_TODO } from "../costants/constants";

const INITIAL_STATE = {
  todos: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
case CHANGE_COMPLETED:
return {
    ...state,
    todos: state.todos.map(todo => {
            if(todo.id !== action.payload)return todo;
            return {...todo,completed:!todo.completed}
        })
}
    default:
      return state;
  }
};
