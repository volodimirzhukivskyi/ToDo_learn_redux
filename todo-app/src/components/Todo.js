
export const Todo = ({todo,removeTodo,changeCompleted}) => {
    const{id,title,completed}=todo


    return   <div ><input id={"myCheckbox"} type="checkbox" onChange={()=>changeCompleted(id)}/><label
        htmlFor="myCheckbox"
        className={completed ? "todo-label" : ""}>{title}</label>
        <button onClick={() =>removeTodo(id) }>X</button>
    </div>
}