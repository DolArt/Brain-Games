import getRandomIntNum from '../../getRandomIntNum.js';
import getRandomElement from './getRandomElement.js';

export default () => {
  const firstNumber = getRandomIntNum(1, 100);
  const secondNumber = getRandomIntNum(1, 100);
  const operation = getRandomElement(['+', '-', '*']);

  console.log(`Question: ${firstNumber} ${operation} ${secondNumber}`);

  let correctAnswer = 0;

  if (operation === '+') {
    correctAnswer = firstNumber + secondNumber;
  }
  if (operation === '-') {
    correctAnswer = firstNumber - secondNumber;
  }
  if (operation === '*') {
    correctAnswer = firstNumber * secondNumber;
  }

  return correctAnswer.toString();
};
