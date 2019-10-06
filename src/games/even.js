import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum, { getAnswer } from '../utility';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = num => (num % 2 === 0);
const min = 0;
const max = 50;
const generateData = () => {
  const question = generateNum(min, max);
  const answer = getAnswer(isEven(question));
  return cons(question, answer);
};
export default () => core(condition, generateData);
