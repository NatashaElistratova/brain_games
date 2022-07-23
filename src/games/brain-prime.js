import {
  getRandomNumber,
  playGame,
} from '../index.js';

function calcResult(value) {
  if (value < 2) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(value); i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
}

function calcCorrectAnswer(value) {
  return calcResult(value) ? 'yes' : 'no';
}

function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer.toLowerCase() === correctAnswer;
}

export default function brainPrimeGame() {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  playGame(rules, getRandomNumber, calcCorrectAnswer, checkAnswer);
}
