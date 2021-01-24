import getRandomIntNum from '../../getRandomIntNum.js';

export default () => {
  const progressionStep = getRandomIntNum(1, 31);
  const progressionFirstElement = getRandomIntNum(1, 71);
  const progressionLength = 10;
  const progression = [progressionFirstElement];

  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progressionFirstElement + i * progressionStep);
  }

  const missingElementIndex = getRandomIntNum(0, progressionLength);
  const missingElement = progression[missingElementIndex];

  let progressionWithoutOneElement = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missingElementIndex) {
      progressionWithoutOneElement += '.. ';
    } else {
      progressionWithoutOneElement += `${progression[i]} `;
    }
  }

  console.log(`Question: ${progressionWithoutOneElement}`);

  return missingElement.toString();
};
