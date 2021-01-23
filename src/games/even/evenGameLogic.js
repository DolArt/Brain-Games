import readlineSync from 'readline-sync';
import isEven from './isNumberEven.js';
import getRandomIntNum from '../../getRandomIntNum.js';

export default () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomIntNum(1, 100);
    const correctAnswer = isEven(randomNum);

    console.log(`Question: ${randomNum}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);

      return 'defeat';
    }
  }

  return 'victory';
};
