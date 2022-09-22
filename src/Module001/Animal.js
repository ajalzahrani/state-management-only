import React from "react";
import { useStore } from "./store";

export default function Animal() {
  const animal = useStore((state) => state.animal);
  return (
    <div>
      <p>We have {animal.length} animals in our DB</p>
      <ul>
        {animal.map((a) => {
          return <li>{a}</li>;
        })}
      </ul>
    </div>
  );
}
