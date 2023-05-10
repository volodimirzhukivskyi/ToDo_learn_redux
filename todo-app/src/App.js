import './App.css';
import {AddToDo} from "./components/AppToDo";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState([])

    return (
        <div className="App">
            <AddToDo setTodos={setTodos}/>
            {todos?.map(({id,name}) => {
                return <div key={id}><label className={"todo-label"}><input type="checkbox"/>{item}</label>
                    <button onClick={() =>setTodos()}>X</button>
                </div>
            })}
        </div>
    );
}

export default App;
