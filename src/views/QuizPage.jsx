// * IMPORT COMPONENTS
import Blobs from "../components/Blobs";
import Questions from "../components/Questions";
import Answers from "../components/Answers";
import Score from "../components/Score";
import CheckAnswers from "../components/CheckAnswers";
import Confetti from "react-confetti";

// * IMPORT LIBRARIES
import he from "he";
import { nanoid } from "nanoid";

// * IMPORT STYLED COMPONENTS
import {
  QuizPageContainer,
  QuestionContainer,
  AnswerContainer,
  ResultsContainer,
} from "../styles/style";

export default function QuizPage({
  questions,
  setQuestions,
  selectedAnswers,
  setSelectedAnswers,
  checkAnswers,
  setCheckAnswers,
  score,
  setScore,
  useData,
  dms,
}) {
  // * COMPONENT LOGIC
  // A function that stores the selected answers in state
  function selectAnswer(event, index) {
    setSelectedAnswers((prevState) =>
      prevState.map((obj) =>
        obj.index === index
          ? {
              ...obj,
              isSelected: !obj.isSelected,
              choice: event.target.value,
            }
          : obj
      )
    );
  }

  // A function that checks the chosen answers
  function calculateScore(questions, answers) {
    // Check that all questions have been attempted
    let areAllQuestionsAnswered = answers.map(
      (answer) => answer.choice.length > 0
    );

    // Check if all values are true
    let isQuizComplete = areAllQuestionsAnswered.every((bool) => bool === true);

    if (!isQuizComplete) {
      alert("You haven't answered all the questions!");
      return;
    } else {
      setCheckAnswers((prevState) => !prevState);

      // Calculate the score by comparing the answers
      let correctAnswers = selectedAnswers.map((obj, index) => {
        return obj.choice === he.decode(questions[index].correct_answer);
      });

      // Set the score
      setScore(correctAnswers.filter((d) => d === true).length);
    }
  }

  // * RENDER ELEMENTS
  const questionElements = questions.map((obj, questionIndex) => {
    let answerElements = obj.answers.map((answer) => (
      <Answers
        key={nanoid()}
        questionIndex={questionIndex}
        questions={questions}
        answer={he.decode(answer)}
        selectAnswer={(event) => selectAnswer(event, questionIndex)}
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
        checkAnswers={checkAnswers}
      />
    ));

    return (
      <QuestionContainer key={nanoid()}>
        <Questions question={he.decode(obj.question)} />
        <AnswerContainer>{answerElements}</AnswerContainer>
      </QuestionContainer>
    );
  });

  return (
    <QuizPageContainer>
      <Blobs />
      {questionElements}
      <ResultsContainer>
        {checkAnswers && <Score score={score} />}
        <CheckAnswers
          checkAnswers={checkAnswers}
          setCheckAnswers={setCheckAnswers}
          calculateScore={calculateScore}
          questions={questions}
          setQuestions={setQuestions}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          useData={useData}
        />
      </ResultsContainer>
      {checkAnswers && <Confetti width={dms.width} height={dms.height} />}
    </QuizPageContainer>
  );
}
