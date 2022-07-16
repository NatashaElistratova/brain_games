import readlineSync from 'readline-sync';
import {
  roundsQuantity, welcomeUser, getUserName, getRandomNumber,
} from '../index.js';

export default function brainEvenGame() {
  welcomeUser();

  const userName = getUserName();

  function isNumberEven(number) {
    return number % 2 === 0;
  }

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < roundsQuantity; i++) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const correctAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      if (i === roundsQuantity - 1) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let\'s try again, ${userName}!`);
      break;
    }
  }
}
