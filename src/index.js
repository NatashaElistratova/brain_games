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

function showQuestion(value) {
  console.log(`Question: ${value}`);
}

function getUserAnswer() {
  return readlineSync.question('Your answer: ');
}

function showResultMessage(result, round, userName, userAnswer, correctAnswer) {
  if (result) {
    console.log('Correct!');
    if (round === roundsQuantity - 1) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let\'s try again, ${userName}!`);
  }
}

export {
  roundsQuantity, 
  welcomeUser, 
  getUserName, 
  getRandomNumber, 
  showQuestion, 
  getUserAnswer, 
  showResultMessage,
};
