import './App.css';
import TodoContainer from "./redux/containers/TodoContainer";
import AddTodoContainer from "./redux/containers/AddTodoContainer";
import { useSelector } from 'react-redux';
import { getTodos } from './redux/selectors/selectors';

function App() {
    const todos= useSelector(getTodos)


console.log(todos);
    return (
        <div className="App">
            <AddTodoContainer />
            {todos?.map((todo) => {
                return <TodoContainer key={todo.id} todo={todo}/>
            })}
        </div>
    );
}

export default App;
