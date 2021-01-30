import getRandomIntNum from '../getRandomIntNum.js';
import runGameEngine from '../index.js';

const getGCD = (num1, num2) => ((!num2) ? num1 : getGCD(num2, num1 % num2));

const getGameData = () => {
  const firstNumber = getRandomIntNum(1, 100);
  const secondNumber = getRandomIntNum(1, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGCD(firstNumber, secondNumber).toString();

  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => runGameEngine(description, getGameData);
