function getRandom (min, max) {
  if (min < 0 || max < 0 || min >= max) {
    return 'Диапазон может быть только положительный. Значение От не может превышать значение До';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandom (4, 15);

const photoComment = 'папа пошёл в магазин';
const maxCommentLength = 140;
function checkCommentLength (comment, maxLength) {
  if (comment.length > maxLength) {
    return 'Превышена максимальная длина сообщения';
  }
}
checkCommentLength (photoComment, maxCommentLength);
