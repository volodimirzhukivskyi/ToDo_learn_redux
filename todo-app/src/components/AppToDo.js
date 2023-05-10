import React from 'react';
import {useState} from "react"

export function AddToDo({setTodos}) {
    const [value, setValue] = useState('');


    const addToDo =()=> {
        const newToDo = {
            id:new Date().toISOString(),
            name:value
        }
        if(value.trim()!==""){
            setTodos(prev => [...prev, newToDo])
            setValue("")
        }

    }

    return (
        <>
            <input value={value} onChange={(e) => {setValue(e.target.value)}} type='text' />
            <button onClick={addToDo}>Add Todo</button>
        </>
    );
}
