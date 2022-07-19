import {
  roundsQuantity,
  getRandomNumber,
  startGame,
  playRound,
} from '../index.js';

const progressionLength = 6;
let correctAnswer;

function getProgressionString(firstNumber, step, length) {
  const result = [firstNumber];
  const missedItemIndex = getRandomNumber(0, progressionLength + 1);
  let prevNumber = firstNumber;

  for (let i = 0; i < length; i++) {
    const arrItem = prevNumber + step;
    result.push(arrItem);
    prevNumber = arrItem;
  }

  correctAnswer = result.splice(missedItemIndex, 1, '..');
  return result.join(' ');
}

function checkAnswer(userAnswer) {
  return Number(userAnswer) === Number(correctAnswer);
}

export default function brainProgression() {
  const rules = 'What number is missing in the progression?';
  startGame(rules);

  for (let i = 0; i < roundsQuantity; i++) {
    const firstNumber = getRandomNumber(1, 10);
    const step = getRandomNumber(1, 10);
    const progression = getProgressionString(firstNumber, step, progressionLength);
    const result = playRound(i, progression, correctAnswer, checkAnswer);

    if (!result) {
      return;
    }
  }
}
