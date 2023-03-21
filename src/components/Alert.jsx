// * IMPORT STYLED COMPONENTS
import { AlertContainer } from "../styles/style";

export default function Alert({ showAlert, setShowAlert }) {
  let styles = {
    display: showAlert ? "flex" : "none",
  };
  return (
    <AlertContainer style={styles}>
      <p>You haven't answered all of the questions!</p>
      <button onClick={() => setShowAlert((prevState) => !prevState)}>
        Close
      </button>
    </AlertContainer>
  );
}
