import { ADD_TODO, CHANGE_COMPLETED, FETCH_DATA, REMOVE_TODO } from '../costants/constants';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});
export const changeCompleted = (id) => ({
  type: CHANGE_COMPLETED,
  payload: id,
});
export const fetchData = (data) => ({ type: FETCH_DATA, payload: data });
// export const =()=>({type:,payload:;})
// export const =()=>({type:,payload:;})
// export const =()=>({type:,payload:;})
export const fetchTodos = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
      if (!res.ok) throw new Error('Помилка сервера, спробуйте пізніше!');
      return res.json();
    })
    .then((data) => dispatch(fetchData(data)))
    .catch((error) => {
      console.error(error);
    });
};
