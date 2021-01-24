import getRandomIntNum from '../../getRandomIntNum.js';
import getSortedPair from './getSortedPair.js';

export default () => {
  const firstNumber = getRandomIntNum(1, 100);
  const secondNumber = getRandomIntNum(1, 100);

  console.log(`Question: ${firstNumber} ${secondNumber}`);

  const numbers = getSortedPair(firstNumber, secondNumber);
  let gcd = 1;

  for (let i = 1; i <= numbers[0]; i += 1) {
    if (numbers[0] % i === 0 && numbers[1] % i === 0) {
      gcd = i;
    }
  }

  return gcd.toString();
};
