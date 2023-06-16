const DESCRIPTIONS  = [
  'круто',
  'шоколад',
  'вкусное',
  'машина',
  'действие',
  'зверь',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артём',
  'Дима',
  'Мария',
  'Алина',
  'Марк',
  'Нина',
  'Сергей',
  'Влад',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getMessage = () => COMMENTS[getRandomInteger(0, COMMENTS.length - 1)];

const generateComment = (_, i) => ({
  id: i,
  avatar : `img/avatar-${getRandomInteger(0, 6)}.svg`,
  message: Array.from({length:getRandomInteger(1, 2)}, getMessage).join(''),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const createPost = (i) => ({
  id: i,
  url: `photos/${i}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0,DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 30) }, generateComment),
});

function generateArrayOfObjects() {
  return Array.from({ length: 25 }, (_, i) => createPost(i + 1));
}

const arrayOfObjects = generateArrayOfObjects();
console.log(arrayOfObjects);
