import {
  getRandomNumber,
  playGame,
} from '../index.js';

function isNumberEven(number) {
  return number % 2 === 0;
}

function calcCorrectAnswer(value) {
  return isNumberEven(value) ? 'yes' : 'no';
}

function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer.toLowerCase() === correctAnswer;
}

export default function brainEvenGame() {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  playGame(rules, getRandomNumber, calcCorrectAnswer, checkAnswer);
}
