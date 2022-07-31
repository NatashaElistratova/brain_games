import {
  getRandomNumber,
  playGame,
} from '../index.js';

const calcGcd = (value1, value2) => {
  const reminder = value1 > value2 ? value1 % value2 : value2 % value1;

  return reminder === 0 ? value2 : calcGcd(value2, reminder);
};

const getRoundData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const questionValue = `${number1} ${number2}`;
  const correctAnswer = calcGcd(number1, number2);

  return { questionValue, correctAnswer };
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  playGame(rules, getRoundData);
};
