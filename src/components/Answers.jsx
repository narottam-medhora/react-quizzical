// * IMPORT HELPER LIBARIES
import he from "he";

export default function Answers({
  questionIndex,
  questions,
  answer,
  selectAnswer,
  selectedAnswers,
  checkAnswers,
}) {
  // Define a variable to store the styles
  let styles;

  // let isAnswerSelected = selectedAnswers.some((obj) => obj.choice === answer);
  let isAnswerSelected = selectedAnswers[questionIndex].choice === answer;

  if (!checkAnswers) {
    styles = {
      backgroundColor: isAnswerSelected ? "#D6D8F5" : "none",
      filter: isAnswerSelected
        ? "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        : "none",
    };
  } else {
    let isCorrectAnswer =
      answer === he.decode(questions[questionIndex].correct_answer);

    if (isCorrectAnswer && isAnswerSelected) {
      styles = {
        backgroundColor: "#94D7A2",
        filter: "none",
      };
    }

    if (!isCorrectAnswer && isAnswerSelected) {
      styles = {
        backgroundColor: "#F8BCBC",
      };
    }

    if (isCorrectAnswer && !isAnswerSelected) {
      styles = {
        backgroundColor: "rgba(0, 173, 181, 0.5)",
        color: "#222831",
      };
    }
  }

  return (
    <button onClick={selectAnswer} value={answer} style={styles}>
      {answer}
    </button>
  );
}
