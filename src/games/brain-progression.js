import {
  getRandomNumber,
  playGame,
} from '../index.js';

const progressionLength = 6;
let correctAnswer;

function getProgression(firstNumber, step, length) {
  const result = [firstNumber];
  let prevNumber = firstNumber;

  for (let i = 0; i < length - 1; i++) {
    const arrItem = Number(prevNumber) + Number(step);
    result.push(arrItem);
    prevNumber = arrItem;
  }

  return result;
}

function createQuestionValue() {
  const firstNumber = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progression = getProgression(firstNumber, step, progressionLength);
  const missedItemIndex = getRandomNumber(0, progression.length + 1);

  correctAnswer = progression.splice(missedItemIndex, 1, '..');

  return progression.join(' ');
}

function calcCorrectAnswer() {
  return correctAnswer;
}

function checkAnswer(userAnswer) {
  return Number(userAnswer) === Number(correctAnswer);
}

export default function brainProgression() {
  const rules = 'What number is missing in the progression?';

  playGame(rules, createQuestionValue, calcCorrectAnswer, checkAnswer);
}
