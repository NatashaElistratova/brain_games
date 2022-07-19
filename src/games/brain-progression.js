import {
  roundsQuantity,
  getRandomNumber,
  startGame,
  playRound,
} from '../index.js';

function calcResult(value1, value2) {
  // use Euclid's method
  let dividend = Math.max(value1, value2);
  let divisor = Math.min(value1, value2);
  let reminder = dividend % divisor;
  let result;

  while (reminder > 0) {
    reminder = dividend % divisor;
    if (reminder === 0) {
      result = divisor;
    }
    dividend = divisor;
    divisor = reminder;
  }

  return result;
}

function checkAnswer(userAnswer, correctAnswer) {
  return Number(userAnswer) === correctAnswer;
}

export default function brainGcdGame() {
  const rules = 'What number is missing in the progression?';
  startGame(rules);

  for (let i = 0; i < roundsQuantity; i++) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const correctAnswer = calcResult(number1, number2);
    const questionValue = `${number1} ${number2}`;
    const result = playRound(i, questionValue, correctAnswer, checkAnswer);

    if (!result) {
      return;
    }
  }
}
