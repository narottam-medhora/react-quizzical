export default function answersArray() {
  let arr = [];

  for (let index = 0; index < 5; index++) {
    arr.push({
      index: index,
      choice: "",
      isSelected: false,
    });
  }

  return arr;
}
