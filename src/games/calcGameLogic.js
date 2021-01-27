import getRandomIntNum from '../getRandomIntNum.js';

export default () => {
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

  const getGameResult = () => {
    const firstNumber = getRandomIntNum(1, 100);
    const secondNumber = getRandomIntNum(1, 100);
    const operations = ['+', '-', '*'];
    const randomOperation = getRandomElement(operations);

    const question = `${firstNumber} ${randomOperation} ${secondNumber}`;
    const result = calculateResult(randomOperation, firstNumber, secondNumber);

    return [question, result];
  };

  const gameRules = 'What is the result of the expression?';

  return [gameRules, getGameResult()];
};
