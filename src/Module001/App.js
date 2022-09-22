import "./App.css";
import People from "./People";
import Animal from "./Animal";
import AddPeople from "./AddPeople";
import AddAnimal from "./AddAnimal";
import { useSettingsStore } from "./store";
import { useEffect } from "react";

function App() {
  const toggleDarkMode = useSettingsStore((state) => state.toggleDarkMode);
  const dark = useSettingsStore((state) => state.dark);

  useEffect(() => {
    if (dark) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="App">
      <button onClick={toggleDarkMode}>Toggle dark mode</button>
      <AddPeople />
      <People />
      and
      <AddAnimal />
      <Animal />
    </div>
  );
}

export default App;
