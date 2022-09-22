import create from "zustand";

let store = (set) => ({
  votes: 0,
  add: () => set((state) => ({ votes: state.votes + 1 })),
});

const useStore = create(store);

export default useStore;
