import readlineSync from 'readline-sync';
import getGameResult from './parity-game-logic.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync
    .question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const gameResult = getGameResult();

  if (gameResult === 'defeat') {
    console.log(`Let's try again, ${userName}!`);

    return;
  }

  console.log(`Congratulations, ${userName}!`);
};
