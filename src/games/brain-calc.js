import {
  roundsQuantity,
  getRandomNumber,
  startGame,
  playRound,
} from '../index.js';

function calcResult(value1, value2) {
  return value1 + value2;
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
    const correctAnswer = calcResult(number1, number2);
    const questionValue = `${number1} + ${number2}`;
    const result = playRound(i, questionValue, correctAnswer, checkAnswer);

    if (!result) {
      return;
    }
  }
}
