import React from "react";
import { useState } from "react";

export function AddToDo(props) {
  const { addToDo } = props;
  const [value, setValue] = useState("");
  const addToDoFunc = (value) => {
    const newToDo = {
      id: new Date().toISOString(),
      title: value,
      completed: false,
    };
    if (value.trim() !== "") {
      addToDo(newToDo);
      setValue("");
    }
  };

  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
      />
      <button onClick={() => addToDoFunc(value)}>Add Todo</button>
    </>
  );
}
