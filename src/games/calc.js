import getRandomIntNum from '../getRandomIntNum.js';
import runGameEngine from '../index.js';

const calculateResult = (operation, num1, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const getGameData = () => {
  const firstNumber = getRandomIntNum(1, 100);
  const secondNumber = getRandomIntNum(1, 100);

  const operations = ['+', '-', '*'];
  const randomIndex = getRandomIntNum(0, operations.length);
  const randomOperation = operations[randomIndex];

  const question = `${firstNumber} ${randomOperation} ${secondNumber}`;
  const answer = calculateResult(randomOperation, firstNumber, secondNumber).toString();

  return [question, answer];
};

const description = 'What is the result of the expression?';

export default () => runGameEngine(description, getGameData);
