import getRandomIntNum from '../getRandomIntNum.js';
import runGameEngine from '../index.js';

const getSortedPair = (number1, number2) => {
  let numbers = [];

  if (number1 < number2) {
    numbers = [number1, number2];
  } else {
    numbers = [number2, number1];
  }

  return numbers;
};

const getGCD = (number1, number2) => {
  const sortedNumbersPair = getSortedPair(number1, number2);
  let gcd = 1;

  for (let i = 2; i <= sortedNumbersPair[0]; i += 1) {
    if (sortedNumbersPair[0] % i === 0 && sortedNumbersPair[1] % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

const getDataForGame = () => {
  const firstNumber = getRandomIntNum(1, 100);
  const secondNumber = getRandomIntNum(1, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGCD(firstNumber, secondNumber);

  return [question, answer.toString()];
};

export default () => runGameEngine('Find the greatest common divisor of given numbers.', getDataForGame);
