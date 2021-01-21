import readlineSync from 'readline-sync';
import isEven from './is-even.js';

export default () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.round(Math.random() * 125);
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
