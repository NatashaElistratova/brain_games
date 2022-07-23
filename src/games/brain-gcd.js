import {
  getRandomNumber,
  playGame,
} from '../index.js';

let number1;
let number2;

function calcResult(value1, value2) {
  const reminder = value1 % value2;

  if (reminder === 0) {
    return value2;
  } else {
    return calcResult(value2, reminder);
  }
}

function createQuestionValue() {
  number1 = getRandomNumber();
  number2 = getRandomNumber();

  return `${number1} ${number2}`;
}

function calcCorrectAnswer() {
  const graterNumber = Math.max(number1, number2);
  const lowerNumber = Math.min(number1, number2);

  return calcResult(graterNumber, lowerNumber);
}

function checkAnswer(userAnswer, correctAnswer) {
  return Number(userAnswer) === correctAnswer;
}

export default function brainProgression() {
  const rules = 'Find the greatest common divisor of given numbers.';

  playGame(rules, createQuestionValue, calcCorrectAnswer, checkAnswer);
}
