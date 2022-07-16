import {
  roundsQuantity, 
  welcomeUser, 
  getUserName, 
  getRandomNumber, 
  showQuestion, 
  getUserAnswer,
  showResultMessage,
} from '../index.js';

function isNumberEven(number) {
  return number % 2 === 0;
}

function showRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function isUserAnswerCorrect(userAnswer, correctAnswer) {
  return userAnswer.toLowerCase() === correctAnswer;
}

export default function brainEvenGame() {
  welcomeUser();
  const userName = getUserName();
  showRules();

  for (let i = 0; i < roundsQuantity; i++) {
    const randomNumber = getRandomNumber();
    const correctAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';

    showQuestion(randomNumber);

    const userAnswer = getUserAnswer();

    const result = isUserAnswerCorrect(userAnswer, correctAnswer);

    showResultMessage(result, i, userName, userAnswer, correctAnswer);

    if (!result) {
      return;
    }
  }
}
