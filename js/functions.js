const checkStringLength = (str, max) => str.length <= max;

const isLengthMatched1 = checkStringLength('Сложное обучение', 18);
console.log(isLengthMatched1);
const isLengthMatched2 = checkStringLength('Сложное обучение', 16);
console.log(isLengthMatched2);
const isLengthMatched3 = checkStringLength('Сложное обучение', 10);
console.log(isLengthMatched3);

const checkPalindrome = (str) => {
  const string = str.toLowerCase().replace(/ /g, '');
  const reversedStr = string.split('').reverse().join('');

  return string === reversedStr;
};

console.log('checkPalindrome');
console.log(checkPalindrome('шабаш'));
console.log(checkPalindrome('Учу'));
console.log(checkPalindrome('Текст'));
console.log(checkPalindrome('Лёша на той же полке конфеты нашёл'));


const getNun = (str) => {
  let result = '';
  const string = str.toString().split('');
  const parseInt = (el) => +el;

  string.forEach((item) => {
    if (!Number.isNaN(parseInt(item))) {
      result = result + item;
    }
  });

  return +result;
}

console.log('getNun');
console.log(getNun('2018 год'));
console.log(getNun('ECMAScript2021'));
console.log(getNun('2 хлеба, 0.8 молока'));
console.log(getNun('ваз 006'));
console.log(getNun('у меня автомобиль'));
console.log(getNun(2023));
console.log(getNun(-1));
console.log(getNun(1.5));
