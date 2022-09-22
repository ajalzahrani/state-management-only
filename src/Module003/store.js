import create from "zustand";

const store = (set) => {
  return {
    students: [
      { id: "1", name: "Aaron Saunders", section: "advanced" },
      { id: "2", name: "Andrea Saunders", section: "beginners" },
      { id: "3", name: "Bill Smith", section: "beginners" },
      { id: "4", name: "John Chambers", section: "beginners" },
      { id: "5", name: "Joe Johnson", section: "advanced" },
    ],
    addStudent: (student) =>
      set((state) => {
        return {
          students: [
            {
              name: student.name,
              id: Math.random() * 100 + "",
              section: student.section,
            },
            ...state.students,
          ],
        };
      }),

    updateStudent: (student) =>
      set((state) => ({
        students: state.students.map((item) => {
          if (item.id === student.id) {
            return {
              ...item,
              name: student.name,
              sectoin: student.section,
            };
          } else {
            return item;
          }
        }),
      })),

    removeStudent: (id) =>
      set((state) => ({
        students: state.students.filter((student) => student.id !== id),
      })),
  };
};

const useStore = create(store);
export default useStore;
