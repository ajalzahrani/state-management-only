import { ExerciseData as exData } from "../database";

export const getExerciseName = (id) => {
  let exername = exData.filter((element) => {
    return element.id === id;
  });
  return exername[0].title;
};
