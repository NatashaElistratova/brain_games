import readlineSync from 'readline-sync';

const roundsQuantity = 3;
const minRandomNumber = 1;
const maxRandomNumber = 101;
let prevRandomNumber = null;

function welcomeUser() {
  console.log('Welcome to the Brain Games!');
}

function getUserName() {
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}!`);

  return name;
}

function getRandomInt(min, max) {
  const minRange = Math.ceil(min);
  const maxRange = Math.floor(max);
  return Math.floor(Math.random() * (maxRange - minRange)) + minRange;
}

function getRandomNumber() {
  const result = getRandomInt(minRandomNumber, maxRandomNumber);

  if (result !== prevRandomNumber) {
    prevRandomNumber = result;
    return result;
  }
  getRandomNumber();
}

export {
  roundsQuantity, welcomeUser, getUserName, getRandomNumber,
};
