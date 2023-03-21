export default function Questions(props) {
  // Calculate spice rating
  const spiceRating =
    props.difficulty === "hard"
      ? "🌶🌶🌶"
      : props.difficulty === "medium"
      ? "🌶🌶"
      : "🌶";

  return (
    <div>
      <h1>{props.question}</h1>
      <p style={{ marginBlock: ".5rem" }}>Spice Rating: {spiceRating}</p>
    </div>
  );
}
