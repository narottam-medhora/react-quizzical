// * IMPORT HELPER FUNCTIONS
import shuffleArray from "./shuffleArray";
import { nanoid } from "nanoid";

export default function formatData(arr) {
  // Create an empty array to store all the answers
  let answersArr = [];

  // Create a new attribute for each question object that holds
  // all the answers
  let data = arr.results.map((obj, index) => ({
    ...obj,
    id: index,
    answers: shuffleArray(
      answersArr.concat(obj.incorrect_answers).concat(obj.correct_answer)
    ),
  }));

  return data;
}
