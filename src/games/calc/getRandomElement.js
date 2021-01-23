import getRandomIntNum from '../../getRandomIntNum.js';

export default (elements) => {
  const randomIndex = getRandomIntNum(0, elements.length);

  return elements[randomIndex];
};
