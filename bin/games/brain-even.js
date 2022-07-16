#!/usr/bin/env node

import { roundsQuantity, welcomeUser, getUserName, getRandomNumber } from '../../src/index.js';

welcomeUser();

const userName = getUserName();

function isNumberEven(number) {
  return number % 2 === 0;
}

console.log('Answer "yes" if the number is even, otherwise answer "no".');

// for (let i = 0; i < roundsQuantity; i++) {
//   const randomNumber = getRandomNumber(prevRandomNumber);
//   console.log(`Question: ${randomNumber}`);
//   prevRandomNumber = randomNumber;
//
//   const correctAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';
//   const userAnswer = readlineSync.question('Your answer: ');
//
//   if (userAnswer.toLowerCase() === correctAnswer) {
//     console.log('Correct!');
//
//     if (i === iterationQuantity - 1) {
//       console.log(`Congratulations, ${userName}!`);
//     } else {
//       continue;
//     }
//   } else {
//     console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
//     console.log(`Let\'s try again, ${userName}!`);
//     break;
//   }
// }

