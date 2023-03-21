// * IMPORT STYLED COMPONENTS
import { StartPageContainer } from "../styles/style";

export default function StartPage({ setStartQuiz }) {
  // handleClick will change the state of startQuiz
  function handleClick() {
    setStartQuiz((prevState) => !prevState);
  }

  return (
    <StartPageContainer>
      <h1>Quizzical</h1>
      <p>Join us on a jolly good quiz, but don't be dim!</p>
      <button onClick={handleClick}>Start quiz</button>
      <Blobs />
    </StartPageContainer>
  );
}
