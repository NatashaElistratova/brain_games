import {
  roundsQuantity,
  getRandomNumber,
  startGame,
  playRound,
} from '../index.js';

function calcResult(value) {
  if (value === 1) {
    return false;
  } else if (value === 2) {
    return true;
  } else {
    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer.toLowerCase() === correctAnswer;
}

export default function brainPrimeGame() {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(rules);

  for (let i = 0; i < roundsQuantity; i++) {
    const number = getRandomNumber();
    const correctAnswer = calcResult(number) ? 'yes' : 'no';
    const result = playRound(i, number, correctAnswer, checkAnswer);

    if (!result) {
      return;
    }
  }
}
