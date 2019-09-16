import readlineSync from 'readline-sync';
import {
  car, cdr,
} from '@hexlet/pairs';

export default (condition, generateData) => {
  const logic = (nextRound, name) => {
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
      } else return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
    }
    return console.log(`Congratulations, ${name}`);
  };
  console.log('Welcome to the Brain Games!');
  console.log(condition);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  logic(generateData, name);
};
