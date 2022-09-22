import "./App.css";
import React from "react";
import PokemonFilter from "./PokemonFilter";
import PokemonInfo from "./PokemonInfo";
import PokemonTable from "./PokemonTable";

import { useStore } from "./store";

export default function App() {
  const pokemon = useStore(({ pokemon }) => pokemon);
  const setPokemon = useStore(({ setPokemon }) => setPokemon);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <div className="app">
      <h1>Pokemon Search</h1>
      <PokemonFilter />
      <PokemonTable />
    </div>
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

// const useStore = create((set) => ({
//   filter: "",
//   pokemon: [],
//   setFilter: (filter) =>
//     set((state) => ({
//       ...state,
//       filter,
//     })),
//   setPokemon: (pokemon) =>
//     set((state) => ({
//       ...state,
//       pokemon,
//     })),
// }));

// const FilterInput = () => {
//   const filter = useStore((state) => state.filter);
//   const setFilter = useStore((state) => state.setFilter);
//   return (
//     <input value={filter} onChange={(evt) => setFilter(evt.target.value)} />
//   );
// };
