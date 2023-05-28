#!/usr/bin/env node
import { gameEngine } from '../index.js';
import randomNum from '../../utils.js';

const task = 'What number is missing in the progression?';
const progressionGame = () => {
  const firstNumber = randomNum(20);
  const step = randomNum(10);
  const missingNumIndex = randomNum(9);
  const numArr = [];

  for (let multiplier = 0; multiplier <= 9; multiplier += 1) {
    numArr.push(firstNumber + step * multiplier);
  }

  const correctAnswer = numArr[missingNumIndex];
  numArr[missingNumIndex] = '..';

  const expression = `${numArr.join(' ')}`;
  return [expression, correctAnswer];
};

export default () => gameEngine(task, progressionGame, 'num');
