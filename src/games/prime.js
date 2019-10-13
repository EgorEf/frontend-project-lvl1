import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 0;
const max = 101;
const isPrime = (num) => {
  if (num < 2) return false;
  for (let divider = 2; divider < num / 2; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};
const generateData = () => {
  const question = generateNum(min, max);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};
export default () => core(condition, generateData);
