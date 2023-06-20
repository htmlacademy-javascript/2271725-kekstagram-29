const checkStringLength = (str, max) => str.length <= max;

console.log('checkStringLength');
console.log(checkStringLength('Сложное обучение', 18));
console.log(checkStringLength('Сложное обучение', 16));
console.log(checkStringLength('Сложное обучение', 10));

const checkPalindrome = (str) => {
  const string = str.toLowerCase().replace(/ /g, '');
  const reversedStr = string.split('').reverse().join('');

  return string === reversedStr;
};

console.log('checkPalindrome');
console.log(checkPalindrome('топот'));
console.log(checkPalindrome('Довод'));
console.log(checkPalindrome('Кекс'));
console.log(checkPalindrome('Лёша на полке клопа нашёл '));


const getNun = (str) => {
  let result = '';
  const string = str.toString().split('');
  const parseInt = (el) => +el;

  string.forEach((item) => {
    if (!Number.isNaN(parseInt(item))) {
      result = result + item;
    }
  });

  return +result !== 0 ? +result : NaN;
};

console.log('getNan');
console.log(getNun('2018 год'));
console.log(getNun('ECMAScript2021'));
console.log(getNun('1 кефир, 0.5 батона'));
console.log(getNun('ваз 006'));
console.log(getNun('а я томат'));
console.log(getNun(2023));
console.log(getNun(-1));
console.log(getNun(1.5));
