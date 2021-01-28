import getRandomIntNum from '../getRandomIntNum.js';
import runGameEngine from '../index.js';

const isPrime = (number) => {
  const half = Math.ceil(number / 2);

  for (let i = 2; i <= half; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getDataForGame = () => {
  const randomNum = getRandomIntNum(2, 100);

  const answer = isPrime(randomNum) ? 'yes' : 'no';

  return [randomNum, answer];
};

export default () => runGameEngine('Answer "yes" if given number is prime. Otherwise answer "no".', getDataForGame);
