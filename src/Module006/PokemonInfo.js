import React from "react";
import { useStore } from "./store";

export default function PokemonInfo() {
  const selectedPokemon = useStore((state) => state.selectedPokemon);
  return (
    <dvi>
      <h1>{selectedPokemon.name.japanese}</h1>
      <h2>{selectedPokemon.name.english}</h2>
      <table>
        <tbody>
          {Object.keys(selectedPokemon?.base ?? {}).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedPokemon?.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </dvi>
  );
}
