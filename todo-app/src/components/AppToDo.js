import React from 'react';
import {useState} from "react"

export function AddToDo({setTodos}) {
    const [value, setValue] = useState('');
    const newToDo = {
        id:new Date().toString(),
        name:value
    }
    return (
        <>
            <input value={value} onChange={(e) => {setValue(e.target.value)}} type='text' />
            <button onClick={()=> {
                setTodos(prev => [...prev, newToDo])
                setValue("")
            }}>Add Todo</button>
        </>
    );
}
