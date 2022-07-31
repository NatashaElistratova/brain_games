import {
  getRandomNumber,
  playGame,
} from '../index.js';

const operandValues = ['+', '-', '*'];

const getRoundData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operand = operandValues[getRandomNumber(0, 3)];
  const questionValue = `${number1} ${operand} ${number2}`;
  let correctAnswer;

  if (operand === '+') {
    correctAnswer = number1 + number2;
  } else if (operand === '-') {
    correctAnswer = number1 - number2;
  } else if (operand === '*') {
    correctAnswer = number1 * number2;
  }

  return { questionValue, correctAnswer };
};

export default () => {
  const rules = 'What is the result of the expression?';

  playGame(rules, getRoundData);
};
