import {
  getRandomNumber,
  playGame,
} from '../index.js';

function isNumberEven(number) {
  return number % 2 === 0;
}

function getRoundData() {
  const questionValue = getRandomNumber();
  const correctAnswer = isNumberEven(questionValue) ? 'yes' : 'no';

  return { questionValue, correctAnswer };
}

export default function runBrainEvenGame() {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  playGame(rules, getRoundData);
}
