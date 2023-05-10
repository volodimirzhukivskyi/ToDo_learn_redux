import React from 'react';
import {useState} from "react"

export function AddToDo({setTodos}) {
    const [value, setValue] = useState('');
    console.log(value)
    return (
        <>
            <input value={value} onChange={(e) => {setValue(e.target.value)}} type='text' />
            <button onClick={()=> {
                setTodos(prev => [...prev, {name:value}])
                setValue("")
            }}>Add Todo</button>
        </>
    );
}
