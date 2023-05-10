import './App.css';
import {AddToDo} from "./components/AppToDo";
import {useState} from "react";
import {Todo} from "./components/Todo";

function App() {
    const [todos, setTodos] = useState([{id: 1, name: "Petya"}])


    return (
        <div className="App">
            <AddToDo setTodos={setTodos}/>
            {todos?.map((todo) => {
                return <Todo setTodos={setTodos} todo={todo}/>
            })}
        </div>
    );
}

export default App;
