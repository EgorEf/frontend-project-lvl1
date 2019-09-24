import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 0;
const max = 101;
const isPrime = (num) => {
  for (let divider = 2; divider < num; divider += 1) {
    return (num % divider !== 0);
  }
  return true;
};
const generateData = () => {
  const num = generateNum(min, max);
  const question = 'num';
  const answer = isPrime(num) ? 'yes' : 'no';
  return cons(question, answer);
};
export default () => core(condition, generateData);
