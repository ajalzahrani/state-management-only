import "./App.css";
import React from "react";
import useStore from "./store";

export default function App() {
  const votes = useStore((state) => state.votes);
  const add = useStore((state) => state.add);

  const vote = () => {
    add();
  };
  return (
    <div className="container">
      <div className="display-vote">Hello, they voted: {votes}</div>
      <div className="contorl-vote">
        <h3>Vote here: </h3>
        <button onClick={vote}>Vote</button>
      </div>
    </div>
  );
}
