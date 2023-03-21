// * IMPORT STYLED COMPONENTS
import { LoadingContainer } from "../styles/style";

export default function Loading(props) {
  return (
    <LoadingContainer>
      <div className="lds-dual-ring"></div>
      <p>Loading...</p>
    </LoadingContainer>
  );
}
