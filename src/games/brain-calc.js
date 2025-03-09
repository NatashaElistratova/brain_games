import {
  getRandomNumber,
  playGame,
} from '../index.js';

const operandValues = ['+', '-', '*'];

const calcResult = (number1, number2, operand) => {
  switch (operand) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      break;
  }
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
