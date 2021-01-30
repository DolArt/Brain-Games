import getRandomIntNum from '../getRandomIntNum.js';
import runGameEngine from '../index.js';

const getProgression = (firstElement, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(firstElement + i * step);
  }

  return progression;
};

const getGameData = () => {
  const progressionStep = getRandomIntNum(1, 31);
  const progressionFirstElement = getRandomIntNum(1, 71);
  const progressionLength = getRandomIntNum(5, 11);
  const progression = getProgression(progressionFirstElement, progressionStep, progressionLength);

  const missingElementIndex = getRandomIntNum(0, progressionLength);
  const answer = progression[missingElementIndex].toString();

  let progressionWithoutOneElement = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missingElementIndex) {
      progressionWithoutOneElement += '.. ';
    } else {
      progressionWithoutOneElement += `${progression[i]} `;
    }
  }

  return [progressionWithoutOneElement, answer];
};

export default () => runGameEngine('What number is missing in the progression?', getGameData);
