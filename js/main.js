const getRandom = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return -1;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandom (4, 15);

const photoComment = 'папа пошёл в магазин';
const maxCommentLength = 140;
const checkCommentLength = (comment, maxLength) => comment.length <= maxLength;
checkCommentLength (photoComment, maxCommentLength);

const NAMES = [
  'Space',
  'Jack',
  'Max',
  'Keks',
  'Denis',
  'Sveta',
  'Nick',
  'Dima',
  'Irina',
  'Zina',
];

const MESSAGE_SET = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION_SET = [
  'ВААААУ. Это шедевр!',
  'Ями-ями',
  'Фантастика!',
  'Долгожданный отдых:)',
  'Ну ничего так вид нас радовал',
];

const POST_NUMBERS = 25;
const minAvatar = 1;
const maxAvatar = 6;
const minLikes = 15;
const maxLikes = 200;
let postId = 0;
let commentId = 0;

const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];

const createComment = () => {
  commentId++;
  return {
    id: commentId,
    avatar: `img/avatar-${getRandom(minAvatar, maxAvatar)}.svg`,
    message: getRandomArrayElement(MESSAGE_SET),
    name: getRandomArrayElement(NAMES),
  };
};

const createPost = () => {
  postId++;
  return {
    id: postId,
    url: `photos/${postId}.jpg`,
    description: getRandomArrayElement(DESCRIPTION_SET),
    likes: getRandom(minLikes, maxLikes),
    comments: Array.from({length: getRandom(1, 4)}, createComment),
  };
};

const newPosts = Array.from({length: POST_NUMBERS}, createPost);


