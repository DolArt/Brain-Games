import isEven from './isNumberEven.js';
import getRandomIntNum from '../../getRandomIntNum.js';

export default () => {
  const randomNum = getRandomIntNum(1, 100);

  console.log(`Question: ${randomNum}`);

  const correctAnswer = isEven(randomNum);

  return correctAnswer;
};
