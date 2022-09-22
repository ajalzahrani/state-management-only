import "./App.css";
import React from "react";
import { useStore } from "./store";

export default function PokemonFilter() {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);
  return (
    <input
      className="Input"
      type="text"
      value={filter}
      onChange={(event) => setFilter(event.target.value)}
    />
  );
}
