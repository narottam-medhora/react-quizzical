// * IMPORT HELPER FUNCTIONS
import answersArray from "../util/answersArray";
import formatData from "../util/formatData";

const url = "https://opentdb.com/api.php?amount=5";

export default function CheckAnswers({
  calculateScore,
  questions,
  setQuestions,
  selectedAnswers,
  setSelectedAnswers,
  checkAnswers,
  setCheckAnswers,
}) {
  // Define a function to start a new game
  function newGame() {
    // Reset the selected answers and flip the state
    // of checkAnswers
    setSelectedAnswers(answersArray());
    setCheckAnswers((prevState) => !prevState);

    // Fetch a new set of questions
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestions(formatData(data)))
      .catch((error) => console.error(error));
  }
  return (
    <button
      id="check-answers"
      onClick={() =>
        !checkAnswers ? calculateScore(questions, selectedAnswers) : newGame()
      }
    >
      {checkAnswers ? "Play again" : "Check answers"}
    </button>
  );
}
