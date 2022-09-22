import React from "react";
import { useStore } from "./store";

export default function People() {
  const people = useStore((state) => state.people);
  return (
    <div>
      <p>We have {people.length} people in our DB</p>
      <ul>
        {people.map((p) => {
          return <li>{p}</li>;
        })}
      </ul>
    </div>
  );
}
