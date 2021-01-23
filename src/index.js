import readlineSync from 'readline-sync';
import getGameEvenResult from './games/even/evenGameLogic.js';
import getGameCalcResult from './games/calc/calcGameLogic.js';

export default (gameType) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync
    .question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let gameResult = '';

  if (gameType === 'even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    gameResult = getGameEvenResult();
  }

  if (gameType === 'calc') {
    console.log('What is the result of the expression?');
    gameResult = getGameCalcResult();
  }

  if (gameResult === 'defeat') {
    console.log(`Let's try again, ${userName}!`);

    return;
  }

  console.log(`Congratulations, ${userName}!`);
};
