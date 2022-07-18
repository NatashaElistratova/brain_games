import readlineSync from 'readline-sync';

let userName = '';
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

function showRules(ruleText) {
  console.log(ruleText);
}

function startGame(ruleText) {
  welcomeUser();
  userName = getUserName();
  showRules(ruleText);
}

function playRound(round, questionValue, correctAnswer, checkAnswer) {
  showQuestion(questionValue);
  const userAnswer = getUserAnswer();

  const result = checkAnswer(userAnswer, correctAnswer);

  showResultMessage(result, round, userName, userAnswer, correctAnswer);

  return result;
}

export {
  roundsQuantity, 
  getRandomNumber,
  startGame,
  playRound,
};
