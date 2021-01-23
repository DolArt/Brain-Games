import readlineSync from 'readline-sync';
import getRandomIntNum from '../../getRandomIntNum.js';
import getRandomElement from './getRandomElement.js';

export default () => {
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomIntNum(1, 100);
    const secondNumber = getRandomIntNum(1, 100);
    const operation = getRandomElement(['+', '-', '*']);
    console.log(operation);

    let correctAnswer = 0;

    if (operation === '+') {
      correctAnswer = firstNumber + secondNumber;
    }
    if (operation === '-') {
      correctAnswer = firstNumber - secondNumber;
    }
    if (operation === '*') {
      correctAnswer = firstNumber * secondNumber;
    }
    console.log(correctAnswer);
    console.log(`Question: ${firstNumber} ${operation} ${secondNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);

      return 'defeat';
    }
  }

  return 'victory';
};
