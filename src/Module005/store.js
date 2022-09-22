import create from "zustand";

import { wds, ExerciseData, WorkoutDataStructure } from "./database";
import { getDayLabel, getDayObject, getWorkoutObject } from "./shared";

let storeWeekdays = (set) => ({
  dayObject: wds.find((day) => {
    return day.day === getDayLabel();
  }),
});

let storeWorkout = (set) => ({
  workouts: WorkoutDataStructure,
  workoutObject: {},
  setWorkoutObject: (id) =>
    set((state) => (state.workoutObject = getWorkoutObject(id))),
});

let storeExercise = (set, get) => ({
  exercises: ExerciseData,
  setExercise: (exercise) =>
    set((state) => {
      state.exercises.push(exercise);
    }),

  getExerciseName: (id) =>
    get(() => {
      let exername = ExerciseData.filter((element) => {
        return element.id === id;
      });
      return exername[0].title;
    }),
});

let useStoreWeekDays = create(storeWeekdays);
let useStoreWorkout = create(storeWorkout);
let useStoreExercise = create(storeExercise);

export { useStoreWeekDays, useStoreWorkout, useStoreExercise };
