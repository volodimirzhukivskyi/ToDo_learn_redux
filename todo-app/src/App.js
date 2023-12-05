import './App.css';
import TodoContainer from './redux/containers/TodoContainer';
import AddTodoContainer from './redux/containers/AddTodoContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from './redux/selectors/selectors';
import { useEffect } from 'react';
import { fetchTodos } from './redux/actions/actions';

function App() {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);


  return (
    <div className="App">
      <AddTodoContainer />
      {todos?.map((todo) => {
        return <TodoContainer key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default App;
