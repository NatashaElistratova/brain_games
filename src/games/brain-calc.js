import {
  roundsQuantity,
  getRandomNumber,
  startGame,
  playRound,
} from '../index.js';

const operandValues = ['+', '-', '*'];

function getRandomOperand(values) {
  return values[Math.floor(Math.random() * values.length)];
}

function calcResult(value1, value2, operand) {
  const expression = `${value1} ${operand} ${value2}`;
  const resultFunc = new Function(`return ${expression} `);

  return resultFunc();
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
