import {
  getRandomNumber,
  playGame,
} from '../index.js';

const operandValues = ['+', '-', '*'];

const calcResult = (number1, number2, operand) => {
  let result;

  if (operand === '+') {
    result = number1 + number2;
  } else if (operand === '-') {
    result = number1 - number2;
  } else if (operand === '*') {
    result = number1 * number2;
  }

  return result;
};

const getRoundData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operand = operandValues[getRandomNumber(0, 3)];
  const questionValue = `${number1} ${operand} ${number2}`;
  const correctAnswer = calcResult(number1, number2, operand);

  return { questionValue, correctAnswer };
};

export default () => {
  const rules = 'What is the result of the expression?';

  playGame(rules, getRoundData);
};
