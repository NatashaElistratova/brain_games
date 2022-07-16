import {
  roundsQuantity,
  welcomeUser,
  getUserName,
  getRandomNumber,
  showQuestion,
  getUserAnswer,
  showResultMessage,
} from '../index.js';

function calcResult(value1, value2) {
  return value1 + value2;
}

function showRules() {
  console.log('What is the result of the expression?');
}

function checkAnswer(userAnswer, correctAnswer) {
  return Number(userAnswer) === correctAnswer;
}

export default function brainCalcGame() {
  welcomeUser();
  const userName = getUserName();
  showRules();

  for (let i = 0; i < roundsQuantity; i++) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const correctAnswer = calcResult(number1, number2);

    showQuestion(`${number1} + ${number2}`);

    const userAnswer = getUserAnswer();

    const result = checkAnswer(userAnswer, correctAnswer);

    showResultMessage(result, i, userName, userAnswer, correctAnswer);

    if (!result) {
      return;
    }
  }
}
