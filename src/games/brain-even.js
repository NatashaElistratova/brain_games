import {
  getRandomNumber,
  playGame,
} from '../index.js';

const isNumberEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const questionValue = getRandomNumber();
  const correctAnswer = isNumberEven(questionValue) ? 'yes' : 'no';

  return { questionValue, correctAnswer };
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  playGame(rules, getRoundData);
};
