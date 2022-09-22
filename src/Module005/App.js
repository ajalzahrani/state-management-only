import React, { useEffect } from "react";
import { useStoreExercise, useStoreWeekDays, useStoreWorkout } from "./store";
// import { getExerciseName } from "./shared";f

export default function App() {
  const dayObject = useStoreWeekDays((state) => state.dayObject);
  const setWorkoutObject = useStoreWorkout((state) => state.setWorkoutObject);
  const workoutObject = useStoreWorkout((state) => state.workoutObject);
  const getExerciseName = useStoreExercise((state) => state.getExerciseName);
  setWorkoutObject(dayObject.workout[0]);

  // useEffect(() => {
  //   setWorkoutObject(dayObject.workout[0]);
  // }, []);
  // console.log(workoutObject);

  return (
    <div>
      <div>{dayObject.day}</div>
      <div>{workoutObject?.title}</div>
      {workoutObject?.exercises.map((exer) => {
        return <li>{getExerciseName(exer.id)}</li>;
      })}
    </div>
  );
}
