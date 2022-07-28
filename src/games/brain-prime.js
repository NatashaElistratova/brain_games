import {
  getRandomNumber,
  playGame,
} from '../index.js';

function isPrime(value) {
  if (value < 2) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(value) + 1; i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
}

function getRoundData() {
  const questionValue = getRandomNumber();
  const correctAnswer = isPrime(questionValue) ? 'yes' : 'no';

  return { questionValue, correctAnswer };
}

export default function runBrainPrimeGame() {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  playGame(rules, getRoundData);
}
