import {
  roundsQuantity,
  getRandomNumber,
  startGame,
  playRound,
} from '../index.js';

const progressionLength = 6;
let correctAnswer;

function getProgression(firstNumber, step, length) {
  const result = [firstNumber];
  let prevNumber = firstNumber;

  for (let i = 0; i < length; i++) {
    const arrItem = Number(prevNumber) + Number(step);
    result.push(arrItem);
    prevNumber = arrItem;
  }

  return result;
}

function createQuestion(array) {
  const missedItemIndex = getRandomNumber(0, array.length);
  correctAnswer = array.splice(missedItemIndex, 1, '..');

  return array.join(' ');
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
    const progression = getProgression(firstNumber, step, progressionLength);
    const question = createQuestion(progression);
    const result = playRound(i, question, correctAnswer, checkAnswer);

    if (!result) {
      return;
    }
  }
}
