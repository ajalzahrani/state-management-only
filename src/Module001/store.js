// main function of zustand
import create from "zustand";
import {
  devtools, // dev tools for redux tookkit for chrome extention.
  persist, // save data in user local device.
} from "zustand/middleware";

// store is function that takes states & functions as object propreties
let store = (set) => ({
  // here is the state
  animal: ["Dog", "Monkey"],
  people: ["John Doe", "Jane Doe"],
  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),
  addAnimal: (animal) =>
    set((state) => ({ animal: [...state.animal, animal] })),
});

let settingsStore = (set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
});

// Call the middleware
store = persist(store, { name: "user_data" });
settingsStore = persist(settingsStore, { name: "user_settings" });

// create store by using callback for the state
const useStore = create(store);
const useSettingsStore = create(settingsStore);

export { useStore, useSettingsStore };
