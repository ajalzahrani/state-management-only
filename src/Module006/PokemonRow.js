import React from "react";
import Button from "@material-ui/core/Button";

export default function PokemonRow({ pokemon, onClick }) {
  return (
    <>
      <tr key={pokemon.id}>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(", ")}</td>
        <td>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onClick(pokemon)}
          >
            More Information
          </Button>
        </td>
      </tr>
    </>
  );
}
