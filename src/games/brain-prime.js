import {
  roundsQuantity,
  getRandomNumber,
  startGame,
  playRound,
} from '../index.js';

function calcResult(value) {
  return true;
}

function checkAnswer(userAnswer, correctAnswer) {
  return Number(userAnswer) === correctAnswer;
}

export default function brainPrimeGame() {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(rules);

  for (let i = 0; i < roundsQuantity; i++) {
    const number = getRandomNumber();
    const correctAnswer = calcResult(number);
    const result = playRound(i, number, correctAnswer, checkAnswer);

    if (!result) {
      return;
    }
  }
}
