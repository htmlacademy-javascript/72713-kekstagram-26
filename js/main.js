function getRandom (min, max) {
  if (min < 0 || max < 0 || min >= max) {
    return -1;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandom (4, 15);

const photoComment = 'папа пошёл в магазин';
const maxCommentLength = 140;
function checkCommentLength (comment, maxLength) {
  return comment.length <= maxLength;
}
checkCommentLength (photoComment, maxCommentLength);
