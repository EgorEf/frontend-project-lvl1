import {
  cons, car, cdr,
} from '@hexlet/pairs';
import core from '..';

export default () => {
  const conditionForPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const generateNum = () => {
    const selectionsOfNum = 51;
    return Math.floor(Math.random() * selectionsOfNum);
  };
  const nextRound = () => {
    const number = generateNum();
    const expressionToStr = () => String(`${number}`);
    const getCorrectAnswer = () => {
      const correctAns = 'yes';
      const inCorrectAns = 'no';
      for (let divider = 2; divider < number; divider += 1) {
        if (number % divider === 0) {
          return inCorrectAns;
        }
      }
      return correctAns;
    };
    const correctAnswer = getCorrectAnswer();
    const forQuestion = expressionToStr();
    return cons(forQuestion, correctAnswer);
  };
  const question = pair => car(pair);
  const correctAnswer = pair => cdr(pair);
  return core(conditionForPrime, correctAnswer, question, nextRound);
};
