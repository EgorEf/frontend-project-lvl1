import {
  cons, car, cdr,
} from '@hexlet/pairs';
import core from '..';

export default () => {
  const conditionForGcd = 'Find the greatest common divisor of given numbers.';
  const generateNum = () => {
    const selectionsOfNum = 51;
    return Math.floor(Math.random() * selectionsOfNum);
  };
  const nextRound = () => {
    const num1 = generateNum();
    const num2 = generateNum();
    const biggestNum = (num1 >= num2) ? num1 : num2;
    const smallestNum = (num1 >= num2) ? num2 : num1;
    const expressionToStr = () => String(`${num1} ${num2}`);
    const getCorrectAnswer = () => {
      let gcd = smallestNum;
      for (let counter = gcd; counter > 0; counter -= 1) {
        if (biggestNum % counter === 0 && smallestNum % counter === 0) {
          gcd = counter;
          break;
        }
      }
      return String(gcd);
    };
    const correctAnswer = getCorrectAnswer();
    const forQuestion = expressionToStr();
    return cons(forQuestion, correctAnswer);
  };
  const question = pair => car(pair);
  const correctAnswer = pair => cdr(pair);
  return core(conditionForGcd, correctAnswer, question, nextRound);
};
