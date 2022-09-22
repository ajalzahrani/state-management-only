import React from "react";
import { useStore } from "./store";
import PokemonRow from "./PokemonRow";

function PokemonTable() {
  const filteredPokemon = useStore((state) => state.filteredPokemon);
  const setSelectedPokemon = useStore((state) => state.setSelectedPokemon);

  const pokemon = useStore((state) => state.pokemon);
  const filter = useStore((state) => state.filter);

  return (
    <table width="100%">
      <tbody>
        {pokemon
          .filter(({ name: { english } }) =>
            english.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ id, name: { english }, type }) => (
            <PokemonRow
              key={pokemon.id}
              pokemon={pokemon}
              onClick={setSelectedPokemon}
            />
          ))}
        {/* {filteredPokemon.slice(0, 20).map((pokemon) => (
          <PokemonRow
            key={pokemon.id}
            pokemon={pokemon}
            onClick={setSelectedPokemon}
          />
        ))} */}
      </tbody>
    </table>
  );
}

// const PokemonTable = () => {
//   const pokemon = useStore((state) => state.pokemon);
//   const filter = useStore((state) => state.filter);

//   return (
//     <table width="100%">
//       <tbody>
//         {pokemon
//           .filter(({ name: { english } }) =>
//             english.toLowerCase().includes(filter.toLowerCase())
//           )
//           .map(({ id, name: { english }, type }) => (
//             <tr key={id}>
//               <td>{english}</td>
//               <td>{type.join(", ")}</td>
//             </tr>
//           ))}
//       </tbody>
//     </table>
//   );
// };

export default PokemonTable;
