import getRandomIntNum from '../getRandomIntNum.js';
import runGameEngine from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const randomNum = getRandomIntNum(1, 100);

  const answer = isPrime(randomNum) ? 'yes' : 'no';

  return [randomNum, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => runGameEngine(description, getGameData);
