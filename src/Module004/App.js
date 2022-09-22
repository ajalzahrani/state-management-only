import "./App.css";
import React, { useRef } from "react";
import create from "zustand";

let store = (set) => ({
  bear: [{ id: 545, name: "zus" }],
  addBear: (bear) => set((state) => ({ bear: [...state.bear, bear] })),

  updateBear: (newBear) =>
    set((state) => ({
      bear: state.bear.map((item) => {
        if (item.id === newBear.id) {
          return {
            ...item,
            name: newBear.name,
          };
        } else {
          return item;
        }
      }),
    })),

  deleteBear: (id) =>
    set((state) => ({
      bear: state.bear.filter((item) => {
        return item.id !== id;
      }),
    })),
});

const useStore = create(store);

export default function App() {
  const bear = useStore((state) => state.bear);
  const addBear = useStore((state) => state.addBear);
  const updateBear = useStore((state) => state.updateBear);
  const deleteBear = useStore((state) => state.deleteBear);

  const idRef = useRef();
  const nameRef = useRef();

  const makeupdate = () => {
    const newBear = {
      id: Number(idRef.current.value),
      name: nameRef.current.value,
    };
    updateBear(newBear);
  };

  const delBear = () => {
    deleteBear(Number(idRef.current.value));
  };

  return (
    <div className="">
      <button
        onClick={() => {
          addBear({
            id: Math.random() * 100,
            name: "tand " + Math.random(),
          });
        }}
      >
        Add bear
      </button>
      <input type="text" ref={idRef} />
      <input type="text" ref={nameRef} />
      <button onClick={makeupdate}>Update bear</button>
      <button onClick={delBear}>Delete bear</button>
      <div className="app">
        <ul>
          {bear.map((b) => {
            return (
              <li key={b.id}>
                {b.id} | {b.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
