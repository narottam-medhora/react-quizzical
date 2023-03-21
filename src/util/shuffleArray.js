export default function shuffleArray(arr) {
  let currentIndex = arr.length;
  let randomIndex;

  // While there are elements left to shuffle
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap the element at the random index with the element
    // and the current index
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
}
