import create from "zustand";
import createUserSlice from "./slices/createUserSlice";
import creatPostSlice from "./slices/createPostSlice";

const useStore = create((set, get) => ({
  ...createUserSlice(set, get),
  ...creatPostSlice(set, get),
}));

// Preload store with setState
// useStore.setState({ users: [{ id: 1, name: "Salem" }] });

export default useStore;
