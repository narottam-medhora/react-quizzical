// * IMPORT IMAGES
import UpperBlob from "../assets/upper_blob.svg";
import LowerBlob from "../assets/lower_blob.svg";

// * IMPORT STYLED COMPONENTS
import { BlobsContainer } from "../styles/style";

export default function Blobs(props) {
  return (
    <BlobsContainer>
      <img className="upper-blob" src={UpperBlob}></img>
      <img className="lower-blob" src={LowerBlob}></img>
    </BlobsContainer>
  );
}
