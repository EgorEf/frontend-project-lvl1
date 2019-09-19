import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 0;
const max = 101;
const getAnswer = (num) => {
  const correctAns = 'yes';
  const inCorrectAns = 'no';
  for (let divider = 2; divider < num; divider += 1) {
    if (num % divider === 0) {
      return inCorrectAns;
    }
  }
  return correctAns;
};
export default () => {
  const generateData = () => {
    const number = generateNum(min, max);
    const question = String(`${number}`);
    const answer = getAnswer(number);
    return cons(question, answer);
  };
  return core(condition, generateData);
};
