import getRandomIntNum from '../../getRandomIntNum.js';

export default () => {
  const firstNumber = getRandomIntNum(1, 100);
  const secondNumber = getRandomIntNum(1, 100);

  console.log(`Question: ${firstNumber} ${secondNumber}`);

  let numbers = [];
  if (firstNumber < secondNumber) {
    numbers = [firstNumber, secondNumber];
  } else {
    numbers = [secondNumber, firstNumber];
  }

  const getGCD = (numbers, gcd, index) => {
    if (index === numbers[0] + 1) {
      return gcd.toString();
    }

    if (numbers[0] % index === 0 && numbers[1] % index === 0) {
      gcd = index;
    }

    index += 1;

    return getGCD(numbers, gcd, index);
  };

  return getGCD(numbers, 1, 1).toString();
};
