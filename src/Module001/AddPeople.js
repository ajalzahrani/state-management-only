import React, { useRef } from "react";
import { useStore } from "./store";

export default function AddPeople() {
  const addPerson = useStore((state) => state.addPerson);
  const inputRef = useRef();
  const add = () => {
    addPerson(inputRef.current.value);
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={add}>Add Person</button>
    </div>
  );
}
