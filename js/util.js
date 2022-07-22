const getRandom = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return -1;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


const checkCommentLength = (comment, maxLength) => comment.length <= maxLength;


const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];

export {getRandom, getRandomArrayElement,checkCommentLength};
