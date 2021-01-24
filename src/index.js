import readlineSync from 'readline-sync';
import getGameEvenResult from './games/even/evenGameLogic.js';
import getGameCalcResult from './games/calc/calcGameLogic.js';
import getGameGCDResult from './games/gcd/gcdGameLogic.js';

export default (gameType) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync
    .question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (gameType === 'even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }

  if (gameType === 'calc') {
    console.log('What is the result of the expression?');
  }

  if (gameType === 'gcd') {
    console.log('Find the greatest common divisor of given numbers.');
  }

  for (let i = 0; i < 3; i += 1) {
    let [correctAnswer, userAnswer] = ['', ''];

    if (gameType === 'even') {
      correctAnswer = getGameEvenResult();
    }

    if (gameType === 'calc') {
      correctAnswer = getGameCalcResult();
    }

    if (gameType === 'gcd') {
      correctAnswer = getGameGCDResult();
    }

    userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
