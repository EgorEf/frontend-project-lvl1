import readlineSync from 'readline-sync';
import {
  car, cdr,
} from '@hexlet/pairs';

export default (condition, generateData) => {
  const runLogic = (nextRound, name) => {
    const numberOfRounds = 3;
    for (let counter = numberOfRounds; counter > 0; counter -= 1) {
      const step = nextRound();
      const getQuestion = pair => car(pair);
      const getCorrectAnswer = pair => cdr(pair);
      const question = getQuestion(step);
      const correctAnswer = getCorrectAnswer(step);
      console.log(`Question: ${question}`);
      const answer = readlineSync.question('Your answer: ');
      if (correctAnswer === answer) {
        console.log('Correct!');
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
        console.log(`Let's try again, ${name}!`);
        return null;
      }
    }
    console.log(`Congratulations, ${name}`);
    return null;
  };
  console.log('Welcome to the Brain Games!');
  console.log(condition);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  runLogic(generateData, name);
};
