import readlineSync from 'readline-sync';

export default (gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync
    .question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameLogic);
  const gameRules = gameLogic[0];

  console.log(gameRules);

  for (let i = 0; i < 3; i += 1) {
    const runGame = gameLogic[1];

    const question = runGame[0];
    console.log(`Question: ${question}`);

    const answer = runGame[1].toString();
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
