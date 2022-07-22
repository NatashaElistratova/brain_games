import {
  roundsQuantity,
  getRandomNumber,
  startGame,
  playRound,
} from '../index.js';

const operandValues = ['+', '-', '*'];

function getRandomOperand(values) {
  const index = getRandomNumber(0, 3);

  return values[index];
}

function calcResult(value1, value2, operand) {
  if (operand === '+') {
    return value1 + value2;
  } else if (operand === '-') {
    return value1 - value2;
  } else {
    return value1 * value2;
  }
}

function checkAnswer(userAnswer, correctAnswer) {
  return Number(userAnswer) === correctAnswer;
}

export default function brainCalcGame() {
  const rules = 'What is the result of the expression?';
  startGame(rules);

  for (let i = 0; i < roundsQuantity; i++) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const operand = getRandomOperand(operandValues);
    const correctAnswer = calcResult(number1, number2, operand);
    const questionValue = `${number1} ${operand} ${number2}`;
    const result = playRound(i, questionValue, correctAnswer, checkAnswer);

    if (!result) {
      return;
    }
  }
}
