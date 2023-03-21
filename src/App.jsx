import React, { useState, useEffect } from "react";

// * IMPORT COMPONENTS
import StartPage from "./views/StartPage";
import QuizPage from "./views/QuizPage";
import Loading from "./components/Loading";

// * IMPORT STYLED COMPONENTS
import { AppContainer } from "./styles/style";

// * IMPORT HELPER FUNCTIONS
import formatData from "./util/formatData";
import answersArray from "./util/answersArray";

// * IMPORT IMAGES
import UpperBlob from "./assets/upper_blob.svg";
import LowerBlob from "./assets/lower_blob.svg";

// * IMPORT CUSTOM HOOKS
import useWindowSize from "./hooks/useWindowSize";

export default function App() {
  const [questions, setQuestions] = useState(null);
  const [startQuiz, setStartQuiz] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState(answersArray());
  const [checkAnswers, setCheckAnswers] = useState(false);
  const [score, setScore] = useState(null);
  let dms = useWindowSize();

  const url = "https://opentdb.com/api.php?amount=5";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestions(formatData(data)))
      .catch((error) => console.error(error));
  }, []);

  if (!questions) {
    return <Loading />;
  }

  // * SANITY CHECK
  // console.log({
  //   questions: questions,
  //   selectedAnswers: selectedAnswers,
  //   checkAnswers: checkAnswers,
  // });

  return (
    <AppContainer width={dms.width} height={dms.height}>
      {!startQuiz ? (
        <StartPage setStartQuiz={setStartQuiz} />
      ) : (
        <QuizPage
          questions={questions}
          setQuestions={setQuestions}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          checkAnswers={checkAnswers}
          setCheckAnswers={setCheckAnswers}
          score={score}
          setScore={setScore}
          dms={dms}
        />
      )}
      <img className="upper-blob" src={UpperBlob}></img>
      <img className="lower-blob" src={LowerBlob}></img>
    </AppContainer>
  );
}
