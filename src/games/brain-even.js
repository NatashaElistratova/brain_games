import {
  roundsQuantity, 
  getRandomNumber, 
  startGame,
  playRound,
} from '../index.js';

function isNumberEven(number) {
  return number % 2 === 0;
}

function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer.toLowerCase() === correctAnswer;
}

export default function brainEvenGame() {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(rules);

  for (let i = 0; i < roundsQuantity; i++) {
    const randomNumber = getRandomNumber();
    const correctAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';
    const result = playRound(i, randomNumber, correctAnswer, checkAnswer);

    if (!result) {
      return;
    }
  }
}
