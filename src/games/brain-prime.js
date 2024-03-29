import {
  getRandomNumber,
  playGame,
} from '../index.js';

const isPrime = (value) => {
  if (value === 1) {
    return false;
  }

  if (value === 2) {
    return true;
  }

  for (let i = 2; i < Math.sqrt(value) + 1; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
};

const getRoundData = () => {
  const questionValue = getRandomNumber();
  const correctAnswer = isPrime(questionValue) ? 'yes' : 'no';

  return { questionValue, correctAnswer };
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  playGame(rules, getRoundData);
};
