import {
  getRandomNumber,
  playGame,
} from '../index.js';

const calcGcd = (value1, value2) => {
  const reminder = value1 % value2;

  if (reminder === 0) {
    return value2;
  }

  return calcGcd(value2, reminder);
};

function getRoundData() {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const questionValue = `${number1} ${number2}`;

  const graterNumber = Math.max(number1, number2);
  const lowerNumber = Math.min(number1, number2);
  const correctAnswer = calcGcd(graterNumber, lowerNumber);

  return { questionValue, correctAnswer };
}

export default function runBrainGcdGame() {
  const rules = 'Find the greatest common divisor of given numbers.';

  playGame(rules, getRoundData);
}
