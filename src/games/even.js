import getRandomIntNum from '../getRandomIntNum.js';
import runGameEngine from '../index.js';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = getRandomIntNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

export default () => runGameEngine(description, getGameData);
