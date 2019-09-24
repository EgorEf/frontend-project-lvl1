import { cons } from '@hexlet/pairs';
import core from '..';
import generateNum from '../utility';

const condition = 'Find the greatest common divisor of given numbers.';
const getGcd = (num1, num2) => {
  const bigNum = (num1 >= num2) ? num1 : num2;
  const smallNum = (num1 >= num2) ? num2 : num1;
  let gcd = smallNum;
  for (let counter = gcd; counter > 0; counter -= 1) {
    if (bigNum % counter === 0 && smallNum % counter === 0) {
      gcd = counter;
      break;
    }
  }
  return gcd;
};
const min = 0;
const max = 100;
const generateData = () => {
  const num1 = generateNum(min, max);
  const num2 = generateNum(min, max);
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return cons(question, answer);
};
export default () => core(condition, generateData);
