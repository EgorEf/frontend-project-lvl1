import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

export default () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const generateData = () => {
    const min = 0;
    const max = 101;
    const number = generateNum(min, max);
    const question = String(`${number}`);
    const getAnswer = () => {
      const correctAns = 'yes';
      const inCorrectAns = 'no';
      for (let divider = 2; divider < number; divider += 1) {
        if (number % divider === 0) {
          return inCorrectAns;
        }
      }
      return correctAns;
    };
    const answer = getAnswer();
    return cons(question, answer);
  };
  return core(condition, generateData);
};
