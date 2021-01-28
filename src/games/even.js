import getRandomIntNum from '../getRandomIntNum.js';
import runGameEngine from '../index.js';

const isEven = (number) => number % 2 === 0;

const getDataForGame = () => {
  const randomNum = getRandomIntNum(1, 100);
  const answer = isEven(randomNum) ? 'yes' : 'no';

  return [randomNum, answer];
};

export default () => runGameEngine('Answer "yes" if the number is even, otherwise answer "no"', getDataForGame);
