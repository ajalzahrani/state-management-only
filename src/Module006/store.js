import create from "zustand";

const POKEMON_URL =
  "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/0658aeff401d196dece7ec6fe6c726c6adc1cc00/gistfile1.txt";

const filterPokemon = (pokemon, filter) => {
  return pokemon.filter((item) => {
    return item.name.english.toLowerCase().includes(filter.toLowerCase());
  });
};

export const useStore = create((set) => ({
  pokemon: [],
  filter: "",
  filteredPokemon: [],
  selectedPokemon: null,
  setSelectedPokemon: (selectedPokemon) =>
    set((state) => ({
      ...state,
      selectedPokemon,
    })),
  setFilter: (filter) =>
    set((state) => ({
      ...state,
      filter,
      filteredPokemon: filterPokemon(state.pokemon, filter),
    })),
  setPokemon: (pokemon) =>
    set((state) => ({
      ...state,
      pokemon,
      filteredPokemon: pokemon,
    })),
}));

fetch(POKEMON_URL)
  .then((resp) => resp.json())
  .then((pokemon) =>
    useStore.setState((state) => ({
      ...state,
      pokemon,
    }))
  );
