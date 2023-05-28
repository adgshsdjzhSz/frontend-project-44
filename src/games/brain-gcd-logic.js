#!/usr/bin/env node
import { gameEngine } from '../index.js';
import randomNum from '../../utils.js';
const task = 'Find the greatest common divisor of given numbers.';

const brainGCDGame = () => {
  const firstNumber = randomNum(100);
  const secondNumber = randomNum(100);

  const minNumber = firstNumber > secondNumber ? secondNumber : firstNumber;
  let gcd = 1;
  for (let i = 2; i <= minNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      gcd = i;
    }
  }

  const expression = `${firstNumber} ${secondNumber}`;
  const correctAnswer = gcd;
  return [expression, correctAnswer];
};

export default () => gameEngine(task, brainGCDGame, 'num');