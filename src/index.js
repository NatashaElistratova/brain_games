import readlineSync from "readline-sync";

const roundsQuantity = 3;
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

function getRandomNumber(prevValue) {
  const result = getRandomInt(0, 101);

  if (result !== prevValue) {
    return result;
  } else {
    getRandomNumber(prevValue);
  }
}

export { roundsQuantity, welcomeUser, getUserName, getRandomNumber }