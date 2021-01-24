import getRandomIntNum from '../../getRandomIntNum.js';

export default () => {
  const randomNum = getRandomIntNum(2, 100);

  console.log(`Question: ${randomNum}`);

  const randomNumHalf = Math.ceil(randomNum / 2);

  for (let i = 2; i <= randomNumHalf; i += 1) {
    if (randomNum % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};
