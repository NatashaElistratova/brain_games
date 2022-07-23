import {
  getRandomNumber,
  playGame,
} from '../index.js';

const operandValues = ['+', '-', '*'];
let number1;
let number2;
let operand;

function getRandomOperand(values) {
  const index = getRandomNumber(0, 3);

  return values[index];
}

function createQuestionValue() {
  number1 = getRandomNumber();
  number2 = getRandomNumber();
  operand = getRandomOperand(operandValues);

  return `${number1} ${operand} ${number2}`;
}

function calcResult() {
  if (operand === '+') {
    return number1 + number2;
  } else if (operand === '-') {
    return number1 - number2;
  } else {
    return number1 * number2;
  }
}

function checkAnswer(userAnswer, correctAnswer) {
  return Number(userAnswer) === correctAnswer;
}

export default function brainCalcGame() {
  const rules = 'What is the result of the expression?';

  playGame(rules, createQuestionValue, calcResult, checkAnswer);
}
