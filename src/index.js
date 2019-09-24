import readlineSync from 'readline-sync';
import {
  car, cdr,
} from '@hexlet/pairs';

export default (condition, generateData) => {
  const rounds = 3;
  console.log('Welcome to the Brain Games!');
  console.log(condition);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  for (let roundsCount = 1; roundsCount <= rounds; roundsCount += 1) {
    const step = generateData();
    const getQuestion = pair => car(pair);
    const getCorrectAnswer = pair => cdr(pair);
    const question = getQuestion(step);
    const correctAnswer = getCorrectAnswer(step);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } if (roundsCount === rounds) {
      console.log(`Congratulations, ${name}`);
    }
    if (correctAnswer !== answer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};
