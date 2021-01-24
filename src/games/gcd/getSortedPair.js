export default (number1, number2) => {
  let numbers = [];

  if (number1 < number2) {
    numbers = [number1, number2];
  } else {
    numbers = [number2, number1];
  }

  return numbers;
};
