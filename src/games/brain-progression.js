import {
  getRandomNumber,
  playGame,
} from '../index.js';

const progressionLength = 6;

function getProgression(start, step, length) {
  const result = [];

  for (let i = 0; i < length; i++) {
    const arrItem = start + i * step;
    result.push(arrItem);
  }

  return result;
}

function getRoundData() {
  const firstNumber = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progression = getProgression(firstNumber, step, progressionLength);
  const missedItemIndex = getRandomNumber(0, progression.length);

  const correctAnswer = progression.splice(missedItemIndex, 1, '..');
  const questionValue = progression.join(' ');

  return { questionValue, correctAnswer };
}

export default function runBrainProgression() {
  const rules = 'What number is missing in the progression?';

  playGame(rules, getRoundData);
}
