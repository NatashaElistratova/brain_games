import readlineSync from 'readline-sync';

const roundsQuantity = 3;
const minRandomNumber = 1;
const maxRandomNumber = 101;
let prevRandomNumber = null;

function getRandomInt(min, max) {
  const minRange = Math.ceil(min);
  const maxRange = Math.floor(max);
  return Math.floor(Math.random() * (maxRange - minRange)) + minRange;
}

function getRandomNumber(min = minRandomNumber, max = maxRandomNumber) {
  const result = getRandomInt(min, max);

  if (result !== prevRandomNumber) {
    prevRandomNumber = result;
    return result;
  }
  getRandomNumber();
}

function showResultMessage(result, round, name, userAnswer, correctAnswer) {
  if (result) {
    console.log('Correct!');
    if (round === roundsQuantity - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let\'s try again, ${name}!`);
  }
}

function playGame(ruleText, getQuestionValue, calcCorrectAnswer, checkAnswer) {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name: ');

  console.log(`Hello, ${userName}!`);

  console.log(ruleText);

  for (let i = 0; i < roundsQuantity; i++) {
    const questionValue = getQuestionValue();
    console.log(`Question: ${questionValue}`);

    const correctAnswer = calcCorrectAnswer(questionValue);

    const userAnswer = readlineSync.question('Your answer: ');

    const result = checkAnswer(userAnswer, correctAnswer);

    showResultMessage(result, i, userName, userAnswer, correctAnswer);

    if (!result) {
      return;
    }
  }
}

export {
  getRandomNumber,
  playGame,
};
