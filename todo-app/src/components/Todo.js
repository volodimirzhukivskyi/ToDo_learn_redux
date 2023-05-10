import {useState} from "react";

export const Todo = ({setTodos,todo}) => {
    const [checkbox, setCheckbox] = useState(false)
    const{id,name}=todo
    const handleCheckbox = () => {
        setCheckbox(prevState => !prevState)
    }
  return   <div ><input id={"myCheckbox"} type="checkbox" onChange={handleCheckbox}/><label
        htmlFor="myCheckbox"
        className={checkbox ? "todo-label" : ""}>{name}</label>
        <button onClick={() => setTodos(prev => prev.filter(todo => todo.id !== id))}>X</button>
    </div>
}