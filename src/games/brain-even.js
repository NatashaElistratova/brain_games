import readlineSync from 'readline-sync';
import {
  roundsQuantity, welcomeUser, getUserName, getRandomNumber,
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

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const result = isUserAnswerCorrect(userAnswer, correctAnswer);

    if (result) {
      console.log('Correct!');
      if (i === roundsQuantity - 1) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let\'s try again, ${userName}!`);
      return;
    }
  }
}
