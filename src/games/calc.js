import getRandomIntNum from '../getRandomIntNum.js';
import runGameEngine from '../index.js';

const getRandomElement = (elements) => {
  const randomIndex = getRandomIntNum(0, elements.length);

  return elements[randomIndex];
};

const calculateResult = (operation, num1, num2) => {
  let result = 0;

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      result = num1 * num2;
  }

  return result;
};

const getDataForGame = () => {
  const firstNumber = getRandomIntNum(1, 100);
  const secondNumber = getRandomIntNum(1, 100);
  const operations = ['+', '-', '*'];
  const randomOperation = getRandomElement(operations);

  const question = `${firstNumber} ${randomOperation} ${secondNumber}`;
  const answer = calculateResult(randomOperation, firstNumber, secondNumber).toString();

  return [question, answer];
};

export default () => runGameEngine('What is the result of the expression?', getDataForGame);
