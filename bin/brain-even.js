#!/usr/bin/env node

import getUserName from '../src/cli.js';
import readlineSync from "readline-sync";

console.log('Welcome to the Brain Games!');

const userName = getUserName();
const iterationQuantity = 3;
let prevRandomNumber = null;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function getRandomInt(min, max) {
  const minRange = Math.ceil(min);
  const maxRange = Math.floor(max);
  return Math.floor(Math.random() * (maxRange - minRange)) + minRange;
}

function getRandomNumber(prevValue) {
  let result = getRandomInt(0, 101);

  if (result !== prevValue) {
    return result;
  } else {
    getRandomNumber(prevValue);
  }
}

function isNumberEven(number) {
  return number % 2 === 0;
}

for (let i = 0; i < iterationQuantity; i++) {
  const randomNumber = getRandomNumber(prevRandomNumber);
  console.log(`Question: ${randomNumber}`);
  prevRandomNumber = randomNumber;

  const correctAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');

    if (i === iterationQuantity - 1) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      continue;
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let\'s try again, ${userName}!`);
    break;
  }
}

