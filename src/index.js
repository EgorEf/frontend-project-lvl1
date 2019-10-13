import readlineSync from 'readline-sync';
import {
  car, cdr,
} from '@hexlet/pairs';

const roundsCount = 3;
export default (condition, generateData) => {
  console.log('Welcome to the Brain Games!');
  console.log(condition);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  for (let counter = 0; counter < roundsCount; counter += 1) {
    const dataForNewRound = generateData();
    const question = car(dataForNewRound);
    const correctAnswer = cdr(dataForNewRound);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer !== answer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};
