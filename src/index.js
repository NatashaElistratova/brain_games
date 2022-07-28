import readlineSync from 'readline-sync';

const roundsCount = 3;
const minRandomNumber = 1;
const maxRandomNumber = 101;

function getRandomNumber(min = minRandomNumber, max = maxRandomNumber) {
  const minRange = Math.ceil(min);
  const maxRange = Math.floor(max);
  const result = Math.floor(Math.random() * (maxRange - minRange)) + minRange;

  return result;
}

function playGame(rules, getRoundData) {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name: ');

  console.log(`Hello, ${userName}!`);

  console.log(rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const { questionValue, correctAnswer } = getRoundData();

    console.log(`Question: ${questionValue}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
      if (i === roundsCount - 1) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
}

export {
  getRandomNumber,
  playGame,
};
