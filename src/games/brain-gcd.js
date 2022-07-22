import {
  roundsQuantity,
  getRandomNumber,
  startGame,
  playRound,
} from '../index.js';

function calcResult(value1, value2) {
  const reminder = value1 % value2;

  if (reminder === 0) {
    return value2;
  } else {
    return calcResult(value2, reminder);
  }
}

function checkAnswer(userAnswer, correctAnswer) {
  return Number(userAnswer) === correctAnswer;
}

export default function brainProgression() {
  const rules = 'Find the greatest common divisor of given numbers.';
  startGame(rules);

  for (let i = 0; i < roundsQuantity; i++) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const graterNumber = Math.max(number1, number2);
    const lowerNumber = Math.min(number1, number2);
    const correctAnswer = calcResult(graterNumber, lowerNumber);
    const questionValue = `${number1} ${number2}`;
    const result = playRound(i, questionValue, correctAnswer, checkAnswer);

    if (!result) {
      return;
    }
  }
}
