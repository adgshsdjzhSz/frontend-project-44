#!/usr/bin/env node
import readlineSynk from 'readline-sync';
import randomNum from "../utils.js";
import greetings from '../src/cli.js';

const evenGame = () => {
const name = greetings();
console.log('Answer "yes" if the number is even, otherwise answer "no".')
const roundsCount = 3;
let correctAnswers = 0;

for (correctAnswers; correctAnswers < roundsCount; correctAnswers += 1) {
  let num = randomNum(100);
  console.log(`Question: ${num}`)
  const userAnswer = readlineSynk.question(`Your answer: `)
  const isEven = num % 2 === 0 ? true : false;
  const correctAnswer = isEven ? 'yes' : 'no';
  if(userAnswer === correctAnswer) {
    console.log('Correct!');
  } else if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
    }
  }
  
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

evenGame();