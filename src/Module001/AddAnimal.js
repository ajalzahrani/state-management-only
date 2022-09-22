import React, { useRef } from "react";
import { useStore } from "./store";

export default function AddAnimal() {
  const addAnimal = useStore((state) => state.addAnimal);
  const inputRef = useRef();
  const add = () => {
    addAnimal(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={add}>Add Animal</button>
    </div>
  );
}
