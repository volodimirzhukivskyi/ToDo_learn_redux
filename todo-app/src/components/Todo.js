
export const Todo = ({todo,removeTodo,changeCompleted}) => {
    const{id,name,completed}=todo

  
    return   <div ><input id={"myCheckbox"} type="checkbox" onChange={()=>changeCompleted(id)}/><label
        htmlFor="myCheckbox"
        className={completed ? "todo-label" : ""}>{name}</label>
        <button onClick={() =>removeTodo(id) }>X</button>
    </div>
}